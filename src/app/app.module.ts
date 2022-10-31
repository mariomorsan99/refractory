import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MaterialComponent } from './view/material/material.component';
import { AppRoutingModule } from '../app-routing.module';
import { SyncComponent } from './view/sync/sync.component';
@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    SyncComponent
  ],
  imports: [
    BrowserModule,
    DiagramModule,
    DragDropModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
