import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CdkTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialImportModule {
}
