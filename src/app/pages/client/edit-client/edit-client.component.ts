import {Component, OnInit} from '@angular/core';
import {Client} from '../../../model/client';
import {ClientService} from '../../../service/client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  title: string;
  editMode = false;
  client = {} as Client;

  constructor(private clientService: ClientService,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.activeRoute.paramMap
      .subscribe(pMap => {
        this.clientService.getClient(pMap.get('clientId'))
          .subscribe(data => {
            this.client = data;
          });
        const mode = pMap.get('mode');
        if ('detail' === mode) {
          this.title = 'Show Client';
          this.editMode = false;
        } else {
          this.title = 'Edit Client';
          this.editMode = true;
        }
      });
  }

  save() {
    this.clientService.edit(this.client)
      .subscribe(data => {
        this.client = data;
        this.router.navigateByUrl('/client/detail/' + data.clientId);
      });
    return false;
  }

  lockClient(): boolean {
    this.matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Please Confirm',
        confirmation: 'Do you want to lock the client ' + this.client.clientName + '?'
      }
    })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.clientService.lock(this.client.clientId)
            .subscribe(data => {
              this.client = data;
            });
        }
      });
    return false;
  }

  enableClient(): boolean {
    this.matDialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Please Confirm',
        confirmation: 'Do you want to enable the client ' + this.client.clientName + '?'
      }
    })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.clientService.enable(this.client.clientId)
            .subscribe(data => {
              this.client = data;
            });
        }
      });
    return false;
  }
}
