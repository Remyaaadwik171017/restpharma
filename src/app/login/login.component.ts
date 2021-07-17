import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Aim ="Welcome to Luminar Bank"
  account = "Account Number Please"
  // accno = ""
  // pwd = ""
  LoginForm= this.fb.group({
   
    accno :['',[Validators.required,Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    
    pwd :['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
   })

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  

  login(){
    // var acno = a.value
    // var pwd = p.value

    var acno = this.LoginForm.value.accno;
    var pwd = this.LoginForm.value.pwd;
  // alert("login successful")
  if(this.LoginForm.valid){
  let accDetails = this.ds.users;
   var result = this.ds.login(acno,pwd)
  
   if(result){
     alert("login successful");
     this.router.navigateByUrl("dashboard")
   }
  }
  else{
    alert("Invalid Form")
  }
  }