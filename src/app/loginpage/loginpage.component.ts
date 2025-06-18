import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Login} from '../login.model'

@Component({
  selector: 'app-loginpage',
  imports: [FormsModule,CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
login: Login[] = [];
  loginForm: Login = {
    username:'',
    password:'',
  };


}
