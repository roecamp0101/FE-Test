import { Component, OnInit } from '@angular/core';
import {FeService} from './fe.service';
import {Response} from '@angular/http';
import {SearchPipePipe} from './search-pipe.pipe';


@Component({
    selector: 'app-home-component',
    templateUrl: './home-component.component.html',
    styleUrls: ['./home-component.component.scss']

})
export class HomeComponentComponent implements OnInit {

    title = 'app works!';
    items: any[] = [];
    items1: any[] = [];
    private toggle = true;
    
    toggleItems(){
        
        this.toggle = !this.toggle;
       
    }

    
constructor(private feService:FeService){}

 ngOnInit(){
   this.feService.getData().subscribe(
       data => {
       const myArray = [];
        for(let key in data){
           myArray.push(data[key]);
        }
           this.items = myArray;
       } 
   
   );
     
     
      this.feService.getForms().subscribe(
       data => {
       const myArray = [];
        for(let key in data){
           myArray.push(data[key]);
        }
           this.items1 = myArray;
       } 
   
   );
}


}
