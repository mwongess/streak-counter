import {addBtn, closeBtn, phoneImageSection,formSection,modal,formTaskDate,formTaskImage,formTaskName,errorMessage} from "../util/htmlElements.js"

// Interfaces
import { FormInputs } from "../interfaces/FormInput.js"
import { Streaks } from "./Streaks.js";
import { clearForm } from "../util/clearForm.js";

let streak = new Streaks();

export class Events {
    // Toggle add button
    toogleAddBtn(): boolean {
        addBtn.style.display = "none";
        closeBtn.style.display = "block";

        phoneImageSection.style.display = "none";
        formSection.style.display = "flex";

        return true
    }

    // Toggle close button
    toogleCloseBtn() {
        addBtn.style.display = "block";
        closeBtn.style.display = "none";

        phoneImageSection.style.display = "flex";
        formSection.style.display = "none";
    }

    // Close modal
    closeModal(event: Event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Close modal with button event
    closeModalBtn() {
        return modal.style.display = "none";
    }

    // Validate form inputs
    validateFormInputs(e: Event) {
        e.preventDefault()

        let task: FormInputs = {
            taskName:  formTaskName.value,
            taskImage: formTaskImage.value,
            taskDate: formTaskDate.value,
        }

        if(!task.taskName || !task.taskImage || !task.taskDate) {

            errorMessage.style.display = "block"

            setTimeout(() => {
                errorMessage.style.display = "none"
            }, 5000)

            return false;
        }

        // let streak = new Streaks();

        streak.addStreak(task.taskName, task.taskImage, task.taskDate);

        clearForm();
    }

    // Display modal
    displayModal(e: Event | any) {
        let activityId: number = e.currentTarget.id;

        streak.getStreak(activityId);
    }

    // delete activity
    deleteStreak(e: Event | any) {
        let activityId: number = e.currentTarget.parentElement.parentElement.id;

        e.currentTarget.parentElement.parentElement.parentElement.style.display = "none";

        streak.deleteStreak(activityId);

        document.getElementById(`${activityId}`)?.remove();
    }
}