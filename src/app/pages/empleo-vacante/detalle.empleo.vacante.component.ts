import { Component, OnInit } from '@angular/core';
import { Vacante } from '../../models/vacante.model';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { SesionService, VacanteService, PostulacionService, AuthService } from '../../services/service.index';
import { Postulacion } from '../../models/postulacion.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-busqueda',
  templateUrl: './detalle.empleo.vacante.component.html',
  styles: []
})
export class DetalleEmpleoVacanteComponent implements OnInit {

  vacante: Vacante;
  postulacion: Postulacion;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private vacanteService: VacanteService,
    private postulacionService: PostulacionService,
    private AuthService: AuthService,
    public spinner: NgxSpinnerService
  ) {
    this.activatedRoute.params.subscribe(params => {

      let idVacante = params['idVacante'];
      this.obtenerVacante(idVacante);
      this.vacante = new Vacante();


    });
  }

  ngOnInit() {
    this.postulacion = new Postulacion();
  }


  aplicarVacante() {
    this.spinner.show();
    this.postulacion.vacante = this.vacante;
    this.postulacion.usuario = this.AuthService.usuario;
    this.postulacionService.crearPostulacion(this.postulacion).subscribe(resp => {

      if (resp.ok) {
        this.postulacion = resp.response;
        swal('Exito', resp.message, 'success');
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    });
  }

  obtenerVacante(idVacante: number) {
    this.spinner.show();
    this.vacanteService.obtenerVacante(idVacante).subscribe(resp => {

      if (resp.ok) {
        this.vacante = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    });
  }

}
