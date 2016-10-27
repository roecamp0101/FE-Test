import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class FeService {

  constructor(private http: Http) { }
    
 getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos').map((response:Response) => response.json());
 }
    
 getForms(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments').map((response:Response) => response.json());
 }

}
