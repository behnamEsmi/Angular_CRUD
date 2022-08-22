import  {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { InsectionApiService } from './insection-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    AddEditInspectionComponent,
    ShowInspectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InsectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
