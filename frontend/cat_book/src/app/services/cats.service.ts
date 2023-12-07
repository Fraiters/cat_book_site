import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class CatsService {

    baseurl = environment.apiUrl

    constructor(private http: HttpClient) {
    }

    getCatList(): Observable<any> {
        return this.http.get(this.baseurl + '/api/cats/cat_list/')
    }

    getCatById(Id: any): Observable<any> {
        return this.http.get(this.baseurl + '/api/cats/' + Id)
    }

    createCat(Name: any,
              Age: any,
              Breed: any,
              Weight: any,
              // Photo: any,
              Description: any,
              Token: any,): Observable<any> {
        const body = {
            name: Name,
            age: Age,
            breed: Breed,
            weight: Weight,
            // photo: Photo,
            description: Description,
        }
        return this.http.post(this.baseurl + '/api/cats/add_cat/', body,
            {headers: {'Content-Type': 'application/json', // 'multipart/form-data'
                Authorization: 'Token ' + Token}})
    }

    updateCat(Id: any,
              Name: any,
              Age: any,
              Breed: any,
              Weight: any,
              // Photo: any,
              Description: any,
              Token: any,): Observable<any> {
        const body = {
            name: Name,
            age: Age,
            breed: Breed,
            weight: Weight,
            // photo: Photo,
            description: Description,
        }
        return this.http.put(this.baseurl + '/api/cats/' + Id + '/upd_cat/', body,
            {headers: {'Content-Type': 'application/json',
                    Authorization: 'Token ' + Token}})
    }

    deleteCat(Id: any, Token: any): Observable<any> {
        return this.http.delete(this.baseurl + '/api/cats/' + Id + '/del_cat/',
            {headers: {'Content-Type': 'application/json',
                    Authorization: 'Token ' + Token}})
    }

}
