"use strict";

export class User {
  user;
  constructor(user) {
    this.user = user;
  }

  getAdress(){
    return this.adress
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  getFriends() {
    return this.friends;
  }

  getPosts() {
    return this.user.posts;
  }
}
