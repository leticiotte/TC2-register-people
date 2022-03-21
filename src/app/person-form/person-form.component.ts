import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import randomInteger from 'random-int';
import { Person } from '../model/person';


@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {
  name!: string;
  birthDate!: string;
  photo!: string;
  peopleList: Person[] = [];
  form!: Form;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      this.name == undefined ||
      this.birthDate == undefined ||
      this.name == '' ||
      this.birthDate == ''
    ) {
      alert('Preencha todos os campos');
      return;
    }
    if (this.photo == undefined || this.photo == '')
      this.photo = this.randomIcon();
    const person: Person = {
      name: this.name,
      birthDate: new Date(this.birthDate).toLocaleDateString(),
      photo: this.photo,
    };
    if (!this.getPerson(person)) {
      this.addPerson(person);
      this.cleanForms();
    } else {
      alert('Pessoa já adicionada');
      this.photo = '';
    }

  }

  cleanForms(): void {
    this.name = '';
    this.birthDate = '';
    this.photo = '';
  }

  addPerson(person: Person): void {
    this.peopleList.push(person);
    alert('Pessoa adicionada com sucesso!')
  }

  getPerson(person: Person): boolean {
    const index = this.peopleList.findIndex(
      (p) => p.name.toUpperCase() === person.name.toUpperCase()
    );
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }



  icons = [
    '../../assets/icons/icon1.jpg',
    '../../assets/icons/icon2.jpg',
    '../../assets/icons/icon3.jpg',
    '../../assets/icons/icon4.jpg',
    '../../assets/icons/icon5.jpg',
    '../../assets/icons/icon6.jpg',
  ];

  randomIcon(): string {
    const i = randomInteger(0, this.icons.length - 1);
    console.log(i);
    console.log(this.icons[i]);
    return this.icons[i];
  }


}

