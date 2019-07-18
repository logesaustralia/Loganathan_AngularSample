import { Injectable } from '@angular/core';  
import { Router, NavigationStart } from '@angular/router';  
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs';  
@Injectable() export class ConfirmDialogService {  
   private subject = new Subject<any>();  
   public Test: string;
    constructor() { }  
    confirmThis(message: string, siFn: () => void, noFn: () => void): string  {  
        return(this.setConfirmation(message, siFn, noFn));  
    }  
    setConfirmation(message: string, siFn: () => void, noFn: () => void): string { 
      
        let that = this;  
       
        this.subject.next({  
            type: "confirm",  
            text: message,  
            siFn:  
                function () {  
                    alert("Yes function called");
                    this.Test = "Yes";
                    that.subject.next(); //this will close the modal  
                    //siFn(); 
                    return this.Test; 
                },  
                
            noFn: 
                function () {  
                that.subject.next();  
                //noFn();  
                return this.Test;
               
            }  
        });  
        return this.Test;
    }  
  
    getMessage(): Observable<any> {  
       return this.subject.asObservable();  
    }  
}  