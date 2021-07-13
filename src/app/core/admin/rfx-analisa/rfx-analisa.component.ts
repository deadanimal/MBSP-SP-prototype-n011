import { Component, OnInit, AfterViewInit, NgZone, TemplateRef } from "@angular/core";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import * as moment from "moment";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import swal from "sweetalert2";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-rfx-analisa",
  templateUrl: "./rfx-analisa.component.html",
  styleUrls: ["./rfx-analisa.component.scss"],
})
export class RfxAnalisaComponent implements OnInit, AfterViewInit {
  
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  private chart1: any;
  private chart2: any;
  private chart3: any;

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
      jenis: "Sebutharga",
      kategori: "ICT",
      tarikh: "6/7/2021",
      status: "1",
    },
    {
      jenis: "Tender",
      kategori: "M&E",
      tarikh: "12/6/2021",
      status: "2",
    },
    {
      jenis: "Rundingan Terus",
      kategori: "Sivil",
      tarikh: "2/7/2021",
      status: "3",
    },
    {
      jenis: "Tender",
      kategori: "Arkitek",
      tarikh: "23/5/2021",
      status: "2",
    },
    {
      jenis: "Sebutharga",
      kategori: "Landskap",
      tarikh: "1/7/2021",
      status: "1",
    },
  ];
  SelectionType = SelectionType;

  constructor(
    private _formBuilder: FormBuilder,
    private zone: NgZone,
    private modalService: BsModalService
  ) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
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

    setTimeout(() => {
      this.getChart3();
    },1000);
    
  }

  closeModal() {
    this.modalRef.hide();
  }

  confirm() {
    swal
      .fire({
        title: "Pengesahan",
        text: "Pasti untuk menambah maklumat?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Pasti",
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
        text: "Maklumat telah disimpan",
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

  ngOnInit() {

    this.getCharts();

    var calendarEl = document.getElementById("widget-calendar");

    var calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin],
      defaultView: "dayGridMonth",
      selectable: true,
      contentHeight: "auto",

      buttonIcons: {
        prev: " ni ni-bold-left",
        next: " ni ni-bold-right",
      },
      header: {
        right: "next",
        center: "title, ",
        left: "prev",
      },
      defaultDate: "2018-12-01",
      editable: true,
      events: [
        {
          title: "Call with Dave",
          start: "2018-11-18",
          end: "2018-11-18",
          className: "bg-red",
        },

        {
          title: "Lunch meeting",
          start: "2018-11-21",
          end: "2018-11-22",
          className: "bg-orange",
        },

        {
          title: "All day conference",
          start: "2018-11-29",
          end: "2018-11-29",
          className: "bg-green",
        },

        {
          title: "Meeting with Mary",
          start: "2018-12-01",
          end: "2018-12-01",
          className: "bg-blue",
        },

        {
          title: "Winter Hackaton",
          start: "2018-12-03",
          end: "2018-12-03",
          className: "bg-red",
        },

        {
          title: "Digital event",
          start: "2018-12-07",
          end: "2018-12-09",
          className: "bg-warning",
        },

        {
          title: "Marketing event",
          start: "2018-12-10",
          end: "2018-12-10",
          className: "bg-purple",
        },

        {
          title: "Dinner with Family",
          start: "2018-12-19",
          end: "2018-12-19",
          className: "bg-red",
        },

        {
          title: "Black Friday",
          start: "2018-12-23",
          end: "2018-12-23",
          className: "bg-blue",
        },

        {
          title: "Cyber Week",
          start: "2018-12-02",
          end: "2018-12-02",
          className: "bg-yellow",
        },
      ],
    });

    calendar.render();

    //Display Current Date as Calendar widget header
    var mYear = moment().format("YYYY");
    var mDay = moment().format("dddd, MMM D");
    document.getElementsByClassName("widget-calendar-year")[0].innerHTML =
      mYear;
    document.getElementsByClassName("widget-calendar-day")[0].innerHTML = mDay;
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
      
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("ana1", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Dibuka",
        litres: 501.9,
      },
      {
        country: "Belum dibuka",
        litres: 301.9,
      },
      {
        country: "Batal",
        litres: 201.1,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";

    this.chart1 = chart;
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("ana2", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Sebutharga",
        litres: 201.1,
      },
      {
        country: "Tender",
        litres: 128.3,
      },
      {
        country: "Rundingan terus",
        litres: 99,
      },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chart2 = chart;
  }

  getChart3(){
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("ra11", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "country": "Vendor 1",
      "visits": 3025
    }, {
      "country": "Vendor 2",
      "visits": 1882
    }, {
      "country": "Vendor 3",
      "visits": 1809
    }, {
      "country": "Vendor 4",
      "visits": 1322
    }, {
      "country": "Vendor 5",
      "visits": 1122
    }];

    prepareParetoData();

    function prepareParetoData(){
        let total = 0;

        for(var i = 0; i < chart.data.length; i++){
            let value = chart.data[i].visits;
            total += value;
        }

        let sum = 0;
        for(var i = 0; i < chart.data.length; i++){
            let value = chart.data[i].visits;
            sum += value;   
            chart.data[i].pareto = sum / total * 100;
        }    
    }

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 60;
    categoryAxis.tooltip.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    })


    let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    paretoValueAxis.renderer.opposite = true;
    paretoValueAxis.min = 0;
    paretoValueAxis.max = 100;
    paretoValueAxis.strictMinMax = true;
    paretoValueAxis.renderer.grid.template.disabled = true;
    paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
    paretoValueAxis.numberFormatter.numberFormat = "#'%'"
    paretoValueAxis.cursorTooltipEnabled = false;

    let paretoSeries = chart.series.push(new am4charts.LineSeries())
    paretoSeries.dataFields.valueY = "pareto";
    paretoSeries.dataFields.categoryX = "country";
    paretoSeries.yAxis = paretoValueAxis;
    paretoSeries.tooltipText = "Prestasi teknikal: {valueY.formatNumber('#.0')}%[/]";
    paretoSeries.bullets.push(new am4charts.CircleBullet());
    paretoSeries.strokeWidth = 2;
    paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    paretoSeries.strokeOpacity = 0.5;

    // Cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    this.chart3 = chart;
  }
}
