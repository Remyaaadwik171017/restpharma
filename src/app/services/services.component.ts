import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser =""
  users:any = {
    1000: { id: 1000, username: "userone", password: "userone", },
    1001: { id: 1001, username: "usertwo", password: "usertwo", },
    1002: { id: 1002, username: "userthree", password: "userthree",},
    1003: { id: 1003, username: "userfour", password: "userfour", }

}

  constructor() {
   this.getDetails();

   }
  saveDetails(){
    localStorage.setItem("users",JSON.stringify(this.users))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }

    
  }
  getDetails(){
    if(localStorage.getItem("users")){
      this.users = JSON.parse(localStorage.getItem("users") || '')
    }
  
    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }
  

  register(id:any,username:any,password:any,){
    let Details=this.users;
    if (id in Details){
      return false;
    }
    else{
      Details[id]={
        id,
        username,
        password
      

    }
    this.saveDetails();
    return true;

    }
  }
   login(acno:any,pwd:any){
     let Details = this.users;
     if (id in Details){
       if (pwd==Details[id]["password"]){
         this.currentUser=Details[id]["username"]
         this.saveDetails();
         return true;
       }
       else{
         alert("incorrect password");
         return false;
       }

     }
     else {
       alert("invalid id number");
       return false;
     }
   }