import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  errorLogin = false;

  constructor(private route: ActivatedRoute,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.fragment
      .subscribe((fragment: any) => {
        this.loginService.login(fragment)
          .subscribe(p => {
            this.router.navigate(['dashboard']);
          }, e => {
            console.log('Failed to login ' + e);
            this.errorLogin = true;
          });
      });
  }

}
