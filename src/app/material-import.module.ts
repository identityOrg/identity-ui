import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule, MatSlideToggleModule,
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
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatCheckboxModule,
    MatSlideToggleModule
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
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class MaterialImportModule {
}
