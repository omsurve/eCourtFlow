import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ManagerService } from 'src/services/manager.service';

@Component({
  selector: 'app-addclerk',
  templateUrl: './addclerk.component.html',
  styleUrls: ['../login/login.component.css','../../assets/css/style.css']
})
export class AddclerkComponent {
  constructor(private clerkService:ManagerService,private toast:ToastrService,private dialog :MatDialog){

  }
getAddClerk(data:any){
  data.userType="Clerk";
  
  this.clerkService.RegisterClerk(data).subscribe((res:any)=>{
    this.toast.success("Clerk Added Successfully"); 
    this.dialog.closeAll();
  },(err:any)=>{
    console.log(err);
    this.toast.error(err);
  })
} 
}
