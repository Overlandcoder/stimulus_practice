import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["hideable"]

  initialize() {
    console.log("test")
  }

  toggleTargets() {
    this.hideableTargets.forEach((element) => {
      element.hidden = !element.hidden
    })
  }
}
