import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  constructor() {
    // 将一个svgicon转换成字体icon

  }

  ngOnInit() {
  }
  openSidebar() {
    this.toggle.emit();
  }
}
