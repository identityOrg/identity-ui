import {Component, OnInit} from '@angular/core';
import {ScopeService} from '../../service/scope.service';
import {Scope} from '../../model/scope';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css']
})
export class ScopeComponent implements OnInit {

  displayedColumns = ['show', 'scopeId', 'scopeName', 'actions'];
  dataSource: MatTableDataSource<Scope> = null;

  constructor(private scopeService: ScopeService) {
  }

  ngOnInit() {
    this.scopeService.listScopes(null)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Scope>(data);
      }, err => {
        this.dataSource = null;
        console.log(err);
      });
  }

}
