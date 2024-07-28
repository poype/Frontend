const _ = require("underscore");
/**
 * require function find module order:
 * 1. core module. 
 * 2. file or folder in current project.
 * 3. exist in node_modules folder
 */

const arr = [1, 2, 3, 4];

console.log(_.contains(arr, 3));
console.log(_.contains(arr, 5));

