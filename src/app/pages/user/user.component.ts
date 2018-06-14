import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['show', 'username', 'firstName', 'lastName', 'status', 'admin', 'actions'];
  dataSource: MatTableDataSource<User> = null;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.listUsers(null)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<User>(data);
      }, err => {
        this.dataSource = null;
        console.log(err);
      });
  }

}
