import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ProjectComponent } from './project.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { InviteComponent } from './invite/invite.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectRoutingModule } from './project-routing.routing';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule,
  ],
  declarations: [
    ProjectComponent,
    ProjectItemComponent,
    ProjectListComponent,
    InviteComponent,
    NewProjectComponent,
  ],
  // 对话框组建一般放在此处
  entryComponents:[
    InviteComponent,
    NewProjectComponent,
  ]
})
export class ProjectModule { }
