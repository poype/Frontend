interface Calendar {
  name: string;
  addevent(): void;
  removeEnent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements CloudCalendar {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sync(): void {
    throw new Error("Method not implemented.");
  }

  addevent(): void {
    throw new Error("Method not implemented.");
  }

  removeEnent(): void {
    throw new Error("Method not implemented.");
  }
}
