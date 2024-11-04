import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingsiteComponent } from './landingsite/landingsite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';


import { FormsModule } from '@angular/forms';
import { ManagerService } from 'src/services/manager.service';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from 'src/guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToastrModule, ToastrService, provideToastr } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AddclerkComponent } from './addclerk/addclerk.component';
import { AddjudgeComponent } from './addjudge/addjudge.component';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddcasesComponent } from './addcases/addcases.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LandingsiteComponent,
    NavbarComponent,
    LoginComponent,
    // RegisterComponent,
    AdminComponent,
    SidebarComponent,
    AddclerkComponent,
    AddjudgeComponent,
    AddcasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatSelectModule
  ],
  providers: [ManagerService,authGuard, provideAnimations(), // required animations providers
  provideToastr(),ToastrService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
