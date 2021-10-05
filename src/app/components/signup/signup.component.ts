import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private http: HttpClient,
              private router: Router,
              private signupService: SignupService
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username:[''],
      emailid: [''],
      password: ['']
    })
  }

  signUp(){
    this.signupService.signUp(this.signupForm.value)
      .subscribe(res=> {
        alert("Signup Successful!");
        this.signupForm.reset();
        this.router.navigate(['signin']);
      }, err=> {
        alert("Something went wrong!");
        console.log(err);
      })                               
  }

}
