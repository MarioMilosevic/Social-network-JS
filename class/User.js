"use strict";

export class User {
  constructor(user) {
    this.adress = user.adress;
    this.friends = [...user.friends];
    this.id = user.id;
    this.lastName = user.lastName;
    this.name = user.name;
    this.posts = [...user.posts];
  }

  
}
