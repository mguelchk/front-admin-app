
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, EstadoService, AreaService, VacanteService } from '../../services/service.index';
import { Estado } from '../../models/estado.model';
import swal from 'sweetalert2';
import { Area } from '../../models/area.model';
import { Vacante } from '../../models/vacante.model';

declare var $: any;
@Component({
  selector: 'app-vacante-usuario',
  templateUrl: './vacante.usuario.component.html',
  styles: []
})
export class VacanteUsuarioComponent implements OnInit {

  estados: Estado[];
  areas: Area[];
  vacantes: Vacante[];
  estado: Estado;
  area: Area;
  vacante : Vacante;

  constructor(
    private authService: AuthService,
    private router: Router,
    private estadoService: EstadoService,
    private areaService: AreaService,
    private vacanteService: VacanteService
  ) { }
  array: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/empleo']);
    }
    this.obtenerEsados();
    this.area = new Area(null, null, null);
    this.vacante = new Vacante();
    this.estado = new Estado();
    this.vacante.estado = this.estado;
    $(".select2").select2();

  }

  obtenerEsados() {

    this.estadoService.obtenerEstados().subscribe(resp => {

      if (resp.ok) {
        this.estados = resp.response;
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
    });
  }
  buscarAreas() {

    this.areaService.obtenerAreasPorNombre(this.area.nombre).subscribe(resp => {

      if (resp.ok) {
        this.areas = resp.response;
        console.log(this.areas);
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
    });

  }

  buscarVacantes() {
    /*this.vacanteService.obtenerVacantes(this.vacante).subscribe(resp => {

      if (resp.ok) {
        this.vacantes = resp.response;
        console.log(this.vacantes);
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
    });*/
    console.log(this.estado);
  }
}
