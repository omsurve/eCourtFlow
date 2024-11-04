import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ManagerService } from 'src/services/manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../assets/css/style.css']
})
export class NavbarComponent {
  isAdminLoggedIn:boolean=false;
  isUserLoggedIn:boolean=false;
  isClerkLoggedIn:boolean=false;
  userName:any="";
  constructor(private dialog:MatDialog,private manager:ManagerService,private toast:ToastrService,private router:Router) {
    this.manager.isAdminLoggedIn.subscribe((data)=>{
      this.isAdminLoggedIn=data;
    })
    this.manager.isUserLoggedIn.subscribe((data)=>{
      this.isUserLoggedIn=data;
    })
    this.manager.isClerkLoggedIn.subscribe((data)=>{
      this.isUserLoggedIn=data;
    })
    this.manager.userInformation.subscribe((data)=>{
      this.userName=data.name
    })
  }
  getUserLoggedIn(){
    this.dialog.open(LoginComponent, {
      width: '40rem'
    
    });
  }
  getLoginState():boolean{
    if(this.isAdminLoggedIn || this.isUserLoggedIn || this.isClerkLoggedIn){
      return false;
    }

    return true;
  }
 
  getUserLoggedOut(){
    let user=JSON.parse(sessionStorage.getItem('user')!);
    // this.manager.isUserLogg/edIn.next(false);
    this.toast.error("Logged out as an "+user.name); 
    sessionStorage.clear();
    if(this.manager.isUserLoggedIn.value){
      this.manager.isUserLoggedIn.next(false);
    }
    else if(this.manager.isAdminLoggedIn.value){
      this.manager.isAdminLoggedIn.next(false);
    }
    else if(this.manager.isClerkLoggedIn.value){
      this.manager.isClerkLoggedIn.next(false);
    }
    this.router.navigate(['/']);
  }
}
