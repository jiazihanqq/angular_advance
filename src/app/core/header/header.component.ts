import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();
  constructor() {
    // 将一个svgicon转换成字体icon

  }

  ngOnInit() {
  }
  openSidebar() {
    this.toggle.emit();
  }
  onchange(checked:boolean){
    console.log(checked);

    this.toggleDarkTheme.emit(checked);
  }
}
