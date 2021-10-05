import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SignInService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public signinForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      emailid:[''],
      password:['']
    })
  }

  signin(){
    console.log(this.signinForm.value);
    this.signinService.signIn(this.signinForm.value)
    .subscribe(res=>{
      console.log(res.access_token);
      localStorage.setItem('token', res.access_token);
      this.router.navigate(['/products']);
    }, err=> {
      alert("Something went wrong!");
      console.log(err);
    })
  }

}
