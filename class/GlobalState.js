"use strict";

export class GlobalState {
  isLoaded;
  constructor() {
    this.isLoaded = false;
  }
  setToLoaded(){
    this.isLoaded = true
  }
}
