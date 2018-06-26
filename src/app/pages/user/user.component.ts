import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['username', 'status', 'firstName', 'lastName', 'admin'];
  dataSource: MatTableDataSource<User> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.listUsers(null)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<User>(data);
        this.dataSource.paginator = this.paginator;
      }, err => {
        this.dataSource = null;
        console.log(err);
      });
  }

}
