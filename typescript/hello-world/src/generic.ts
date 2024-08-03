// we should not use any as much as possible, because use any will lose type safty.

/**
 * generic class
 */
class KeyValuePair<K, V> {
  key: K;
  value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

let pair1 = new KeyValuePair<string, number>("key1", 1);
let pair2 = new KeyValuePair<string, string>("Mosh", "Teacher");

/**
 * generic function
 */
function wrapInArray<T>(value: T) {
  return [value];
}

let nums = wrapInArray(1);
let strs = wrapInArray("Mosh");
console.log(nums);
console.log(strs);

/**
 * generic method
 */
class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  }
}

const utils = new ArrayUtils();
let nums2 = utils.wrapInArray(100);
console.log(nums2);

/**
 * generic interface
 */
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
  price: number;
}

let result1 = fetch<User>("url_1");
let result2 = fetch<Product>("url_2");

/**
 * generic constraint
 */
function echo<T extends number | string>(value: T): T {
  return value;
}

echo(100);
echo("test");
// echo(false); error

function echo2<T extends { name: string }>(value: T): T {
  return value;
}
echo2({ age: 100, name: "Mosh" });

function echo3<T extends Product>(value: T): T {
  return value;
}
echo3({ title: "milk", price: 100 });

/**
 * Extending Generic Classes
 */
class Store<T> {
  protected _objects: T[] = []; // initialize directly at here

  add(obj: T): void {
    this._objects.push(obj);
  }

  // if T is Product
  // keyof T => title | price
  find(property: keyof T, value: unknown) {
    return this._objects.find((obj) => obj[property] === value);
  }
}

// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {
    console.log("compress " + this._objects);
  }
}

let store = new CompressibleStore<Product>();
store.add({ title: "apple", price: 88 });
store.add({ title: "orange", price: 99 });
store.compress();

// more specific generic type
class SearchableStore<T extends Product> extends Store<T> {}

// Fix the generic type parameter
class ProductStore extends Store<Product> {}

/**
 * for keyof operator
 */
store.find("title", "apple");
// store.find("name", "apple"); error Argument of type '"name"' is not assignable to parameter of type 'keyof Product'.

/**
 * type mapping, in keyof
 */
type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};


