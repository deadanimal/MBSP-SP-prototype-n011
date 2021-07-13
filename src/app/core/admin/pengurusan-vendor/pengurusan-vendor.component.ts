import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-pengurusan-vendor",
  templateUrl: "./pengurusan-vendor.component.html",
  styleUrls: ["./pengurusan-vendor.component.scss"],
})
export class PengurusanVendorComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  // Modal
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      idvendor: "1111",
      nama: "Syarikat 1",
      kategori: "1",
      skala: "Besar",
      pengalaman: "12",
    },
    {
      idvendor: "1112",
      nama: "Syarikat 1",
      kategori: "2",
      skala: "Kecil",
      pengalaman: "4",
    },
    {
      idvendor: "1113",
      nama: "Syarikat 2",
      kategori: "3",
      skala: "Besar",
      pengalaman: "6",
    },
    {
      idvendor: "1114",
      nama: "Syarikat 4",
      kategori: "4",
      skala: "Besar",
      pengalaman: "9",
    },
    {
      idvendor: "1115",
      nama: "Syarikat 2",
      kategori: "5",
      skala: "Sedang",
      pengalaman: "3",
    },
  ];
  SelectionType = SelectionType;

  constructor(private modalService: BsModalService, private _formBuilder: FormBuilder,) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-lg" });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: "model-default" });
  }

  closeModal() {
    this.modalRef.hide();
  }

  closeModal2() {
    this.modalRef2.hide();
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Anda pasti untuk manambah data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Sah",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        if (result.value) {
          this.register();
        }
      });
  }

  register() {
    swal
      .fire({
        title: "Berjaya",
        text: "Data telah disimpan!",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Tutup",
      })
      .then((result) => {
        if (result.value) {
          this.modalRef.hide();
        }
      });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnInit() {}
}
