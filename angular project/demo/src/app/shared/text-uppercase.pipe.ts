import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name:'uppercased'
})
export class upperCasePipe implements PipeTransform{


    transform(value: any, ...args: any[]) {
      return   value.toUpperCase()
    }
}
