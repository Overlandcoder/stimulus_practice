import ApplicationController from './application_controller'

export default class extends ApplicationController {
  static targets = ["hideable"]

  toggle() {
    this.testTargets.forEach(element => {
      element.hidden = !element.hidden
    })
  }
}
