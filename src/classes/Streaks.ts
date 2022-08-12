import { Streak } from "../interfaces/Streak.js";
import { taskDate, taskImage, taskName } from "../types/formInputs.js";
import { RenderStreak } from "./RenderStreak.js";

export class Streaks {
  private streaks: Streak[] = [];

  constructor() {}

  public addStreak(
    taskName: taskName,
    taskImage: taskImage,
    taskDate: taskDate
  ) {
    let streak: Streak = {
      id: Date.now(),
      taskName,
      taskImage,
      taskDate,
    };

    this.streaks.push(streak);

    let renderStreak = new RenderStreak();

    // Render to DOM
    renderStreak.renderStreakDom(streak);
  }

  // Return streak
  public getStreak(streakId: number) {
    // alert(id);
    // alert(this.streaks[0].id);

    this.streaks?.forEach((streak) => {
      if (streak.id == streakId) {
        // alert(streak.id);

        let renderStreak = new RenderStreak();

        renderStreak.renderStreakModal(streak);
      }
    });
  }
  
  // delete streak
  public deleteStreak(streakId: number) {
    // alert(streakId);

    this.streaks?.forEach((streak) => {
      if (streak.id == streakId) {
        // alert(streakId);

        let streakIndex = this.streaks.indexOf(streak)

        this.streaks.splice(streakIndex, 1)
      }
    });
  }
}
