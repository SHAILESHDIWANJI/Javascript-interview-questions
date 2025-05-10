import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, switchMap, throttle, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient,private cdk:ChangeDetectorRef){}
  title = 'demo';
 
  today=new Date()

  searchControl:FormControl=new FormControl('')
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      throttleTime(1000),
      distinctUntilChanged(),
      switchMap((search: any) => this.http.get('https://fakestoreapi.com/users/' + search))
    ).subscribe((data: any) => {
      console.log(data);
      console.log('data');
      setTimeout(() => {
        this.cdk.detectChanges()
      }, 3000);
    });
    
  }
}
