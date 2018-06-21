import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatPaginatorModule, MatSelectModule, MatSlideToggleModule,
  MatSortModule,
  MatTableModule, MatTabsModule
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
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule
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
    MatSlideToggleModule,
    MatTabsModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialImportModule {
}
