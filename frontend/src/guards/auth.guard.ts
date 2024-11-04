import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ManagerService } from 'src/services/manager.service';
@Injectable()
export class authGuard implements CanActivate {
  constructor(private managerService: ManagerService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if (this.managerService.isAdminLoggedIn.value || this.managerService.isUserLoggedIn.value || this.managerService.isClerkLoggedIn.value) {
      return true;
    }
    else if (sessionStorage.getItem('user')) {
      this.getSessionLoggedIn();
      return true;
    }


    this.router.navigate(['/']);
    return false;
  }
  // const managerService = new ManagerService();
  // const router=new Router();
  public getSessionLoggedIn(): any {

    
    // let userDetails:any=sessionStorage.getItem('user');
      let user = JSON.parse(sessionStorage.getItem('user')!);
      if (user.userType == 'Admin') {
        this.managerService.isAdminLoggedIn.next(true);
      }
      else if (user.userType == 'Judge') {
        this.managerService.isUserLoggedIn.next(true);
      }
      else if (user.userType == 'Clerk') {
        this.managerService.isClerkLoggedIn.next(true);
      }
      this.managerService.userInformation.next(user);
  }
}
