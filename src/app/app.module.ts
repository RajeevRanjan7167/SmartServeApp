import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMarqueeModule } from 'ng-marquee';

import { HealthSafetyComponent } from './HealthSafety/HealthSafety.component';
import { EmergencyServicesComponent } from './EmergencyServices/EmergencyServices.component';
import { HomeComponent } from './Home/Home.component';
import { CovidDashboardComponent } from './CovidDashboard/CovidDashboard.component';
import { LocalCommunityComponent } from './LocalCommunity/LocalCommunity.component';

import { EmergencyServicesModule } from './EmergencyServices/EmergencyServices.module';

import { AgGridModule } from 'ag-grid-angular';
// AoT requires an exported function for factories
// tslint:disable-next-line: typedef
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
   declarations: [
      AppComponent,
      HealthSafetyComponent,
      EmergencyServicesComponent,
      HomeComponent,
      CovidDashboardComponent,
      LocalCommunityComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserModule,
      NgbModule,
      HttpClientModule,
      FormsModule,
      NgMarqueeModule,
      ReactiveFormsModule,
      EmergencyServicesModule,
      //ngx-translateandtheloadermodule\nHttpClientModule,
      AgGridModule.withComponents([]),
      TranslateModule.forRoot({
         loader: {
               provide: TranslateLoader,
               useFactory: HttpLoaderFactory,
               deps: [HttpClient]
         }
      })
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }
