import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../../service/client.service';
import {Client} from "../../../model/client";

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  client = {} as Client;

  constructor(private activatedRoute: ActivatedRoute,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(pMap => {
        this.clientService.getClient(pMap.get('clientId'))
          .subscribe(c => {
            this.client = c;
          }, error => {
            console.log(error);
          });
      });
  }

}
