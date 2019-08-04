import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      "id": 1,
      "email": "zf@163.com",
      "name": "张飞",
    }, {
      "id": 2,
      "email": "zy@163.com",
      "name": "赵云",
    }, {
      "id": 3,
      "email": "mc@163.com",
      "name": "马超",
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  displayUser(user: { id: string; name: string; email?: string }) {
    return user ? user.name : ""
  }
}
