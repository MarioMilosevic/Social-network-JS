"use strict";

export class User {
  user;
  name;
  lastName;
  friends;
  constructor(user) {
    this.user = user;
    this.name = user.name;
    this.lastName = user.lastName
    this.adress = user.adress.street
    this.friends = user.friends
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
}
