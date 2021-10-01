import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss'],
})
export class ConversorComponent implements OnInit {
  newValue:any;
  forms: FormGroup;
    constructor() { }
  
    ngOnInit() {
      this.forms=new FormGroup({
        decimal:new FormControl(''),
        binary:new FormControl(''),
        octal:new FormControl(''),
        hexa:new FormControl('')
      });
    }
  
    decimal = function (newValue: string) {
      if (newValue!=""){
     this.forms.patchValue({binary : parseInt(newValue, 10).toString(2)});
        this.forms.patchValue({octal : parseInt(newValue, 10).toString(8)});
        this.forms.patchValue({hexa : parseInt(newValue, 10).toString(16).toLocaleUpperCase()});
      }else{
        this.forms.patchValue({binary : ""});
        this.forms.patchValue({octal : ""});
        this.forms.patchValue({hexa : ""});
  
      }
    }
    b = 0;
    o = 0;
    h =0;
  
    binario = function (newValue: string) {
      this.b = this.b + 1;
      if(this.b == 1){
        if (newValue!=""){
          this.forms.patchValue({decimal : parseInt(newValue, 2).toString(10)});
        }else{
          this.forms.patchValue({decimal : ""});
        }
        this.b = 0;
      }
  
    }
  
  
    octal = function (newValue: string) {
      this.o = this.o + 1;
      if(this.o == 1){
        if (newValue!=""){
          this.forms.patchValue({decimal : parseInt(newValue, 8).toString(10)});
        }else{
          this.forms.patchValue({decimal : ""});
        }
        this.o = 0;
      }
  
    }
  
  
    hexadecimal = function (newValue: string) {
      this.h = this.h + 1;
      if(this.h == 1){
        if (newValue!=""){
          this.forms.patchValue({decimal : parseInt(newValue, 16).toString(10)});
        }else{
          this.forms.patchValue({decimal : ""});
        }
        this.h = 0;
      }
  
    }
  
  
  
    onSubmit = function(value: any) {
       console.log(value);
     }
  
  }