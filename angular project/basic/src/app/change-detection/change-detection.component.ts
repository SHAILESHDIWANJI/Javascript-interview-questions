import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit{
  constructor(private http:HttpClient ){











    this.http.get('https://fakestoreapi.com/users').subscribe(
      {
        next:(user:any)=>{
          
          this.userList=user
          console.log(this.userList);
          // setTimeout(() => {
          //   this.changeDetect.detectChanges()
          // }, 5000);
        }
      }
    )
    fetch('https://fakestoreapi.com/users').then((res)=>res.json()).then((data)=>{
      data.map((m:any)=>console.log(m.username+'ds'))
    }).catch((err:any)=>console.log(err))
  }
userList:any[]=[]
data:string='hi from parent'

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/users')
    .pipe(
      map((m:any,index:any)=>m.map((m:any)=>m.username))
    )
    .subscribe(
      {
        next:(user:any)=>{
          console.log(user);
          // this.userList=user
          // console.log(this.userList);
          // setTimeout(() => {
          //   this.changeDetect.detectChanges()
          // }, 5000);
        }
      }
    )
  }

  onClick(){
    
  }
}
