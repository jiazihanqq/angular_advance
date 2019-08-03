import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule,MatInputModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatButtonModule ,MatCardModule,MatInputModule
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
