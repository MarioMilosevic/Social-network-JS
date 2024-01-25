"use strict";

export class User {
  user;
  name;
  lastName;
  friends;
  img
  constructor(user) {
    this.user = user;
    this.name = user.name;
    this.lastName = user.lastName
    this.adress = user.adress.street
    this.friends = user.friends
    this.img = user.img
  }

  getAdress() {
    return this.adress;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  getFriendsArr(){
    return this.friends
  }

  getFriendsNumber() {
    return this.friends.length;
  }

  getPosts() {
    return this.user.posts;
  }

  getImg(){
    return this.img
  }
}
