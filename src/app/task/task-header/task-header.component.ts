import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header='';
  @Output() newTask = new EventEmitter<void>();
  @Output() moveALL = new EventEmitter<void>();
  @Output() delList = new EventEmitter<void>();
  @Output() onEditList = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onNewTaskClick(){
    console.log(1);

    this.newTask.emit();
  }
  onMoveAll(){
    console.log(2);

    this.moveALL.emit();
  }
  onDelTask(){
    this.delList.emit();
  }
  onEditTask(){

    console.log(1232);

    this.onEditList.emit();
  }
}
