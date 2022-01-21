import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})

export class ToDoListComponentComponent implements OnInit {
  active = 1;

  task:any = [];

  constructor(private ToDoService:ToDoService) { }

  ngOnInit(): void {
    this.ToDoService.data.subscribe(
      data =>{
        this.task = data;
      })
  }

  changeStatus(index:any){
    this.ToDoService.changeStatus(index,1);
  }

}
