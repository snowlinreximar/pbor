import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Signin } from "./signin.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({

    providedIn: 'root'
})

export class SignInService {
    constructor(private http: HttpClient)
    {}

    public signIn(signin: Signin): Observable<any>{
        return this.http.post<any>('http://localhost:3000/api/local/signin', signin);
    }
}