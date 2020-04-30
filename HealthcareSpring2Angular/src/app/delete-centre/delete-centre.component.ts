import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../service/adminservice.service';
import { DiagnosticCentre } from '../diagnostic-centre';



@Component({
  selector: 'app-delete-centre',
  templateUrl: './delete-centre.component.html',
  styleUrls: ['./delete-centre.component.css']
})
export class DeleteCentreComponent implements OnInit {

  centre:DiagnosticCentre=new DiagnosticCentre();
  centres:DiagnosticCentre[]=[];
  centreId:number;
  centreList: Array<DiagnosticCentre> = [];
  deleteMessage=false;
  msg:string;
  errorMsg:string;
  errorInfo:string=undefined;

  Info:string=undefined;

  successInfo:string=undefined;

  
  constructor(private adminService:AdminserviceService) { }

  ngOnInit(): void {
    this.adminService.getCentre().subscribe(
      data =>{this.centres=data;
      },
      error=>{


        this.errorInfo=JSON.stringify(error.error.text);
        this.centreList=undefined;

   }
     );
     this.successInfo=this.adminService.successInfo;
     
  }

  deleteCentre(centre:DiagnosticCentre):void{
    console.log("Row Deleted!!")
    this.adminService.deleteCentre(centre).subscribe(data=>{this.centres=this.centres.filter(c=>c!==centre);})
  }
  
  val:Boolean=false;
  showDetails()
  {
    this.val=!this.val;
    this.centreList.forEach(element => {
     console.log(element.centreId+" "+element.centreName+" "+element.centreContactNumber+" "+element.centreAddress);
  });
}



ngOnDestroy() {
//this.employeeService.setEmpList(this.empList);
this.centreList.slice();
}

column:string;
change(col:string)
{
console.log(col);
this.column=col;
}
}
