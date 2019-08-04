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
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatListModule,
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
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatListModule,
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
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatListModule,
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
