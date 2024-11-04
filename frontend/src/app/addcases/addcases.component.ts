import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-addcases',
  templateUrl: './addcases.component.html',
  styleUrls: ['./addcases.component.css']
})
export class AddcasesComponent implements OnInit{
  caseId:number=0;
  constructor(private userManager:ManagerService,private toast:ToastrService) {

   }
  ngOnInit(): void {
    this.generateRandomNumbers()
    
  }
  getAddCases(data:any){
    let caseFilingDate=String(data.Casefilingdate);
    data.Casefilingdate=caseFilingDate;
    data.Caseid=this.caseId
    this.userManager.AddCase(data).subscribe((res:any)=>{
      this.toast.success("Case Added Successfully");
    },(err:any)=>{
      console.log(err);
      this.toast.error("Something went wrong please try again later");
    })
  } 
  generateRandomNumbers():number {

    this.caseId=Math.floor(Math.random() * 99999999);
    console.log(this.caseId); 
    return this.caseId;
  }
  
}
