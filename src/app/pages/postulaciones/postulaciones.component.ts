import { Component, OnInit } from '@angular/core';
import { Area } from '../../models/area.model';
import { AuthService, EstadoService, AreaService, PostulacionService } from 'src/app/services/service.index';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Cliente } from '../../models/cliente.model';
import { Postulacion } from '../../models/postulacion.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-candidato',
  templateUrl: './postulaciones.component.html',
  styles: []
})
export class PostulacionComponent implements OnInit {

  areas: Area[] = [];
  area: Area;
  cliente: Cliente;
  clientes: Cliente[] = [];
  postulaciones: Postulacion[] = [];
  p: number = 1;

  constructor(
    private authService: AuthService,
    private areaService: AreaService,
    private postulacionService: PostulacionService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    //this.obtenerAreas();
    //this.obtenerClientes();
  }

  buscarPostulaciones() {
    this.spinner.show();
    let condiciones: string = "";
    this.postulacionService.obtenerPostulacion(condiciones).subscribe(resp => {
      if (resp.ok) {
        this.postulaciones = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    });
  }
  obtenerAreas() {
    this.spinner.show();
    this.areaService.obtenerAreas().subscribe(resp => {
      if (resp.ok) {
        this.areas = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    });
  }

  obtenerClientes() {
    this.spinner.show();
    this.areaService.obtenerAreas().subscribe(resp => {
      if (resp.ok) {
        this.areas = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    });
  }
}
