import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  preSub: Subscription;
  constructor() { }
  
  setRoom(room) {
    localStorage.setItem("room", room);
  }
  
  setAudienceId(audienceId) {
    localStorage.setItem("audienceId", audienceId); 
  }
  
  setPreSub(preSub) {
    this.preSub = preSub;
  }
  
  getPreSub() {
    return this.preSub;
  }
  
  getRoom() {
    return localStorage.getItem("room");
  }
  
  getAudienceId() {
    return localStorage.getItem("audienceId");
  }
}
