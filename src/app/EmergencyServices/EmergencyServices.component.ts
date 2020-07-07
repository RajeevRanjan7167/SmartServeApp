import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-EmergencyServices',
  templateUrl: './EmergencyServices.component.html',
  styleUrls: ['./EmergencyServices.component.css']
})
export class EmergencyServicesComponent implements OnInit {

  EmergencyServicesForm: FormGroup;

  statelst: any[] = ['Bihar', 'karnataka', 'Uttar Pradesh'];
  citylst: any[] = ['Motihari', 'Gaya', 'Patna'];
  districtlst: any[] = ['East Champaran', 'Patna'];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createLocalCommunityForm();
    this.fillDetaultValue();
  }

  createLocalCommunityForm() {
    this.EmergencyServicesForm = this.formBuilder.group({
      state: ['', Validators.required],
      dist: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  fillDetaultValue() {
    this.EmergencyServicesForm.controls['state'].setValue(this.statelst[0], {onlySelf: true});
    this.EmergencyServicesForm.controls['dist'].setValue(this.districtlst[0], {onlySelf: true});
    this.EmergencyServicesForm.controls['city'].setValue(this.citylst[0], {onlySelf: true});
  }
}
