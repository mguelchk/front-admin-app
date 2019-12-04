import { Component, OnInit, ViewChild } from '@angular/core';
import { Estado } from '../../models/estado.model';
import { Area } from '../../models/area.model';
import { Vacante } from '../../models/vacante.model';
import { EstadoService, AreaService, VacanteService } from '../../services/service.index';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert2';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.vacante.component.html',
  styles: []
})
export class EmpleoVacanteComponent implements OnInit {

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

  constructor(
    private estadoService: EstadoService,
    private areaService: AreaService,
    private vacanteService: VacanteService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.obtenerEsados();
    this.area = new Area(null, null, null);
    this.vacante = new Vacante();
    this.estado = new Estado();
    this.vacante.estado = this.estado;
    this.keyword = 'nombre';

  }

  selectEvent(item, tipo: number) {

    switch (tipo) {
      case this.AREA:
        this.setArea(item);
        break;
      case this.ESTADO:
        this.setEstado(item);
        break;
      default: console.log("No existe valores");
    }

  }

  onChangeSearch(val: string) {
    if (val.length > 2) {
      this.buscarAreas(val);
    }
  }

  onCleared(e, tipo: number) {
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
    });
  }
  buscarAreas(nombre: string) {
    this.areaService.obtenerAreasPorNombre(nombre).subscribe(resp => {

      if (resp.ok) {
        this.areas = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
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
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
    });
    
  }

}
