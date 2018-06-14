import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ScopeService} from '../../../service/scope.service';
import {Scope} from '../../../model/scope';

@Component({
  selector: 'app-edit-scope',
  templateUrl: './edit-scope.component.html',
  styleUrls: ['./edit-scope.component.scss']
})
export class EditScopeComponent implements OnInit {

  scope: Scope = {scopeId: null, scopeName: null};

  scopeId: string;
  edit = false;

  constructor(private dialogRef: MatDialogRef<EditScopeComponent>,
              private scopeService: ScopeService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.scopeId = data.scopeId;
    this.edit = data.edit;
  }

  ngOnInit() {
    if (this.edit) {
      this.scopeService.getScope(this.scopeId).subscribe(s => {
        this.scope = s;
      });
    }
  }

  close() {
    this.dialogRef.close(false);
  }

  save() {
    if (this.edit) {
      this.scopeService.update(this.scope)
        .subscribe(s => {
          this.dialogRef.close(true);
        });
    } else {
      this.scopeService.create(this.scope)
        .subscribe(s => {
          this.dialogRef.close(true);
        });
    }
  }

}
