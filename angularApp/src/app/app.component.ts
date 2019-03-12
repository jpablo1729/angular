import { Component } from '@angular/core';

/*
Decorators:

Class decorators, e.g. @Component and @NgModule
Property decorators for properties inside classes, e.g. @Input and @Output
Method decorators for methods inside classes, e.g. @HostListener
Parameter decorators for parameters inside class constructors, e.g. @Inject

# Class Decorators
Angular offers us a few class decorators. These are the top-level decorators 
that we use to express intent for classes. They allow us to tell Angular that 
a particular class is a component, or module, for example. And the decorator 
allows us to define this intent without having to actually put any code inside 
the class.

# Property Decorators
These are probably the second most common decorators that you’ll come across. 
They allow us to decorate specific properties within our classes - an extremely 
powerful mechanism.

Let’s take a look at @Input(). Imagine that we have a property within our class 
that we want to be an input binding.

Without decorators, we’d have to define this property in our class anyway for 
TypeScript to know about it, and then somewhere else tell Angular that we’ve 
got a property that we want to be an input.

With decorators, we can simply put the @Input() decorator above the property 
- which Angular’s compiler will automatically create an input binding from the 
property name and link them.

Example:

import { Component, Input } from '@angular/core';

@Component({
  selector: 'example-component',
  template: '<div>Woo a component!</div>'
})
export class ExampleComponent {
  @Input()
  exampleProperty: string;
}

We’d then pass the input binding via a component property binding:

<example-component
  [exampleProperty]="exampleData">
</example-component>

before:

In AngularJS 1.x (I’m going to use TypeScript here also, just to declare a property 
on a class), we had a different mechanism using scope or bindToController with Directives, 
and bindings within the new component method:

const exampleComponent = {
  bindings: {
    exampleProperty: '<',
  },
  template: `
    <div>Woo a component!</div>
  `,
  controller: class ExampleComponent {
    exampleProperty: string;
    $onInit() {
      // access this.exampleProperty
    }
  },
};

angular.module('app').component('exampleComponent', exampleComponent);

# Method Decorators
Method decorators are very similar to property decorators but are used for methods instead. 
This let’s us decorate specific methods within our class with functionality. A good example 
of this is @HostListener. This allows us to tell Angular that when an event on our host 
happens, we want the decorated method to be called with the event.

Exp:

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'example-component',
  template: '<div>Woo a component!</div>'
})
export class ExampleComponent {
  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    // clicked, `event` available
  }
}

# Creating a decorator
It makes things a lot easier if we understand what a decorator is actually 
doing before we look into how Angular uses them under the hood. To do this, 
we can create a quick example decorator.

# Decorator functions
Decorators are actually just functions, it’s as simple as that, and are 
called with whatever they are decorating. A method decorator will be called 
with the value of the method it’s decorating, and a class decorator will be 
called with the class to be decorated.

Let’s quickly make a decorator that we can use on a class to demonstrate 
this a little further. This decorator is just going to simply log the class 
to the console:

function Console(target) {
  console.log('Our decorated class', target);
}

Here, we have created Console (using the uppercase naming convention 
Angular uses) and are specifying a single argument called target. 
The target will in fact be the class that we decorate, which means we 
can now decorate any class with our decorator and see it outputted in the console:

@Console
class ExampleClass {
  constructor() {
    console.log('Yo!');
  }
}

# Passing data to a decorator
When we use the decorators in Angular we pass in some form of configuration, 
specific to the decorator.

For example, when we use @Component we pass through an object, and with 
@HostListener we pass through a string as the first argument (the event name, 
such as 'click') and optionally an array of strings for further variables (such as $event) 
to be passed through to the decorated method.

Let’s change our code above to execute the Console function with a value 
to match how we use the Angular decorators.

@Console('Hey!')
class ExampleClass {
  constructor() {
    console.log('Yo!');
  }
}

If we ran this code now, we’d only get 'Hey!' outputted to the console. 
That’s because our decorator hasn’t returned a function for the class to 
be given to. The output of @Console('Hey!') is void.

We would need to adapt our Console decorator to return a function closure 
for the class to be given to. That way we can both receive a value from 
the decorator (in our case, the string Hey!) and also the class that it’s applied to:

function Console(message) {
  // access the "metadata" message
  console.log(message);
  // return a function closure, which
  // is passed the class as `target`
  return function(target) {
    console.log('Our decorated class', target);
  };
}

@Console('Hey!')
class ExampleClass {
  constructor() {
    console.log('Yo!');
  }
}

// console output: 'Hey!'
// console output: 'Our decorated class', class ExampleClass{}...

This is the basis for how the decorators in Angular work. They first of all take a 
configuration value and then receive the class/method/property to apply the decoration 
to. Now that we have a brief understanding of what a decorator actually does, 
we’re going to walk through how Angular creates and uses it’s own decorators.

*/

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
