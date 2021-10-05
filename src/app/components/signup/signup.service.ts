import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Signup } from "./signup.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({

    providedIn: 'root'
})

export class SignupService {
    constructor(private http: HttpClient)
    {}

    public signUp(signup: Signup): Observable<Signup>{
        return this.http.post<Signup>('http://localhost:3000/api/users', signup);
    }
}
