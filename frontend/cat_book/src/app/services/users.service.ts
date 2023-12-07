import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class UsersService {
    baseurl = environment.apiUrl

    constructor(private http: HttpClient) {
    }

    createUser(Username: string | null | undefined,
               Password: string | null | undefined,
               Email: string | null | undefined): Observable<any> {
        const body = {username: Username, password: Password, email: Email}
        return this.http.post(this.baseurl + '/auth/registration/users/', body)
    }

    getToken(Username: string | null | undefined, Password: string | null | undefined): Observable<any> {
        const body = {username: Username, password: Password}
        return this.http.post(this.baseurl + '/auth/token/login/', body)
    }

    getUserByToken(Token: any): Observable<any> {
        return this.http.get(this.baseurl + '/auth/user/by/token/',
            {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + Token}});
    }

    logoutUser(Token: any): Observable<any>{
        const body = {}
        return this.http.post(this.baseurl + '/auth/token/logout/', body,
            {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + Token}});
    }
}
