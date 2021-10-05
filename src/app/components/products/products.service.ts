import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Products } from "./products.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({

    providedIn: 'root'
})

export class ProductService {
    constructor(private http: HttpClient)
    {}

    private authHeader(): Object {
        return {
            headers: new HttpHeaders({'authorization': 
                            `Bearer ${localStorage.getItem('access_token')}`})
        }
    }

    public getProducts(): Observable<Products[]> {
        return this.http.get<Products[]>('http://localhost:3000',
                                    this.authHeader());
    }

}