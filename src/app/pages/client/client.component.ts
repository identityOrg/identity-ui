import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../service/client.service';
import {Client} from '../../model/client';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  displayedColumns = ['show', 'clientId', 'clientName', 'status', 'creationDate', 'expiryDate', 'actions'];
  dataSource: MatTableDataSource<Client> = null;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    return this.clientService.listClients(null)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      }, err => {
        this.dataSource = null;
        console.log(err);
      });
  }

}
