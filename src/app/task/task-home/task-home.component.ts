import { Component, OnInit } from '@angular/core';

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
          "priority":3,
          "owner": {
            "id": "1",
            "name": "张飞",
            "avatar": "avatars:svg-11",
          },
          "reminder":new Date(),
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
          "priority":2,
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
  constructor() { }

  ngOnInit() {
  }

}
