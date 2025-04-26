import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'ColorBlue'
})

export class ColorBluePipe implements PipeTransform{
  transform(value:any,...args:any[]) {
    console.log(value);
    return value.toUpperCase()
  }
}