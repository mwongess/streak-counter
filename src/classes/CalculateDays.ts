import { taskDate } from "../types/formInputs";

export class CalculateDays {
    constructor() {}

    public static calculateNoOfDays(taskDate: taskDate) {
        let currentDate = new Date().getTime();

        let dayAdded = new Date(taskDate).getTime();

        return Math.floor((currentDate - dayAdded) / (1000 * 3600 * 24));
    }
}