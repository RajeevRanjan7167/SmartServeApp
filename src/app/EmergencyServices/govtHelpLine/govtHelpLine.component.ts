import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { State } from '../../models/state';
import { ApiServicesService } from '../../services/apiServices.service';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-govtHelpLine',
  templateUrl: './govtHelpLine.component.html',
  styleUrls: ['./govtHelpLine.component.css'],
})
export class GovtHelpLineComponent implements OnInit {
  public rowData: any;
  GovernmentHelplineForm: FormGroup;
  state: State[];

  selectedState: string;
  strCentralPhone: string;
  strCentralEnvelope: string;
  strCentralWhatsapp: string;
  strCentralFacebook: string;
  strCentralTwitter: string;

  strStateName: string;
  strStatelPhone: string;

  // statelst: any[] = ['Bihar', 'karnataka', 'Uttar Pradesh'];
  // citylst: any[] = ['Motihari', 'Gaya', 'Patna'];
  // districtlst: any[] = ['East Champaran', 'Patna'];

  orders = [];

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private apiServicesService: ApiServicesService
  ) {
    // async orders
    of(this.getstate()).subscribe((states) => {
      this.orders = states;
    });
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.createLocalCommunityForm();
    // this.fillDetaultValue();
    this.fillContactInfo();
    this.loadState();
  }

  getstate() {
    return [
      { stateCode: 'BR', stateName: 'Bihar' },
      { stateCode: 'KA', stateName: 'karnataka' },
      { stateCode: 'UP', stateName: 'Uttar Pradesh' },
      { stateCode: 'PB', stateName: 'Panjab' },
    ];
  }

  loadState() {
    this.apiServicesService.getstate().subscribe((stateInfor: State[]) => {
      this.state = stateInfor;
      //this.statelst = this.state;
    });
  }

  // tslint:disable-next-line: typedef
  createLocalCommunityForm() {
    this.GovernmentHelplineForm = this.formBuilder.group({
      state: ['', Validators.required],
    });
  }

  // // tslint:disable-next-line: typedef
  // fillDetaultValue() {
  //   this.GovernmentHelplineForm.controls.state.setValue(this.statelst[0], {
  //     onlySelf: true,
  //   });
  //   this.GovernmentHelplineForm.controls.dist.setValue(this.districtlst[0], {
  //     onlySelf: true,
  //   });
  //   this.GovernmentHelplineForm.controls.city.setValue(this.citylst[0], {
  //     onlySelf: true,
  //   });
  // }

  // tslint:disable-next-line: typedef
  fillContactInfo() {
    this.strCentralPhone = '+91-11-23978046, 1075(Tollfree)';
    this.strCentralEnvelope = 'ncov2019@gov.in';
    this.strCentralWhatsapp = '';
    this.strCentralFacebook = 'https://twitter.com/MoHFW_INDIA';
    this.strCentralTwitter = 'https://www.facebook.com/MoHFWIndia';

    this.strStateName = ''; //this.statelst[0];
    this.strStatelPhone = '1800313444222, +91-3323412600';
  }
}
