import { User } from './user';
import { Test } from './test';
import { DiagnosticCentre } from './diagnostic-centre';
import { ɵLocaleDataIndex } from '@angular/core';

export class Appointment {

    appointmentId:number;
     appointmentDate:Date;
    appointmentTime:string;
    testId:Test=new Test();
    
    // userId:User=new User();
    // centreId:DiagnosticCentre=new DiagnosticCentre();
    // approvalStatus:boolean;

    
}
