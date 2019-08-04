import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener} from '@angular/core';
import { cardAnim } from '../../animations/card.animation';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();
  // 给宿主绑定trigger，关联上动画
  @HostBinding('@card') cardState = 'out';
  @HostListener('mouseenter')
  onMuseEnter(){
    this.cardState = 'hover'
  }
  @HostListener('mouseleave')
  onMuseLeave(){
    this.cardState = 'out'
  }

  constructor() { }

  ngOnInit() {
  }
  onInviteClick(){
    this.onInvite.emit();
  }
  onEditClick(){
    this.onEdit.emit();
  }
  onDelClick(){
    this.onDel.emit();
  }
}
