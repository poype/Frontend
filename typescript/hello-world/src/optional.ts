

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

