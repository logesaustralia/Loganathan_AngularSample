import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogService} from './Confirmation-Dialog/confirm-dialog.service';
import {ConfirmDialogComponent} from './Confirmation-Dialog/confirm-dialog.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TrainingService} from './Training.Service';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
    
    
  ],
  exports:[
    ConfirmDialogComponent
    
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],

  providers: [
    ConfirmDialogService,
    TrainingService,
    ConfirmationPopoverModule,
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
