import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { AdminserviceService} from '../service/adminservice.service';
import { Router } from '@angular/router';
import { DiagnosticCentre } from '../diagnostic-centre';


@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  centres:DiagnosticCentre[];
  id:number[];
  test:Test=new Test();
  tests:Test[]=[];
  centre:DiagnosticCentre;
  
  
  testList: Array<Test> = [];
  msg:string;
  errorMsg:string;
  Info:string;

  constructor(private adminService:AdminserviceService , private router:Router) { }

  ngOnInit(){
    
    this.adminService.getTest().subscribe(data =>{this.tests=data;});

    this.adminService.getCentre().subscribe(data =>{this.centres=data;});

  }


  

  addTest():void{
    this.adminService.addTest(this.test).subscribe(data=>{this.test=data,this.Info=data});
    // this.service.setSuccessInfo(this.Info);
    alert('Added successfully');
    this.router.navigateByUrl('/addTest');

}

  /*addTest():void
  {
    this.adminService.addTest(this.test).subscribe((data)=>{
      console.log("data",data);
      this.msg=data;
      this.errorMsg=undefined;
      this.test=new Test()},
      error=>{this.errorMsg=JSON.parse(error.error).message;
      console.log(error.error);
    this.msg=undefined});
    alert("test added successfully");
    }
*/
    
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
