import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../shared/user.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input', {static: false}) public el: ElementRef;

  constructor(private user:UserService){}
    
  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.user.users.push(username);
      this.el.nativeElement.value = '';
    }
  }

}
