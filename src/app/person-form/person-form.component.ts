import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../model/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})

export class PersonFormComponent implements OnInit {
  person: Person | undefined;
  formCadastro!: FormGroup;

  constructor() {}


  ngOnInit(): void {
    this.person = new Person();
  }

  onSubmit(){
    alert('Hello')
  }
}
