import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map} from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url:string;

    constructor(private _http:Http){
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }
    
    getPrueba(){
        return 'Hola desde el servicio';
    }

    getArticulos(){
        return this._http.get(this.url)
        .pipe(map(res => res.json()));
        }
}