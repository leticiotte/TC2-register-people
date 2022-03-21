import { Component, Input, OnInit } from '@angular/core';
import randomInteger from 'random-int';
import { Person } from '../model/person';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css'],
})
export class ListPeopleComponent implements OnInit {
  @Input() list : Person[] = [];



  deletarPessoa(delPessoa:Person) : void{
    const index = this.list.findIndex(pessoa => pessoa.name === delPessoa.name)
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}


}
