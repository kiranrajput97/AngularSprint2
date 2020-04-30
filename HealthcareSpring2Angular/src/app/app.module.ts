import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AddCentreComponent } from './add-centre/add-centre.component';
import { DeleteCentreComponent } from './delete-centre/delete-centre.component';
import { AddTestComponent } from './add-test/add-test.component';
import { DeleteTestComponent } from './delete-test/delete-test.component';
import { AdminserviceService } from './service/adminservice.service';



@NgModule({
  declarations: [
    AppComponent,
    
    AppointmentComponent,
    AddCentreComponent,
    DeleteCentreComponent,
    AddTestComponent,
    DeleteTestComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [AdminserviceService],
  bootstrap:[AppComponent]
})
export class AppModule { }