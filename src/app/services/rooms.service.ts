import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FirebaseApp } from 'angularfire2';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomsCollection: AngularFirestoreCollection<Person>;
  presenters: Observable<Person[]>;
  presenterCollection: AngularFirestoreCollection<Person>;
  presenter: Observable<Person[]>;
  audience: Observable<Person[]>;  
  
  roomName;
  
  constructor( public afs: AngularFirestore, public fbApp: FirebaseApp, public session: SessionService) {
  }
  
  listenPresenter() {
    this.roomName = this.session.getRoom();
    console.log(this.session.getRoom());
    console.log(this.roomName);
    this.presenter = this.afs.collection<Observable<Person[]>>('presenters', presenter => presenter.where("roomName", "==", this.roomName)).snapshotChanges();
    return this.presenter;
  }
  
  addAudience(person: Person) { 
    var audience = {
      'roomName': person.roomName,
      'audience_id': person.token
    };
    return new Promise((resolve, reject) => {
      this.checkRoom(person.roomName)
      .then(notExists => {
        console.log(notExists);
        reject(`Room'${person.roomName}' not exists!`);
      })
      .catch(exists => {
        this.afs.collection('audience').add(audience)
        .then(result => {
          // resolve(`'${person.roomName}' created!`);
          this.roomName = person.roomName;
          // this.listenPresenter();
          console.log(result);
          resolve(result);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
      });
    });
  }
  
  updateAudience(audienceId) {
    var x = Math.random() * 200;
    return new Promise((resolve, reject) => {
      this.afs.collection('audience').doc(audienceId).update({'screenshot': x})
      .then(result => {
        // resolve(`'${person.roomName}' created!`);
        // this.roomName = person.roomName;
        // this.listenPresenter();
        // console.log(result);
        resolve("Updated");
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
    });
  }
  
  remove(collection, id) {
    // console.log(id);
    return new Promise((resolve, reject) => {
      this.afs.collection(collection).doc(id).delete()
      .then(result => {
        resolve("Document deleted");
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
    })     
  }
  
  checkRoom(roomName) {
    return new Promise((resolve, reject) => {
      try {
        this.presenterCollection = this.afs.collection('presenters', presenter => {
          return presenter.where('roomName', '==', roomName);
        });  
        var flag = true;
        this.presenterCollection.snapshotChanges()
        .subscribe(snapshot => {
          if(snapshot.length == 0) {
            flag = false;
            resolve(true);
          } else if(flag){
            reject(false);
          }
        })
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
  }
}
