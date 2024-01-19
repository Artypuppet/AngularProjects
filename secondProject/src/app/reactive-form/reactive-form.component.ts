import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbAlertModule, NbFormFieldModule, NbIconModule} from '@nebular/theme';
@Component({
  selector: 'reactive-form',
  standalone: true,
  imports: [NbInputModule, NbCardModule, FormsModule, NbButtonModule, NbAlertModule, CommonModule, NbFormFieldModule, NbIconModule, ReactiveFormsModule ],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    form:any;
    constructor(){
        this.form = new FormGroup({ name: new FormControl('', [Validators.required, Validators.minLength(5)]), 
            email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]+")]), 
            address: new FormControl('', Validators.required),
            contactDetails: new FormGroup(
            { phoneNumber: new FormControl( '', [Validators.required, 
                Validators.pattern("^\s*(?:\\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"),
                Validators.minLength(10)
                ])}
                )
            }
        );
    }
    onSubmit(){
        console.log(this.form.value);
    }
}
