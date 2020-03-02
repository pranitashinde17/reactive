import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive';

signupForm:FormGroup;
FirstName:string = "";
LastName:string = "";
Email:string = "";
Password:string = "";

constructor(private formbuilder:FormBuilder){
	this.signupForm = formbuilder.group({
    //fname: new FormControl(),
    //lname: new FormControl(),
    //Emailid: new FormControl(),
    //userpassword: new FormControl()
fname:['',Validators.compose([Validators.required,Validators.maxLength(5),Validators.minLength(1)])],
lname:['',[Validators.required,Validators.maxLength(19)]],
Emailid:['',[Validators.required,Validators.email]],
userpassword:['',Validators.required]
     
});
}

postData(signupForm:any){

console.log(this.signupForm.value);
//this.FirstName=signupForm.get('fname').value;
//console.log(this.FirstName);
}


/*
resetForm(){
	this.signupForm.reset();
}
*/

resetForm(){
this.signupForm.reset({
	fname:'Sachin'
});
}
}


