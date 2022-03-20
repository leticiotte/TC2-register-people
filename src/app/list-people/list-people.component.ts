import { Component, OnInit } from '@angular/core';
import randomInteger from 'random-int';
import { Person } from '../model/person';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent implements OnInit {
  lista: Person[] = [
    {
      name: 'Letícia',
      birthDate: '14/03/2002',
      photo:
      "../../assets/icons/icon2.jpg",
    },
    {
      name: 'Danúbia',
      birthDate: '23/12/1999',
      photo:
      "../../assets/icons/icon5.jpg",
    },
    {
      name: 'Letícia',
      birthDate: '14/03/2002',
      photo:
      "../../assets/icons/icon3.jpg",
    },
  ];

  icons = [
    "../../assets/icons/icon1.jpg",
    "../../assets/icons/icon2.jpg",
    "../../assets/icons/icon3.jpg",
    "../../assets/icons/icon4.jpg",
    "../../assets/icons/icon5.jpg",
    "../../assets/icons/icon6.jpg",
  ];

  constructor() {}

  ngOnInit(): void {}

  randomIcon() : string {
    const i = randomInteger(0, this.icons.length-1)
    console.log(i)
    console.log(this.icons[i])
    return this.icons[i]
  }
}
