import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  searchControl = new FormControl();
  users$: Observable<any[]>;

  constructor(private http: HttpClient, private users: UsersService) {
    this.users$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(query => this.searchUsers(query))
    );
  }

  searchUsers(query: string): Observable<any[]> {
    if (query) {
      return this.users.searchUsers(query)
      .pipe(
        map(response => response.items)
      );
    } else {
      return of([]);
    }
  }

}

