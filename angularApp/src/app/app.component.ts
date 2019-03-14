import { Component } from '@angular/core';
import { HelloComponent} from './hello/hello.component';

function log(target, name, descriptor) {
 //target: target function or class to decorate
 //name: name function or class
  console.log(target, name, descriptor);//To see target, name and descriptor in cosole
  // we got in console -> target: {aSimpleMethod: ƒ, constructor: ƒ} 
  //name: "aSimpleMethod" 
  //descriptor: {value: ƒ, writable: true, enumerable: true, configurable: true}

  //To manipulate the target function -> descriptor.value!
  //Then:
  //1. Store the original function in a variable:
  const originalFunction = descriptor.value;
  //2. Do some manipulations with descriptor.value:
  //2.1: Example
  //descriptor.value = function() {
  //  console.log("This function was hacked");
  //}
  //2.2: Alternative of up example 2.1:
  //originalFunction();
  //we got Hi there twice!!! one for originalFunction() and other for the return descriptor!!!
  //2.3: Exp:

  //3. Return descriptor:
  return descriptor;
}

//Example decoration with parameters
function decoMathe(target, name, descriptor) {
  //const originalFunction = descriptor.value;
  
  descriptor.value = function(a, c){
    console.log("Arguments that we passed to deco function: ", a, c);
    //const result = originalFunction.apply(this, args);
    const result = a;
    console.log("Result of function hacked by decorator: ", result);

    return descriptor;
  }

}

//Example decorator @Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';

//Declare the function in constructor:
  constructor() {
    this.aSimpleMethod();
  }

  @log
  aSimpleMethod() {
    console.log("Hi there");
    console.log("This is generate by constructor", this.aSimpleMultiplication(2,2));
  }

  //Example decoration with parameters
  @decoMathe
  aSimpleMultiplication(a, c) {
    return a*c;
  }
}
