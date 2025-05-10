import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class DemoService{


    getData(obj:any){
        return obj
    }
}
