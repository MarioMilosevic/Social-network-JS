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
    return {
      first,
      second,
      others,
    };
  }

  getCommentsLength() {
    return this.post.comments.length;
  }

  getComments() {
    const comments = this.post.comments;
    let firstName;
    let secondName;
    let commentText;
    comments.forEach((comment) => {
      firstName = comment.name;
      secondName = comment.lastName;
      commentText = comment.commentText;
    });
    return {
      firstName,
      secondName,
      commentText,
    };
  }
}
