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

  getFirstName(){
    return this.user.name
  }

  getLastName(){
    return this.user.lastName
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
    let [first, second, others] = posts;
    const likedObjects = [first, second, others];
    likedObjects.forEach((obj) => {
      const person = obj.likes;
      const [person1, person2, others2] = person;
      first = person1;
      second = person2;
      others = others2;
    });
    return {
      first,
      second,
      others,
      likedObjects,
    };
  }

  getPostDate() {
    return this.user.postDate;
  }

  findPost(id){
   return this.user.posts.find(post => post.id === id)
  }
}
