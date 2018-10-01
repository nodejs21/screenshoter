import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { NgxFsModule } from 'ngx-fs';

import { AppComponent } from './app.component';
import { RoomsService } from './services/rooms.service';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxFsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'screenshot'),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [RoomsService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
