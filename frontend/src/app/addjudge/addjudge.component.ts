import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-addjudge',
  templateUrl: './addjudge.component.html',
  styleUrls: ['./addjudge.component.css','../login/login.component.css','../../assets/css/style.css']
})
export class AddjudgeComponent {
constructor(private clerkService:ManagerService,private toast:ToastrService,private dialog :MatDialog){

}
getAddJudge(data:any){
data.userType="Judge";
this.clerkService.RegisterClerk(data).subscribe((res:any)=>{
  this.toast.success("Judge Added Successfully"); 
  this.dialog.closeAll();
})
}
}
