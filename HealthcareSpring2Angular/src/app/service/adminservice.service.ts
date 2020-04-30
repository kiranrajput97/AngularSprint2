import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Test } from '../test';
import { DiagnosticCentre } from '../diagnostic-centre';




@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  successInfo:string;

  getSuccessInfo():string{

    return this.successInfo;
}

setSuccessInfo(msg:string){

     this.successInfo=msg;
}

  constructor(private http: HttpClient) {
   }

   public getCentre():Observable<any>
  {
    console.log("get centre");
    return this.http.get("http://localhost:8082/getCentre");
  }

  public addCentre(centre:DiagnosticCentre):Observable<any>
  {
    console.log("add centre call");
    return this.http.post("http://localhost:8082/addCentre",centre,{responseType:'text'});
  }

  public deleteCentre(centre:DiagnosticCentre):Observable<any>
  {
         console.log("deleted");
         //let endpoint=centreId;
         return this.http.delete<DiagnosticCentre>("http://localhost:8082/deleteCentre" +  "/" +centre.centreId);
  }
  



  public getTest():Observable<any>
  {
    console.log("get test");
    return this.http.get("http://localhost:8082/getTest");
  }
  public addTest(test:Test):Observable<any>
  {
    console.log("add test call");
    return this.http.post("http://localhost:8082/addTest",test,{responseType:'text'});
  }

  public deleteTest(test:Test):Observable<any>
  {
    console.log("delete test call");
    return this.http.delete<Test>("http://localhost:8082/deleteTest" + "/" +test.testId);
  }


  public getAppointment():Observable<any>
  {
    console.log("get appointment");
    return this.http.get("http://localhost:8082/getAppointment");
  }

  public getUser():Observable<any>
  {
    console.log("get user");
    return this.http.get("http://localhost:8082/getUser");
  }
}
