// A class is a blueprint for createing objects

class Account {
  readonly id: number;
  owner: string;
  private _balance: number; // by conversion, the prefix of private property is _
  nickname?: string; // nickname is optional, it doesn't have to appear in constructor

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid Amount");
    }

    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid value");
    }
    this._balance = value;
  }
}

let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);

console.log(typeof account); // object

console.log(account instanceof Account); // true, so instead of using typeof, we can use instanceof for custom class object

// account.id = 100;  readOnly property can not be assigned a new value

// ACCESS MODIFIERS
// public private protected,
// when we declare properties, all properties are public by default

// set and get the value of balance through getter and setter.
account.balance = 9999;
console.log(account.balance);

// Index Signature
// Creating properties dynamicly, just like JavaScript. and can get type checking
class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "John";
// seats.A3 = 1;   error

// static properties belong to class, not object
class Ride {
  // use private here is to prevent the value of variable from being modified elsewhere.
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log("active rides is: " + Ride.activeRides);
