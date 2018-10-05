import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { ConnectionService } from './services/connection.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WallComponent } from './components/wall/wall.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WallComponent,
    WelcomeComponent,
    PostsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
  ],
  providers: [AuthService, ConnectionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
