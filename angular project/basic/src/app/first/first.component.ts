import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent implements OnInit{


  searchControl:FormControl=new FormControl('')

  constructor(private http:HttpClient){
   
  }
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((search:any)=>search.trim().length>3),        
      switchMap((search:any)=>this.http.get('https://fakestoreapi.com/products/'+search))
    ).subscribe({
      next:(res:any)=>{
        console.log(res);
      }
    })
  }
}
