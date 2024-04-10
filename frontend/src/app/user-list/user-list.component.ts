import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages=1;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers(this.currentPage, this.pageSize)
      .subscribe(
        response => {
          this.users = response.users;
          this.totalPages = response.totalPages;
        },
        error => {
          console.error('Error fetching users:', error);
          // Handle error
        }
      );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadUsers();
  }

  getPageNumbers(): number[] {
    return Array.from({ length:this.totalPages }, (_, i) => i + 1);
  }
}
