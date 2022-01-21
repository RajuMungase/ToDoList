import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  data = new BehaviorSubject([{
    taskName: 'First ToDo',
    repeatingTask: 'Yes',
    taskDescription: 'Description',
    status:0,
  }]);
  constructor() { }

  add(data:any){
    this.data.subscribe((OldData)=>{
      OldData.push(data);
    });
  }

  
  changeStatus(index:number,status:number){
    this.data.subscribe((OldData)=>{
      OldData[index].status = status;
    });
  }
}
