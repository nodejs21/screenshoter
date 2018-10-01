import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() { }
  
  setRoom(room) {
    localStorage.setItem("room", room);
  }
  
  setAudienceId(audienceId) {
    localStorage.setItem("audienceId", audienceId); 
  }
  
  getRoom() {
    return localStorage.getItem("room");
  }
  
  getAudienceId() {
    return localStorage.getItem("audienceId");
  }
  
}
