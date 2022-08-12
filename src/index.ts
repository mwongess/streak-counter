import {
  activitySection,
  addBtn,
  closeBtn,
  submitBtn,
} from "./util/htmlElements.js";
// Events class
import { Events } from "./classes/EventHandler.js";
// Instanciate class
let event = new Events();

// Open form
addBtn?.addEventListener("click", event.toogleAddBtn);
// Close form
closeBtn?.addEventListener("click", event.toogleCloseBtn);

// Add eventlisteners to HTMLCollection
// let element: Element;
// for(element of activitySection) {
//     element.addEventListener("click", () => {
//     modal.style.display = "flex";
// })
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = event.closeModal;

// closeModal.addEventListener("click", event.closeModal)

// Format date
// let today: Date | string = new Date();
// let dd = String(today.getDate()).padStart(2, '0');
// let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// let yyyy = today.getFullYear();
// today = mm + '/' + dd + '/' + yyyy;

// Form validation
submitBtn?.addEventListener("click", event.validateFormInputs);
