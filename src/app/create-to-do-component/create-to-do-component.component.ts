import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.css']
})
 
export class CreateToDoComponentComponent implements OnInit {
  closeResult = '';
  AddForm: any= FormGroup;
  submitted = false;

  constructor(private modalService: NgbModal,private formBuilder: FormBuilder,private ToDoService:ToDoService) {}

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
    ngOnInit(): void {
      this.AddForm = this.formBuilder.group({
        taskName: ['', Validators.required],
        repeatingTask: ['', Validators.required],
        taskDescription: ['', Validators.required],
    });


  }

  get f() { return this.AddForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.AddForm.invalid) {
        return;
    }
    let data = this.AddForm.value;
    data.status = 0;
    this.ToDoService.add(data);
  }

  
}
