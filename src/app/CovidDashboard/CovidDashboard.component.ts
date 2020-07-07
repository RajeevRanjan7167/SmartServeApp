import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-CovidDashboard',
  templateUrl: './CovidDashboard.component.html',
  styleUrls: ['./CovidDashboard.component.css']
})
export class CovidDashboardComponent implements OnInit {
  public rowData: any;
  CovidDashboardForm: FormGroup;
  
  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) { }

  statelst: any[] = ['Bihar', 'karnataka', 'Uttar Pradesh' ];
  districtlst: any[] = ['East Champaran', 'Patna' ];

  defaultColDef = [{ sortable: true }, { resizable: true }, { filter: true }];
  columnDefs = [
    { headerName: 'State', field: 'rm_Login_Id', width: 300, sortable: true, filter: true },
    { headerName: 'Total Cases', field: 'rm_Login_Id', width: 200, sortable: true, filter: true },
    { headerName: 'Active Cases', field: 'rm_Login_Id', width: 200, sortable: true, filter: true },
    { headerName: 'Recovered Cases', field: 'rm_Login_Id', width: 200, sortable: true, filter: true },
    { headerName: 'Deaths', field: 'rm_Login_Id', width: 200, sortable: true, filter: true }
  ];

  ngOnInit() {
    this.createCovidDashboardForm();
    this.fillDetaultValue();
  }

  fillDetaultValue() {
    this.CovidDashboardForm.controls['state'].setValue(this.statelst[0], {onlySelf: true});
    this.CovidDashboardForm.controls['dist'].setValue(this.districtlst[0], {onlySelf: true});
  }

  createCovidDashboardForm(){
    this.CovidDashboardForm = this.formBuilder.group({
      state: ['', Validators.required],
      dist: ['', Validators.required]
    });
  }

  onRowClicked(event: any) {
    console.log('row', event);
  }

  onCellClicked(event: any) {
    console.log('cell', event);
  }

  onSelectionChanged(event: any) {
    console.log('selection', event);
  }

  cancel() {}

}
