import { taskDate, taskImage, taskName } from "../types/formInputs.js";

export interface FormInputs {
    taskName: taskName,
    taskImage: taskImage,
    taskDate: taskDate
}