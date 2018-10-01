import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { RoomsService } from '../../services/rooms.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseApp } from 'angularfire2';
import { Observable, Subscription } from 'rxjs';
import { FsService } from 'ngx-fs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  message;
  person: Person;
  presenter: Observable<any>;
  audienceId;
  isAudience = false;
  roomName;
  captureFlag = false;
  iWant: boolean = false;
  preSub: Subscription;
  prevCount  = 0;
  valid: boolean = false;
  canCapture: boolean = false;
  
  constructor(
    public http: HttpClient,
    public session: SessionService,
    public roomService: RoomsService,
    public _fsService: FsService,
    public afs: AngularFirestore,
    public fbApp: FirebaseApp,
    public storage: AngularFireStorage
    ) {
      this.person = {
        type: "Audience",
        roomName: null,
        token: null
      };
    }
    
    ngOnInit() {
      // console.log(typeof this.session.getRoom());
      // console.log(this.session.getRoom());
      if(this.session.getRoom() !== "undefined" && this.session.getRoom() !== null) {
        // console.log(this.session.getRoom() !== null);
        // console.log(this.session.getRoom() !== "null");
        // console.log(this.session.getRoom());
        this.audienceId = this.session.getAudienceId();
        this.roomName = this.session.getRoom();
        this.isAudience = true;
        return;
      }
      this.isAudience = false;
      // this.person.roomName = this.roomName;
      // console.log(this.roomName);
      // console.log(this.session.getAudienceId());
      this.startListening(true);
    }
    
    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      // console.log("gonna destroy...");
      this.leaveRoom();
    }
    
    submitForm(form) {
      if(form.valid) {
        // this.person.type = form.value.type;
        this.person.type = "Audience";
        this.person.roomName = form.value.roomName;
        this.roomName = this.person.roomName;
        this.valid = true;
        this.roomName = this.person.roomName;
        this.canCapture = false;
        this.roomService.addAudience(this.person)
        .then(result => {
          alert(`Room:'${this.person.roomName}' joined`);
          this.audienceId = result["id"];
          this.session.setAudienceId(this.audienceId);
          form.reset();
          this.isAudience = true;
          this.session.setRoom(this.person.roomName);
          this.startListening(false);
        })
        .catch(err => {
          console.log(err);
          this.valid = false;
          alert(`Room:'${this.person.roomName}' not found`);
        })
      } else {
        alert("Check the field!");
      }
    }
    
    startListening(go?) {
      // console.log("Here in listening..");
      if(go) {return};
      // console.log("Here in listening..");
      this.preSub = this.roomService.listenPresenter()
      .subscribe(async uploaded => {
        if(uploaded.length == 0){
          this.isAudience = false;
          this.leaveRoom(false);
          alert("Presenter has deleted the room!");
          // this.session.setRoom(undefined);
          // this.session.setAudienceId(undefined);
        } else {
          if(this.iWant == false) {
            return;
          }
          // console.log(uploaded);
          // console.log(uploaded[0]["payload"]["doc"]["id"]);
          // console.log(uploaded.length);
          let url, fullPath;
          url = uploaded["0"].payload.doc._document.data.internalValue.root.right.left.value.internalValue;
          fullPath = uploaded["0"].payload.doc._document.data.internalValue.root.left.value.internalValue;
          console.log(url);
          // console.log(fullPath);
          // console.log(url.substr(0, 5));
          // console.log(url.substr(0, 5) == "https");
          // console.log(url.substr(0, 5) == "https");
          if(url.substr(0, 5) == "https") {
            // console.log(url);
            // await this.http.post('http:localhost:3000/capture', {url});
            
            const a = document.createElement('a');
            a.href = url;
            a.type = "application/octet-stream";
            // a.type = "image/png";
            a.download = url;
            document.body.appendChild(a);
            a.click();
            // document.removeChild(a);
            
            this.canCapture = false;
            alert("Screenshot saved in downloads!");
            this.iWant = false;
            setTimeout(() => {
              this.storage.ref(fullPath).delete();
            }, 20000);
          }
        }
      })
    }
    
    leaveRoom(show?) {
      this.roomService.remove('audience', this.audienceId)
      .then(() => {
        this.valid = false;
        if (show) {
          alert("Room left.");
        }
        if(this.preSub != undefined) {
          this.preSub.unsubscribe();
        }
        this.isAudience = false;
        this.canCapture = true;
        this.session.setAudienceId(undefined);
        this.session.setRoom(undefined);
      })
      .catch(err => {
        console.log(err);
      })
    }
    
    captureScreen() {
      console.log("Going to capture screen...");
      this.startListening(false);
      this.iWant = true;
      this.canCapture = true;
      this.roomService.updateAudience(this.audienceId);
      // this._electronService.ipcRenderer.on('captureScreen')
    }
  }
  