import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { TaskComponent } from './task.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskRoutingModule } from './task-routing.routing';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
  ],
  declarations: [
    TaskComponent,
    TaskHeaderComponent,
    TaskHomeComponent,
    TaskItemComponent,
    TaskListComponent,
    NewTaskComponent,
    CopyTaskComponent,
  ],
  entryComponents:[
    NewTaskComponent,
    CopyTaskComponent
  ]
})
export class TaskModule { }
