import { Component, OnInit, Input, Output, EventEmitter,HostListener } from '@angular/core';
import { itemAnim } from '../../animations/item.animation';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClicked = new EventEmitter<void>();

  widerPriority = 'in'
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : "unassigned"
  }
  onItemClicked() {
    this.taskClicked.emit();
  }
  onCheckBoxClick(event) {
    event.stopPropagation();
  }

  @HostListener('mouseenter')
  onMuseEnter(){
    this.widerPriority = 'out'
  }

  @HostListener('mouseleave')
  onMuseLeave(){
    this.widerPriority = 'in'
  }
}
