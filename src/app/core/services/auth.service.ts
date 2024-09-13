import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Auth} from "../models/user/user.module";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl: string = environment.apiUrl

    constructor(private http: HttpClient) {
        console.log(this.apiUrl)
    }

    authenticate(login: Auth): Observable<Auth> {
        return this.http.post<Auth>(`${this.apiUrl}/login`, login)
    }

    register(register: Auth): Observable<any> {
        return this.http.post<Auth>(`${this.apiUrl}/register`, register)
    }
}
