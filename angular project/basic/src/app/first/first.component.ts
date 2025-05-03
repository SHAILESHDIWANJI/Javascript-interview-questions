import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class FirstComponent implements OnInit{


  searchControl:FormControl=new FormControl('')
// input1='';
// input2='' 
@Input() data:any
  constructor(private http:HttpClient){
    
   console.log('constructore',this.data);
  }
  print(){
    console.log('hi');
  }
  ngOnInit(): void {
    console.log('hi',this.data);
    // this.searchControl.valueChanges.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),        
    //   switchMap((search:any)=>this.http.get('https://fakestoreapi.com/products/'+search))
    // ).subscribe((data:any)=>console.log(data))
  }

  // onSubmit(input1:any,input2:any){
  //   console.log(input1.value, input2.value);
  // }

//   first:any
//   second:any
//   valueChangeofOne(data:any){
// this.first=data
//   } 
//   valueChangeofTwo(data:any){
// this.second=data
//   }

//   onSubmit(){
// console.log(this.first.target.value,this.second.target.value);
//   }
// @Input() myList:any
// ngAfterViewChecked(): void {
//   console.log('uiRendered');
// //   console.log(this.myList);
// }
}
// 'https://fakestoreapi.com/products/''https://fakestoreapi.com/products/'+