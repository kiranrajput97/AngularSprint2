import { logging } from 'protractor';

export class DiagnosticCentre {
    centreId:string;
    centreName:string;
    centreContactNumber:number;
    centreAddress:string;

    get cid():string{
        return this.centreId;
    }

    get cname():string{
        return this.centreName;
    }

    get cNo():number{
        return this.centreContactNumber;
    }

    get cadd():string{
        return this.centreAddress;
    }
}
