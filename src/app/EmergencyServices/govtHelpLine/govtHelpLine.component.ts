import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { State } from '../../models/state';
import { HelplineNumber } from '../../models/helplineNumber';
import { ApiServicesService } from '../../services/apiServices.service';
import { of } from 'rxjs';
//import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-govtHelpLine',
  templateUrl: './govtHelpLine.component.html',
  styleUrls: ['./govtHelpLine.component.css'],
})
export class GovtHelpLineComponent implements OnInit {
  public rowData: any;
  GovernmentHelplineForm: FormGroup;
  state: State[];
  helplineNumber: HelplineNumber[];

  selectedState: string;
  strCentralPhone: string;
  strCentralEnvelope: string;
  strCentralWhatsapp: string;
  strCentralFacebook: string;
  strCentralTwitter: string;

  strStateName: string;
  strStatelPhone: string;

  selectedLevel;

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
    this.fillContactInfo();
    this.loadState();
    this.getCentralHelpLineNumber();
    
    //this.loadHelpLineInfo();
    //this.getCentralHelpLineNumber();
  }

  getstate() {
    return [{ stateCode: 'NA', stateName: 'Not Define' }];
  }

  // tslint:disable-next-line: typedef
  async loadState() {
    (await this.apiServicesService.getstate()).subscribe(
      (stateInfor: State[]) => {
        this.state = stateInfor;
        this.orders = stateInfor;
      }
    );
  }

  // async loadHelpLineInfo() {
  //   (await this.apiServicesService.getHelpLineNumber()).subscribe(
  //     (helpContact: HelplineNumber[]) => {
  //       this.helplineNumber = helpContact;
  //     }
  //   );
  // }

  // tslint:disable-next-line: typedef
  createLocalCommunityForm() {
    this.GovernmentHelplineForm = this.formBuilder.group({
      state: ['', Validators.required],
    });
  }

  // tslint:disable-next-line: typedef
  fillContactInfo() {
    // this.strCentralPhone = '+91-11-23978046, 1075(Tollfree)';
    // this.strCentralEnvelope = 'ncov2019@gov.in';
    // this.strCentralFacebook = 'https://twitter.com/MoHFW_INDIA';
    // this.strCentralTwitter = 'https://www.facebook.com/MoHFWIndia';

    // //this.strStateName = this.state[0].stateName;
    // this.strStatelPhone = '1800313444222, +91-3323412600';
  }

  selected() {
    //this.getStateName(this.selectedLevel);
    const selectedinfo = this.state.filter(
      (e) => e.stateCode === this.selectedLevel
    );
    this.strStateName = selectedinfo[0].stateName;

    // this.strCentralPhone =
    //   '+91-11-23978046, 1075(Tollfree)' + selectedinfo[0].stateName;
    // this.strCentralEnvelope = 'ncov2019@gov.in' + selectedinfo[0].stateCode;
    // this.strCentralFacebook = 'https://twitter.com/MoHFW_INDIA';
    // this.strCentralTwitter = 'https://www.facebook.com/MoHFWIndia';

    // //this.strStateName = this.state[0].stateName;
    // this.strStatelPhone = '1800313444222, +91-3323412600';
  }

  async getCentralHelpLineNumber() {
    (await this.apiServicesService.getCentralHelpLineNumber()).subscribe(
      (helpContact: HelplineNumber[]) => {
        this.helplineNumber = helpContact;
      }
    );
  }

  async loadStateHelpLineInfo() {
    (await this.apiServicesService.getStateHelpLineNumber()).subscribe(
      (helpContact: HelplineNumber[]) => {
        this.helplineNumber = helpContact;
      }
    );
  }


  getStateName(stateCode: string) {
    // for (var kntCounter = 0; kntCounter < this.state.length; kntCounter++) {
    //   if (this.state[kntCounter].stateCode === stateCode) {
    //     this.strStateName = this.state[kntCounter].stateName;
    //     break;
    //   }
    // }
  }
}
