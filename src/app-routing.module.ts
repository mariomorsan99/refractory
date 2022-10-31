import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './app/view/material/material.component';
import { SyncComponent } from './app/view/sync/sync.component';


const routes: Routes = [
  { path: 'app/material', component: MaterialComponent },
  { path: 'app/sync', component: SyncComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  , exports: [RouterModule]
})
export class AppRoutingModule { }
