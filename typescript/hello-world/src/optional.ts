

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

const customer = getCustomer(0);
console.log(customer?.birthday.getFullYear());


function getArray(flag: boolean): Customer[] | null {
  return flag ? [{ birthday: new Date() }] : null;
}

const arr = getArray(false);
console.log(arr?.[1]?.birthday);


let speed: number | null = null;

let ride = {
  currentSpeed: speed ?? 30
}

// Nullish coalescing operator
console.log(ride.currentSpeed);



function processEvents(): never {
  while (true) {
    console.log("process events...");
  }
}


processEvents();
// never means that the code after the function calling will never be executed.
console.log('Unreachable code');
