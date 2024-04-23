import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {

  f1= new FormGroup({
      nom : new FormControl('', Validators['required'])
    });

    get nom(){
      return this.f1.get('nom');
    }

}
