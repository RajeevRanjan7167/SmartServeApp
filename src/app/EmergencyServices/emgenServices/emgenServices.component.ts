import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emgenServices',
  templateUrl: './emgenServices.component.html',
  styleUrls: ['./emgenServices.component.css'],
})
export class EmgenServicesComponent implements OnInit {
  public rowData: any;
  CovidHospitalForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  defaultColDef = [{ sortable: true }, { resizable: true }, { filter: true }];
  columnDefs = [
    {
      headerName: 'Hospital',
      field: 'rm_Login_Id',
      width: 400,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'City',
      field: 'rm_Login_Id',
      width: 300,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Total No Of Beds',
      field: 'rm_Login_Id',
      width: 200,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Contact Details',
      field: 'rm_Login_Id',
      width: 200,
      sortable: true,
      filter: true,
    }
  ];

  ngOnInit() {
    this.createCovidDashboardForm();
  }

  createCovidDashboardForm() {
    this.CovidHospitalForm = this.formBuilder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      dist: ['', Validators.required],
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
