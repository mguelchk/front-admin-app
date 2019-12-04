
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SesionService, VacanteService } from '../../../services/service.index';
import { Vacante } from '../../../models/vacante.model';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert2';


@Component({
  selector: 'app-detalle-vacante',
  templateUrl: './detalle.vacante.component.html',
  styles: []
})
export class DetalleVacanteComponent implements OnInit {


  vacante: Vacante;

  constructor(
    private router: Router,
    private sesionService: SesionService,
    private activatedRoute: ActivatedRoute,
    private vacanteService: VacanteService,
    public spinner: NgxSpinnerService
  ) {
    this.vacante = new Vacante();
    this.vacante.nombre = null;
    this.activatedRoute.params.subscribe(params => {

      let idVacante = params['idVacante'];
      this.obtenerVacante(idVacante);

    });
  }

  ngOnInit() {

  }

  aplicarVacante() {

    this.sesionService.agregarIdPaginaVacante("" + this.vacante.idVacante);
    this.router.navigate(['/dashboard']);

  }

  obtenerVacante(idVacante: number) {
    this.spinner.show();
    this.vacanteService.obtenerVacante(idVacante, 0).subscribe(resp => {

      if (resp.ok) {
        this.vacante = resp.response;
        console.log(this.vacante);
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    });
  }
}
