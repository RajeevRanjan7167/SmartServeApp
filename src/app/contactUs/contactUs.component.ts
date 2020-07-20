import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactUs',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css'],
})
export class ContactUsComponent implements OnInit {
  ContactUsForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {this.ContactUsCreation();}

  cancel() {}

  ContactUsCreation() {
    this.ContactUsForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userNameContactNumber: ['', Validators.required],
      userNameEmailAddress: ['', Validators.required],
      userQuery: ['', Validators.required]
    });
  }
}
