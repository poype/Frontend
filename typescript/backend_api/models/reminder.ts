export default class Reminder {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;

  constructor(title: string, description: string) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.isComplete = false;
  }
}
