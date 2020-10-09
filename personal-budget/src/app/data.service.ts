import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Item{
  label: string;
  value: number;
  abs: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getData(): Item[] {
  const url = 'http://localhost:3000/budget';
  const samples = [];

  this.http.get(url).pipe().subscribe((res) => {
    const res2 = JSON.stringify(res);
    const object = JSON.parse(res2);
    const array = Object.keys(object).map(function(k) {
        return object[k];
      });
    for(var i = 0; i < array[0].length; i++){
      console.log(typeof(array[0][i].budget));
      console.log(typeof(array[0][i].title));
      samples.push({
      value : array[0][i].budget,
      label : array[0][i].title,
      abs: Math.abs(array[0][i].budget)
      });
    }
  });
  return samples;
}

}
