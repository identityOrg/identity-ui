import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

}
