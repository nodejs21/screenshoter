import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { RoomsService } from '../../services/rooms.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseApp } from 'angularfire2';
import { Observable, Subscription } from 'rxjs';
import { FsService } from 'ngx-fs';
import { AngularFireStorage } from 'angularfire2/storage';
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
  once: boolean = false;
  
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
        this.preSub = this.session.getPreSub();
        this.isAudience = true;
        return;
      }
      this.isAudience = false;
      // this.person.roomName = this.roomName;
      // console.log(this.roomName);
      // console.log(this.session.getAudienceId());
      this.startListening(true);
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
          this.isAudience = true;
          console.log(this.roomName);
          console.log(this.person.roomName);
          this.session.setRoom(this.person.roomName);
          console.log(this.session.getRoom());
          this.startListening(false);
          form.reset();
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
      console.log("Here in listening..");
      var flag = true;
      if(this.preSub == undefined) {
        flag = false;
      }
      console.log(this.preSub);
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
          // if(flag == false) {
          //   return this.captureScreen();
          // }
          uploaded.map((action) => {
            console.log(this.preSub);
            // console.log(action.payload.doc.data());
            // console.log(action.payload.doc.get("screenshotUrl"));
            // console.log(action.payload.doc.id);
            let url, fullPath;
            url = action.payload.doc.get("screenshotUrl");
            fullPath = action.payload.doc.get("fullPath");
            if(url == undefined) {
              this.canCapture = false;
              this.iWant = false;
              return;
            }
            console.log(flag);
            if(flag) {
              const a = document.createElement('a');
              a.href = url;
              // a.type = "application/octet-stream";
              a.type = "image/png";
              a.download = url;
              if(/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                console.log("Here i am...");
                console.log(url);
                console.log(navigator);
                console.log(navigator.userAgent);
                a.target = "_blank";
              }
              document.body.appendChild(a);
              a.click();
              alert("Screenshot saved in downloads!");
              this.canCapture = false;
              this.iWant = false;
              this.session.setPreSub(this.preSub);              
            } else {
              console.log("recalling...");
              flag = true;
              return this.captureScreen();
            }
            setTimeout(() => {
              this.storage.ref(fullPath).delete();
            }, 15000);
          })
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
      this.iWant = true;
      this.canCapture = true;
      this.roomService.updateAudience(this.audienceId)
      .then((result) => {
        // this.preSub = undefined;
        console.log(this.preSub);
        if(this.preSub == undefined) {
          this.startListening(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      // this._electronService.ipcRenderer.on('captureScreen')
    }
  }
  