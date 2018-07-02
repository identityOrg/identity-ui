import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {AuditService} from '../../service/audit.service';
import {Audit} from '../../model/audit';
import {AuditDetailComponent} from './audit-detail/audit-detail.component';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  displayedColumns = ['id', 'eventName', 'eventTime', 'authType', 'principleName', 'principleType'];
  dataSource: MatTableDataSource<Audit> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private auditService: AuditService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.auditService.searchAudits(null)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }, err => {
        this.dataSource = null;
        console.log(err);
      });
  }

  showDetails(audit: Audit) {
    const config = new MatDialogConfig();
    config.data = {audit: audit};
    config.closeOnNavigation = true;
    this.dialog.open(AuditDetailComponent, config);
    return false;
  }
}
