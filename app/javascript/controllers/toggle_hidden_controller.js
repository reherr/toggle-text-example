import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-hidden"
export default class extends Controller {
  static targets = ["text"]

  // gets called when a data-action occurs
  toggle() {
    // accessing the "text" target and toggling its hidden class.
    this.textTarget.classList.toggle('hidden');
  }
}
