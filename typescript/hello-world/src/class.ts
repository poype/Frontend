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
