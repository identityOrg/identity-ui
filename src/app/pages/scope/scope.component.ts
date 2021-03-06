import {Component, OnInit, ViewChild} from '@angular/core';
import {ScopeService} from '../../service/scope.service';
import {Scope} from '../../model/scope';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {EditScopeComponent} from './edit-scope/edit-scope.component';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css']
})
export class ScopeComponent implements OnInit {

  displayedColumns = ['scopeId', 'scopeName'];
  dataSource: MatTableDataSource<Scope> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private scopeService: ScopeService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.scopeService.listScopes(null)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Scope>(data);
        this.dataSource.paginator = this.paginator;
      }, err => {
        this.dataSource = null;
        console.log(err);
      });
  }

  edit(scopeId: string) {
    const config = new MatDialogConfig();
    config.data = {scopeId: scopeId, edit: true};
    config.closeOnNavigation = true;
    const dialogRef = this.dialog.open(EditScopeComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  create() {
    const config = new MatDialogConfig();
    config.data = {scopeId: null, edit: false};
    config.closeOnNavigation = true;
    const dialogRef = this.dialog.open(EditScopeComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

}
