import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatGridListModule,
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatSlideToggleModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatSlideToggleModule,
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
