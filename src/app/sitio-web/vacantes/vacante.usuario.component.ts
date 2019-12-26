
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, EstadoService, AreaService, VacanteService } from '../../services/service.index';
import { Estado } from '../../models/estado.model';
import swal from 'sweetalert2';
import { Area } from '../../models/area.model';
import { Vacante } from '../../models/vacante.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-vacante-usuario',
  templateUrl: './vacante.usuario.component.html',
  styles: []
})
export class VacanteUsuarioComponent implements OnInit {

  @ViewChild("autArea", null) autArea;
  @ViewChild("autEstado", null) autEstado;

  estados: Estado[];
  areas: Area[] = [];
  vacantes: Vacante[] = [];
  estado: Estado;
  area: Area;
  vacante: Vacante;
  keyword: string;
  data: any[];
  sinResultados: string = "Sin resultados";
  p: number = 1;
  AREA: number = 1;
  ESTADO: number = 2;
  areaSeleccionada : boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private estadoService: EstadoService,
    private areaService: AreaService,
    private vacanteService: VacanteService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/empleo-vacante']);
    }
    this.obtenerEsados();
    this.area = new Area(null, null, null);
    this.vacante = new Vacante();
    this.estado = new Estado();
    this.vacante.estado = this.estado;
    this.keyword = 'nombre';

  }

  selectEvent(item, tipo: number) {
    
    console.log("seleccionado");
    switch (tipo) {
      case this.AREA:
        this.setArea(item);
        this.areaSeleccionada = true;
        break;
      case this.ESTADO:
        this.setEstado(item);
        break;
      default: console.log("No existe valores");
    }

  }

  onChangeSearch(val: string) {
    this.areaSeleccionada = false;
    if (val.length > 2) {
      this.buscarAreas(val);
    }
  }

  onCleared(e, tipo: number) {
    console.log("oncler");
    switch (tipo) {
      case this.AREA:
        this.removeArea();
        break;
      case this.ESTADO:
        this.removeEstado();
        break;
      default: console.log("No existe valores");
    }
  }

  onFocused(e, tipo: number) {
    console.log(tipo);
    switch (tipo) {
      case this.AREA:
        this.removeArea();
        this.autArea.clear();
        break;
      case this.ESTADO:
        this.removeEstado();
        this.autEstado.clear();
        break;
      default: console.log("No existe valores");
    }
  }


  setArea(item) {
    this.area.nombre = item.nombre;
    this.area.idArea = item.idArea;
  }

  setEstado(item) {
    this.estado.nombre = item.nombre;
    this.estado.idEstado = item.idEstado;
  }

  removeArea() {
    this.area = new Area(null, null, null);
  }

  removeEstado() {
    this.estado = new Estado();
  }

  obtenerEsados() {
    this.spinner.show();
    this.estadoService.obtenerEstados().subscribe(resp => {
      if (resp.ok) {
        this.estados = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    }, err => {
      swal('Error ', 'Servicio no disponible', 'error');
      this.spinner.hide();
    });
  }
  buscarAreas(nombre: string) {

    this.areaService.obtenerAreasPorNombre(nombre).subscribe(resp => {

      if (resp.ok) {
        this.areas = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'error');
      }
    }, err => {
      swal('Error ', 'Servicio no disponible', 'error');
      this.spinner.hide();
    });

  }

  buscarVacantes() {
    this.spinner.show();
    this.vacante.estado = this.estado;
    this.vacante.area = this.area;
    this.vacanteService.obtenerVacantes(this.vacante).subscribe(resp => {

      if (resp.ok) {
        this.vacantes = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'error');
      }
      this.spinner.hide();
    }, err => {
      swal('Error ', 'Servicio no disponible', 'error');
      this.spinner.hide();
    });

  }

}
