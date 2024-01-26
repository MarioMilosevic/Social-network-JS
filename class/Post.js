"use strict";

export class Post {
  post;
  constructor(post) {
    this.post = post;
  }

  getDate() {
    return this.post.postDate;
  }

  getPostText() {
    return this.post.postText;
  }

  getLikesLength() {
    return this.post.likes.length;
  }

  getWhoLiked() {
    const first = this.post.likes[0];
    let second = this.post.likes[1];
    const others = this.post.likes.toSpliced(0, 2);
    // others.length < 2 ? '' : others
    // console.log(second);
    return {
      first,
      second,
      others,
    };
  }
}
