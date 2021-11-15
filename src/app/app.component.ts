import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = '../assets/images/logo.jpg';
  url="https://www.bridgelabz.com";
  userName: string="";
  nameError: string="";


onClick($event){
  console.log("Save button is clicked",$event);
  window.open(this.url,"_blank");
}

onInput($event){
  console.log("change Event occured!", $event.data);
  const nameRegexP = RegExp('^[A-Z]{1}[A-Za-z//s]{2,}$');
  if(nameRegexP.test(this.userName)){
    this.nameError="";
    return;
  }
  this.nameError ="Name is Incorrect";

}
}