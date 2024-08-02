// A class is a blueprint for createing objects

class Account {
  readonly id: number;
  owner: string;
  private _balance: number;  // by conversion, the prefix of private property is _
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

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.getBalance());

console.log(typeof account); // object

console.log(account instanceof Account); // true, so instead of using typeof, we can use instanceof for custom class object

// account.id = 100;  readOnly property can not be assigned a new value

// ACCESS MODIFIERS
// public private protected,
// when we declare properties, all properties are public by default

