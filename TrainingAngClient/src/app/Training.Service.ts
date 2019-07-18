import {Injectable} from '@angular/core';
import {Training} from '../app/models/Training.model';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {catchError} from "rxjs/internal/operators";
@Injectable()
export class TrainingService{
    constructor(private _http :  HttpClient){

    }
    private oTraining : Training;
    public DisplayNumberofDays(){
            console.log(this.oTraining.stDate);
    }
    public AddTrainingData(oTrainingData: Training): Observable<Training>{
            this.oTraining = oTrainingData;
            return(this._http.post<Training>("http://localhost:29710/api/Training",oTrainingData ,{
                headers: new HttpHeaders({
                     'content-type':'application/json'
                })
            })
            .pipe(catchError(err => {throw this.HandleError(err)})));
    }

    private HandleError(errorResponse: HttpErrorResponse){

        if(errorResponse.error instanceof ErrorEvent){
            console.log("Client side error:"+errorResponse.error.message);
        }
        else{
        console.log("Client side error:"+errorResponse.error.message);
        }
    }
}
