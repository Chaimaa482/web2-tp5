import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { S1Service } from './s1.service';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2/c2.component';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C1Component, CommonModule, RouterLink, C2Component, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //create var in ts and call it in app html 
  title = 'firstProject';
    
  
    // fruits = [
    //   { name: 'Apple', image: '/assets/apple.jpg' },
    //   { name: 'Banana', image: '/assets/banana.jpg' },
    //   { name: 'Orange', image: '/assets/orange.jpg' },
    // ];



    
  // injection de depondances
  // constructor(private v:S1Service){
  //   v.direBonjour();

  // }
}



