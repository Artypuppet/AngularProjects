import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbAlertModule, NbFormFieldModule, NbIconModule} from '@nebular/theme';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'template-form',
  standalone:true,
  imports:[ NbInputModule, NbCardModule, FormsModule, NbButtonModule, NbAlertModule, CommonModule, NbFormFieldModule, NbIconModule  ],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class AppFormComponent {
    address: string;
    constructor(){
        this.address = "Address"
    }
    onSubmit(form: NgForm, element:any){
        console.log(form.value);
        
    }
    onChange(field: NgModel){
        console.log(field);
    }
}
