import {Component, OnInit} from '@angular/core';
import {ScopeService} from '../../service/scope.service';
import {Scope} from '../../model/scope';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css']
})
export class ScopeComponent implements OnInit {

  scopes: Scope[] = [];

  constructor(private scopeService: ScopeService) {
  }

  ngOnInit() {
    this.scopeService.listScopes(null)
      .subscribe(data => {
        this.scopes = data;
      }, err => {
        this.scopes = [];
        console.log(err);
      });
  }

}
