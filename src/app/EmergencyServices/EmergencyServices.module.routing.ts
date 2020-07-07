import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmgenServicesComponent } from '././emgenServices/emgenServices.component';
import { AmbulanceServicesComponent } from '././ambulanceServices/ambulanceServices.component';
import { GovtHelpLineComponent } from '././govtHelpLine/govtHelpLine.component';
import { LocalNGOComponent } from '././localNGO/localNGO.component';
import { NearByLabFacilityComponent } from '././nearByLabFacility/nearByLabFacility.component';

const routes: Routes = [
    { path: 'govtHelpLine', component: GovtHelpLineComponent },
    { path: 'emgenServices', component: EmgenServicesComponent },
    { path: 'nearByLabFacility', component: NearByLabFacilityComponent },
    { path: 'ambulanceServices', component: AmbulanceServicesComponent },
    { path: 'localNGO', component: LocalNGOComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class EmergencyServiceRoutingModule{ }