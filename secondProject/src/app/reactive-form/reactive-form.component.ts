import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbAlertModule, NbFormFieldModule, NbIconModule, NbListModule} from '@nebular/theme';
@Component({
  selector: 'reactive-form',
  standalone: true,
  imports: [NbInputModule, NbCardModule, FormsModule, NbButtonModule, NbAlertModule, CommonModule, NbFormFieldModule, NbIconModule, ReactiveFormsModule, NbListModule ],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
    form:any;
    // Always use RegExp type for regex due to incompatabilties with escape characters.
    emailPattern: RegExp = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]+/;
    phonePattern: RegExp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*/;
    constructor(fb: FormBuilder){
        // form control using formBuilder
        this.form = fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            address: ['', Validators.required],
            contactDetails: fb.group({
                phoneNumber: ['', [Validators.required, 
                    Validators.pattern(this.phonePattern),
                    Validators.minLength(10)]]
            }),
            skills: fb.array([]),
            password: ['', [Validators.required]]
        })


        
        // this.form = new FormGroup({ 
        //     name: new FormControl('', [Validators.required, Validators.minLength(5)]), 
        //     email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]), 
        //     address: new FormControl('', Validators.required),
        //     contactDetails: new FormGroup({ 
        //         phoneNumber: new FormControl( '', [Validators.required, 
        //             Validators.pattern(this.phonePattern),
        //             Validators.minLength(10)
        //     ])}),
        //     skills: new FormArray([])
        // });
    }
    get name(){
        return this.form.get('name');
    }
    get email(){
        return this.form.get('email');
    }
    get address(){
        return this.form.get('address');
    }
    get phoneNumber(){
        return this.form.get("contactDetails.phoneNumber");
    }
    get skills(){
        return (this.form.get("skills") as FormArray);
    }
    onSubmit(){
        console.log(this.form.value);
        console.log(this.form.valid);
    }
    addSkills(skills: HTMLInputElement){
        this.skills.push(new FormControl(skills.value));
        console.log(this.form.valid);
        skills.value = "";
    }
    removeSkill(i: number){
        this.skills.removeAt(i);
    }
}
