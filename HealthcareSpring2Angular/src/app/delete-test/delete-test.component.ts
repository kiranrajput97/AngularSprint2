import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { AdminserviceService } from '../service/adminservice.service';
import { DiagnosticCentre } from '../diagnostic-centre';


@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.css']
})
export class DeleteTestComponent implements OnInit {

  centres:DiagnosticCentre[];
  tests:Test[]=[];
  centre:DiagnosticCentre;
  testList: Array<Test> = [];
  deleteMessage=false;
  msg:string;
  errorMsg:string;
  Info:string;
  

  constructor(private adminService:AdminserviceService) { }

  ngOnInit(){console.log("inside ngOninit test component");

  this.adminService.getTest().subscribe(data =>{this.tests=data;});

    this.adminService.getCentre().subscribe(data =>{this.centres=data;});
  }
  deleteTest(test:Test):void{
    console.log("Row Deleted!!")
    this.adminService.deleteTest(test).subscribe(data=>{this.tests=this.tests.filter(t=>t!==test);})
  }

  
 
      val:Boolean=false;
      showDetails()
      {
        this.val=!this.val;
        this.testList.forEach(element => {
         console.log(element.testId+" "+element.testName+" ");
      });
    }



ngOnDestroy() {
  //this.employeeService.setEmpList(this.empList);
  this.testList.slice();
    }

    val1:Boolean=false;
    index1:number;
    cen1:Test;

    


//sorting according to column:-
column:string;
change(col:string)
{
  console.log(col);
  this.column=col;
}


}
