import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ambulanceServices',
  templateUrl: './ambulanceServices.component.html',
  styleUrls: ['./ambulanceServices.component.css'],
})
export class AmbulanceServicesComponent implements OnInit {
  public rowData: any;
  AmbulanceServicesForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  defaultColDef = [{ sortable: true }, { resizable: true }, { filter: true }];
  columnDefs = [
    {
      headerName: 'State',
      field: 'rm_Login_Id',
      width: 400,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Contact No',
      field: 'rm_Login_Id',
      width: 300,
      sortable: true,
      filter: true,
    },
  ];

  ngOnInit() {
    this.createCovidDashboardForm();
  }

  createCovidDashboardForm() {
    this.AmbulanceServicesForm = this.formBuilder.group({});
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
