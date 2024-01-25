"use strict";

export class User {
  user;
  // name;
  // lastName;
  // friends;
  // img;
  // postDate;
  constructor(user) {
    this.user = user;
    // this.name = user.name;
    // this.lastName = user.lastName;
    // this.adress = user.adress.street;
    // this.friends = user.friends;
    // this.img = user.img;
    // this.postDate = user.postDate;
  }

  getAdress() {
    return this.user.adress.street;
  }

  getFullName() {
    return `${this.user.name} ${this.user.lastName}`;
  }

  getFriendsArr() {
    return this.user.friends;
  }

  getFriendsNumber() {
    return this.user.friends.length;
  }

  getPosts() {
    return this.user.posts;
  }

  getImg() {
    return this.user.img;
  }

  getWhoLiked() {
    const posts = this.user.posts;
    return posts
    // const [first, second, ...others] = posts.likes;
    // return {first, second, others}
  }

  getPostDate() {
    return this.user.postDate;
  }
}
