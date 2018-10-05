import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../services/connection.service';
import { PostInterface } from "../../models/post";
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  idPost: string;
  idLogUser: string;
  isOwner: boolean = false;
  posts: PostInterface[];
  post: PostInterface = {
    id: '',
    userName: '',
    userID: '',
    userPic: '',
    content: '',
    datePost: ''
  }

  constructor(
    public connectionService: ConnectionService,
    public authService: AuthService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.allPosts();
    this.checkUserLog();
  }

  allPosts() {
    this.connectionService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  checkUserLog() {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        this.idLogUser = user.uid;
      }
    })
  }

  clickDelete() {
    if (confirm('¿Estás segurx que quieres eliminar esta publicación?')) {
      this.connectionService.deletePost(this.post);
    }
  }

  getPost() {
    this.idPost = this.route.snapshot.params['id'];
    this.connectionService.getOnePost(this.idPost).subscribe(post => this.post = post)    
  }

  clickEdit({value}: {value: PostInterface}) {
    value.id = this.idPost;
    this.connectionService.updatePost(value);
  }
}
