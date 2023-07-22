import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider'

@NgModule({
  declarations: [
    DeleteConfirmationComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    DeleteConfirmationComponent,
    MatDividerModule,
    MatToolbarModule,
    MatDialogModule
  ],
})
export class SharedModule {}
