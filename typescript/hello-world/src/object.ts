let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => console.log(date),
};

employee.retire(new Date());

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 2,
  name: "Marco",
  retire: (date: Date) => console.log(date),
};

console.log(employee2.id);
console.log(employee2.name);
employee2.retire(new Date())
