import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // NewToDO is input value
  newToDo: any;
  // list is empty string where i push the value from newToDO
  list: string[] = [];

  // Boolean

  status: boolean = false;

  // Get the toDoList from localstorage
  toDoList = (this.list = JSON.parse(localStorage.getItem('toDos')!));

  // Remove toDo from array and localstorage

  removeToDo(i: any, j: any) {
    this.list.splice(i, j);
    localStorage.setItem('toDos', JSON.stringify(this.list));
    return;
  }

  // Save ToDo in LocalStorage

  saveLocal() {
    this.list.push(this.newToDo.toUpperCase());
    localStorage.setItem('toDos', JSON.stringify(this.list));
    this.newToDo = '';
    return;
  }

  ngOnInit(): void {
    /*
    Set default in localstorage on empty array,
    because is the localstorage is empty,
    can't push newToDo to localstorage
    */
    if (!this.list) {
      localStorage.setItem('toDos', JSON.stringify((this.list = [])));
    }
  }
}
