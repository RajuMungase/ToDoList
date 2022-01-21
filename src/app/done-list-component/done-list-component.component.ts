import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.css']
})
export class DoneListComponentComponent implements OnInit {
  task:any = [];
  constructor(private ToDoService:ToDoService) { }

  ngOnInit(): void {
    this.ToDoService.data.subscribe(
      data =>{
        this.task = data;
      })
  }

  changeStatus(index:any){
    this.ToDoService.changeStatus(index,0);
  }


}
