# Lab 01 - Node Ecosystem

 [![Build Status](https://travis-ci.com/justeban/01-node-ecosystem.svg?branch=lab-justin)](https://travis-ci.com/justeban/01-node-ecosystem)

## Overview

I created a couple of modules that focus on making that inital connection from module to server via an interface. I worked to produce a module using Test Driven Development that uses a greet function, sum function and a subtract function. I also worked with a ```.travis.yml``` in order to have a successfull build.

## Module Functions

*Greet Module*

  - In the Greet Module, there is a greet function that is expected to pass in one parameter, that is a string, in order to greet a person by name. e.g. ```greet('john')``` expected result ```'hello john'```.

  - If there is any other type of input other than a string the function returns ```'null'```.

*Arithmetic Function*

  - A simple module that contains two simple math functions, sum and subtract. 

  - Each of these function take in two parameters that are numbers. 
    - ```sum(2,3)``` expected output ```5``` 
    - ```sub(5,2)``` expected output ```3```
  - Each function is expecting two numbers and if they recieve other data types the functions will return ```'null'```.
