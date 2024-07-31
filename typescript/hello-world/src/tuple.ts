// tuple is a kind of fixed length array

let user: [number, string] = [1, "Mosh"]; // exact 2 elements, nothing more or less
console.log(user[0]);
console.log(user[1]);

user.push("aaa"); // typescript complier is not going to complain here
console.log(user);
