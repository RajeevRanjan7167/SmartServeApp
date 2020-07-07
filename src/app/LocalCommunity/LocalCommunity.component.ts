import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-LocalCommunity',
  templateUrl: './LocalCommunity.component.html',
  styleUrls: ['./LocalCommunity.component.css'],
})
export class LocalCommunityComponent implements OnInit {
  LocalCommunityForm: FormGroup;

  statelst: any[] = ['Bihar', 'karnataka', 'Uttar Pradesh'];
  citylst: any[] = ['Motihari', 'Gaya', 'Patna'];
  districtlst: any[] = ['East Champaran', 'Patna'];

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createLocalCommunityForm();
    this.fillDetaultValue();
  }

  createLocalCommunityForm() {
    this.LocalCommunityForm = this.formBuilder.group({
      state: ['', Validators.required],
      dist: ['', Validators.required],
      city: ['', Validators.required]      
    });
  }

  fillDetaultValue() {
    this.LocalCommunityForm.controls['state'].setValue(this.statelst[0], {onlySelf: true});
    this.LocalCommunityForm.controls['dist'].setValue(this.districtlst[0], {onlySelf: true});
    this.LocalCommunityForm.controls['city'].setValue(this.citylst[0], {onlySelf: true});
  }

}
