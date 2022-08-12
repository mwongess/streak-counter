import { formTaskName, formTaskImage, formTaskDate } from "./htmlElements.js";

export function clearForm() {
    formTaskName.value = '',
    formTaskImage.value = '',
    formTaskDate.value = ''

    return true;
}