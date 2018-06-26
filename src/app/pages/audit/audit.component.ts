import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {AuditService} from '../../service/audit.service';
import {Audit} from '../../model/audit';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  displayedColumns = ['id', 'eventName', 'eventTime', 'authType', 'principleName', 'principleType'];
  dataSource: MatTableDataSource<Audit> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private auditService: AuditService) {
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

}
