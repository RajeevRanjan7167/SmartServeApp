import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/Home/Home.component';

import { HealthSafetyComponent } from './HealthSafety/HealthSafety.component';
import { EmergencyServicesComponent } from './EmergencyServices/EmergencyServices.component';
import { CovidDashboardComponent } from './CovidDashboard/CovidDashboard.component';
import { LocalCommunityComponent } from './LocalCommunity/LocalCommunity.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'healthSafety', component: HealthSafetyComponent },
  { path: 'emergencyServices', component: EmergencyServicesComponent },
  { path: 'covidDashboard', component: CovidDashboardComponent },
  { path: 'LocalCommunity', component: LocalCommunityComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
