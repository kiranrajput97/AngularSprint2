import { DiagnosticCentre } from './diagnostic-centre';


export class Test {
    
        centre:DiagnosticCentre=new DiagnosticCentre();
        testId:string;
        testName:string;
    constructor(){}

    

    get tid():string{
            return this.testId;
    }

    set tid(testId:string){
        this.testId=testId;
    }

    get tname():string{
        return this.testName;
}

     set tname(testName:string){
    this.testName=testName;
}

}
