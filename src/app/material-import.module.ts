import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
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
  ],
  declarations: []
})
export class MaterialImportModule {
}
