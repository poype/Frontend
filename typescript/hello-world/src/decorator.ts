// decorator is a just function that be called by javascript runntime.
// parameter represent the target class
function LogDecorator(targetClazz: Function) {
  console.log(targetClazz);
}

// Decorator factory
function ParameterDecorator(value: number) {
  return (targetClazz: Function) => {
    console.log(`Parameter Decorator, value is ${value}`);
    targetClazz.prototype.value = value;
  };
}

@LogDecorator
@ParameterDecorator(99)
class TestComponent {}

let t = new TestComponent();
console.log(JSON.stringify(t));

