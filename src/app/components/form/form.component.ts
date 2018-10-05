import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../../models/post';
import { AuthService } from '../../services/auth.service';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  post: PostInterface = {
    id: '',
    userName: '',
    userID: '',
    userPic: '',
    content: '',
    datePost: ''
  }

  constructor(public authService: AuthService, public connectionService: ConnectionService) { }

  ngOnInit() { }

  addPost({value}: {value: PostInterface}) {
    value.datePost = (new Date()).getTime();
    this.authService.getAuth().subscribe(user => {
      value.userID = user.uid;
      value.userName = user.displayName;
      value.userPic = user.photoURL;
      this.connectionService.addNewPost(value);
    })
    document.getElementById("comment").value = '';    
  }
}