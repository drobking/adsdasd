import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/AuthService.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
constructor(private authService:AuthService){

}
  isLogin:boolean=false;
  isAdmin:boolean=false;
  isExpanded = false;
  ngOnInit(){

   this.isAdmin= this.authService.isAdmin();
   this.isLogin=this.authService.isLoggetIn();
    this.authService.statusLogin.subscribe((status)=>{
      this.isLogin=status;
      this.isAdmin=this.authService.isAdmin();
    });

  }
logout(){
this.authService.LogOut();

}


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
