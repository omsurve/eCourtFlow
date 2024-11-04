import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from 'src/services/manager.service';
import { AddclerkComponent } from '../addclerk/addclerk.component';
import { AddjudgeComponent } from '../addjudge/addjudge.component';
import { identifierName } from '@angular/compiler';
import { MatPaginator } from '@angular/material/paginator';
import {ViewChild} from '@angular/core'
import { AddcasesComponent } from '../addcases/addcases.component';
import { MatTableDataSource } from '@angular/material/table';

// import {  ChangeDetectorRef } from '@angular/core';
export interface Clerks{
  judge_id:string;
  name:string;
  email:string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../assets/css/tailwind.output.css'],
})
export class AdminComponent implements OnInit,AfterViewInit { 
  cases: any;
  isUserLoggedIn: boolean = false;
  isClerkLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  dafaultSeverity="very high";
  casesLengths: any[] = [];
  casesLength: any;
  clerks:Clerks[]=[];
  isViewClerk:boolean=false;
  viewCasesText: string = 'View Clerks';
  displayedColumns: string[] = ['name', 'email', 'judge_id'];
  dataSource = new MatTableDataSource<any[]>(); 
  @ViewChild('paginator',{static:true}) paginator!: MatPaginator;
  constructor(private casesApi: ManagerService,private dialog:MatDialog) {
    this.casesApi.isUserLoggedIn.subscribe((data) => {
      this.isUserLoggedIn = data;
    });
    this.casesApi.isAdminLoggedIn.subscribe((data) => {
      this.isAdminLoggedIn = data;
    });
    this.casesApi.isClerkLoggedIn.subscribe((data) => {
      this.isClerkLoggedIn = data;
    });
  }
  ngOnInit(): void {
     this.casesApi.getCasesData(this.dafaultSeverity).subscribe((data:any)=>{
      debugger;

      this.cases = data.docs;
      console.log(data);
      //FIX : Error in console

      
      this.casesLength = this.cases.length;  
    });
    this.casesApi.getAllClerks().subscribe((data:any[])=>{ 
      this.dataSource.data=data;
    })
  }
  ngAfterViewInit(): void {
   this.dataSource.paginator = this.paginator;
  } 
  AddClerkPopUp(){
    this.dialog.open(AddclerkComponent,{
      width:'40rem'
    });
  }
  AddJudgePopUp(){
    this.dialog.open(AddjudgeComponent,{
      width:'40rem'
    });
  }
  ViewClerks(){
 
    if(this.isViewClerk){
      this.viewCasesText = 'View Clerks';
      this.isViewClerk = false;
    }
    else{
      this.viewCasesText = 'View Cases';
      this.isViewClerk = true;
    }
    this.casesApi.getAllClerks().subscribe((data)=>{  
        this.clerks=data;
    })
  }
  AddCasesPopup(){
    this.dialog.open(AddcasesComponent,{
      width:'40rem'
    });
  }
}
