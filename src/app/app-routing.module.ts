import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/Home/Home.component';

import { HealthSafetyComponent } from './HealthSafety/HealthSafety.component';
import { EmergencyServicesComponent } from './EmergencyServices/EmergencyServices.component';
import { CovidDashboardComponent } from './CovidDashboard/CovidDashboard.component';
import { LocalCommunityComponent } from './LocalCommunity/LocalCommunity.component';

import { TermsAndConditionComponent } from './TermsAndCondition/TermsAndCondition.component';
import { PrivacyPolicyComponent } from './PrivacyPolicy/PrivacyPolicy.component';
import { DisclaimerComponent } from './Disclaimer/Disclaimer.component';
import { ContactUsComponent } from './contactUs/contactUs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'healthSafety', component: HealthSafetyComponent },
  { path: 'emergencyServices', component: EmergencyServicesComponent },
  { path: 'covidDashboard', component: CovidDashboardComponent },
  { path: 'LocalCommunity', component: LocalCommunityComponent },
  { path: 'TermsAndCond', component: TermsAndConditionComponent },
  { path: 'PrivacyPolicy', component: PrivacyPolicyComponent },
  { path: 'Disclaimer', component: DisclaimerComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
