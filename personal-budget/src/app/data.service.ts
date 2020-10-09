import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';


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
      samples.push({
      name : array[0][i].title,
      value : array[0][i].budget,
      abs: Math.abs(array[0][i].budget)
      });
    }
  });
  return samples;
}

}
