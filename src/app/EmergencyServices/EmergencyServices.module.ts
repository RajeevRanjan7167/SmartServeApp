import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmergencyServicesComponent } from './EmergencyServices.component';
import { EmergencyServiceRoutingModule } from './EmergencyServices.module.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgMarqueeModule } from 'ng-marquee';
import { AgGridModule } from 'ag-grid-angular';

import { EmgenServicesComponent } from '././emgenServices/emgenServices.component';
import { AmbulanceServicesComponent } from '././ambulanceServices/ambulanceServices.component';
import { GovtHelpLineComponent } from '././govtHelpLine/govtHelpLine.component';
import { LocalNGOComponent } from '././localNGO/localNGO.component';
import { NearByLabFacilityComponent } from '././nearByLabFacility/nearByLabFacility.component';

// AoT requires an exported function for factories
// tslint:disable-next-line: typedef
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    EmgenServicesComponent,
    AmbulanceServicesComponent,
    GovtHelpLineComponent,
    LocalNGOComponent,
    NearByLabFacilityComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    EmergencyServiceRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMarqueeModule,

    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [EmergencyServicesComponent],
})

export class EmergencyServicesModule {}
