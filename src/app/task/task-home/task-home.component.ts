import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      "id": 1,
      "name": "待办",
      "completed": false,
      "tasks": [
        {
          "id": 1,
          "desc": "任务1",
          "owner": {
            "id": "1",
            "name": "张飞",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        },
        {
          "id": 2,
          "desc": "任务2",
          "owner": {
            "id": "1",
            "name": "赵云",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        },
        {
          "id": 3,
          "desc": "任务3",
          "owner": {
            "id": "1",
            "name": "关羽",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        }],
    },
    {
      "id": 2,
      "name": "进行中",
      "tasks": [
        {
          "id": 1,
          "desc": "任务1",
          "priority": 3,
          "owner": {
            "id": "1",
            "name": "张飞",
            "avatar": "avatars:svg-11",
          },
          "reminder": new Date(),
          "completed": true,
          "dueDate": new Date(),
        },
        {
          "id": 2,
          "desc": "任务2",
          "owner": {
            "id": "1",
            "name": "赵云",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        },
        {
          "id": 3,
          "desc": "任务3",
          "owner": {
            "id": "1",
            "name": "关羽",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        }],
    },
    {
      "id": 3,
      "name": "完成",
      "completed": true,
      "tasks": [
        {
          "id": 1,
          "desc": "任务11111111111111111111111111111111111111111",
          "priority": 2,
          "owner": {
            "id": "1",
            "name": "张飞",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        },
        {
          "id": 2,
          "desc": "任务2",
          "owner": {
            "id": "1",
            "name": "赵云",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        },
        {
          "id": 3,
          "desc": "任务3",
          "owner": {
            "id": "1",
            "name": "关羽",
            "avatar": "avatars:svg-11",
          },
          "dueDate": new Date(),
        }],
    }
  ]
  constructor(private taskDialog: MatDialog) { }

  ngOnInit() {
  }
  launchCopyTaskDialog() {
    console.log(1);

    const dialogRef = this.taskDialog.open(CopyTaskComponent, { data: { lists: this.lists } })
  }

  launchedTaskDialog(task) {
    const dialogRef = this.taskDialog.open(NewTaskComponent, { data: { title: '修改任务', task: task } })
  }
  launchDelTaskDialog(){
    const dialogRef = this.taskDialog.open(ConfirmDialogComponent, {data: {title: "删除任务列表:",content: "您确认删除该任务列表吗？"}});
  }
  launchEditTaskDialog(){
    const dialogRef = this.taskDialog.open(NewTaskListComponent, {data: {title: "更改列表名称:",content: "您确认删除该任务列表吗？"}});
  }
  launchNewTaskDialog() {
    console.log(2);

    this.taskDialog.open(NewTaskListComponent, { data: { title: '新建列表' } })
  }

}
