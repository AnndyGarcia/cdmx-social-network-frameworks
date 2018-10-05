import { Injectable } from '@angular/core';
import { PostInterface } from '../models/post';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConnectionService {
  postCollection: AngularFirestoreCollection<PostInterface>;
  postDoc: AngularFirestoreDocument<PostInterface>;
  posts: Observable<PostInterface[]>;
  post: Observable<PostInterface>;

  constructor(public afs: AngularFirestore) {
    this.postCollection = this.afs.collection('items', ref => ref);
  }

  addNewPost(post: PostInterface) {
    this.postCollection.add(post);
  }

  getAllPosts(): Observable<PostInterface[]> {
    this.posts = this.postCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as PostInterface;
        data.id = action.payload.doc.id;
        return data;
      })
    }))
    return this.posts;
  }

  getOnePost(id: string) {
    this.postDoc = this.afs.doc<PostInterface>(`items/${id}`);
    this.post = this.postDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as PostInterface;
        data.id = action.payload.id;
        return data;
      }
    }))
    return this.post;
  }

  updatePost(post: PostInterface) {
    this.postDoc = this.afs.doc(`items/${post}`);
    this.postDoc.update(post);
  }

  deletePost(post: PostInterface) {
    this.postDoc = this.afs.doc(`items/${post.id}`);
    this.postDoc.delete();
  }
}
