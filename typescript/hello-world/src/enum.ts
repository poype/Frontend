enum Size {
  Small,
  Medium,
  Large,
}

// by default, the actual value of each field in Enum is 0, 1, 2, 3 ....
// But you can give the specific value to each field of Enum

let mySize: Size = Size.Medium;
console.log(mySize); // 1

enum Season {
  Spring = 5,
  Summer,
  Fall,
  Winter,
}

let mySeason: Season = Season.Summer;
console.log(mySeason); // 6

enum Degree {
  Junior = "L4",
  Senior = "L5",
  Staff = "L6",
}

let myDegree: Degree = Degree.Senior;
console.log(myDegree); // L5
