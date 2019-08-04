import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    //使对话框也能够应用主题的变化
    private ol: OverlayContainer) { }

  ngOnInit() {
    // 接受传进来的参数
    //使对话框也能够应用主题的变化
    this.ol.getContainerElement().classList.add(this.data.dark ? 'myapp-dark-theme' : "" );
  }
  onClick() {
    // 返回对话框中的数据
    this.dialogRef.close(' 123 ')
  }

}
