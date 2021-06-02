import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceCreateComponent } from './component/place-create/place-create.component';
import { PlaceDetailsComponent } from './component/place-details/place-details.component';
import { PlaceListComponent } from './component/place-list/place-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'places', pathMatch:'full'},
  {path:'places', component:PlaceListComponent},
  {path:'places/:id', component: PlaceDetailsComponent},
  {path:'create', component:PlaceCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
