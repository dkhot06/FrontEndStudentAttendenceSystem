import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { BatchCoordinatorDashboardComponent } from './batch-coordinator-dashboard/batch-coordinator-dashboard.component';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'trainer-dashboard/:id', component: TrainerDashboardComponent },
  { path: 'batch-coordinator-dashboard/:id', component: BatchCoordinatorDashboardComponent },
  { path: 'supervisor-dashboard/:id', component: SupervisorDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }