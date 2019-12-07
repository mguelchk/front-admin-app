import { Component, OnInit, Input } from '@angular/core';
import { Area } from '../../models/area.model';
import { AreaService } from '../../services/service.index';
import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';
import { ModalAreaService } from '../../services/modal/areas/modal.area.service';

@Component({
  selector: 'app-modal-area',
  templateUrl: './modal.area.component.html',
  styles: []
})
export class ModalAreaComponent implements OnInit {

  @Input() area: Area;
  constructor(
    private modalAreaService: ModalAreaService,
    private areaService: AreaService,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit() {

  }
  editarArea() {
    this.spinner.show();
    this.areaService.crearActualizarAreas(this.area).subscribe(resp => {

      if (resp.ok) {
        this.area = resp.response;
        swal('Exito', resp.message, 'success');
      } else if (resp.message) {
        swal('Error', resp.message, 'warning');
      }
      this.cerrarModal();
      this.spinner.hide();
      this.modalAreaService.notificacion.emit(resp);
    });
  }
  cerrarModal() {

    this.modalAreaService.ocultarModal();

  }



}
