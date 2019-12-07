import { Component, OnInit } from '@angular/core';
import { Area } from '../../models/area.model';
import { AreaService } from '../../services/service.index';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
import { ModalAreaService } from '../../services/modal/areas/modal.area.service';

@Component({
  selector: 'app-puesto',
  templateUrl: './area.component.html',
  styles: []
})
export class AreaComponent implements OnInit {

  areas: Area[] = [];
  area: Area;
  areaSeleccionada: Area;
  p: number = 1;
  constructor(
    private areaService: AreaService,
    private spinner: NgxSpinnerService,
    public modalAreaService: ModalAreaService
  ) {

  }

  ngOnInit() {
    this.area = new Area(null, null, null);
    this.obtenerAreas();
    this.modalAreaService.notificacion
      .subscribe( resp => this.obtenerAreas() );
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
  agregarEditarArea() {

    this.area.idArea = null;
    this.spinner.show();
    this.areaService.crearActualizarAreas(this.area).subscribe(resp => {

      this.modalAreaService.notificacion.emit( resp );
      if (resp.ok) {
        this.area = new Area(null, null, null);
        swal('Exito', resp.message, 'success');
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.spinner.hide();
      this.obtenerAreas();
    });

  }

  mostrarModal(areaEdit: Area) {
    console.log(areaEdit);
    this.areaSeleccionada = { ...areaEdit };
    this.modalAreaService.mostrarModal();
  }

  eliminarArea(area: Area) {

    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar el area ${area.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    })
      .then(borrar => {

        if (borrar) {
          this.spinner.show();
          this.areaService.eliminarAreas(area.idArea).subscribe(resp => {

            if (resp.ok) {
              swal('Exito', resp.message, 'success');
            } else if (resp.message) {
              swal('Error', resp.message, 'warning');
            }
            this.spinner.hide();
            this.obtenerAreas();
          });

        }

      });

      


  }

}
