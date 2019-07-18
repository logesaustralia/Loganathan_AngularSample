import { Component } from '@angular/core';
import {Training} from '../app/models/Training.model';
import {TrainingService} from './Training.Service';
import { validateConfig } from '@angular/router/src/config';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import { CompileTemplateMetadata } from '@angular/compiler';



@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'Training Client App';
  oTraining: Training ={
    sTrainingName : null,
    stDate : null,
    endDate: null,
    NumberofDays: null

  }; 
  Data1 : Date;
 
  constructor(private tSvc: TrainingService){}


 private InvokeTrainingData():void{
   
    
    if(this.oTraining.sTrainingName == null){
      alert("Please enter Training name");
      return;
    }
    if(this.oTraining.stDate == null){
      alert("Please enter start date");
      return;
    }
    if(this.oTraining.endDate == null){
      alert("Please enter end date");
      return;
    }
    
    if(this.oTraining.endDate < this.oTraining.stDate){
      alert("Training end date must be greater than start date");
      return;
    }
    
    if(confirm("Are you sure to add?") == true){
        this.tSvc.AddTrainingData(this.oTraining).subscribe(
          (data: Training)=>{
              alert("Total number of Training days :"+data.NumberofDays);
            },
          (error :any)=>{console.log(error)});
    }
    
  }

}
