import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {withDiscount, totalCost} from '../utils'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


//Calculate the cost of cost of items in basket pre-discount

it ('calculates basket value at £100 pre-discount', () => {
  expect(totalCost([{price:100,counter:1}])).toBe(100);
})

it ('calculates basket value at £333 pre-discount', () => {
  expect(totalCost([{price:111,counter:3}])).toBe(333);
})

it ('calculates basket value at £0 pre-discount', () => {
  expect(totalCost([{price:0,counter:0}])).toBe(0);
})

it ('calculates basket value at £100 pre-discount', () => {
  expect(totalCost([{price:100,counter:5},{price:1446,counter:6}])).toBe(9176);
})

it ('calculates basket value at £100 pre-discount', () => {
  expect(totalCost([{price:100,counter:0},{price:1088,counter:6},{price:2567,counter:3}])).toBe(14229);
})

it ('calculates basket value at £100 pre-discount', () => {
  expect(totalCost([{price:3,counter:6546},{price:1088,counter:689},{price:2567,counter:3000}])).toBe(8470270);
})

//Calculate total after 'variable' % discount has been applied to a combination of values

it ('calculates basket value at £100', () => {
  expect(withDiscount(100).finalCost).toBe(99);
})

it ('calculates basket value at £3', () => {
  expect(withDiscount(3).finalCost).toBe(2.97);
})

it ('calculates basket value for £45', () => {
  expect(withDiscount(45).finalCost).toBe(44.55);
})

it ('calculates basket value for £59', () => {
  expect(withDiscount(177).finalCost).toBe(168.15);
})

it ('calculates basket value at £400', () => {
  expect(withDiscount(400).finalCost).toBe(380);
})

it ('calculates basket value for £459', () => {
  expect(withDiscount(459).finalCost).toBe(436.05);
})

it ('calculates basket value at £999', () => {
  expect(withDiscount(999).finalCost).toBe(899.10);
})

it ('calculates basket value at £622', () => {
  expect(withDiscount(622).finalCost).toBe(559.80);
})

it ('calculates basket value at £2559', () => {
  expect(withDiscount(2559).finalCost).toBe(2175.15);
})

it ('calculates basket value at £87677', () => {
  expect(withDiscount(87677).finalCost).toBe(74525.45);
})

it ('calculates basket value at £0', () => {
  expect(withDiscount(0).finalCost).toBe(0);
})

it ('calculates basket value at £0', () => {
  expect(withDiscount(0.00001).finalCost).toBe(0.0000099);
})

it ('calculates basket value at £0.1', () => {
  expect(withDiscount(0.1).finalCost).toBe(0.099);
})


// Test that the correct discount rate has been applied depending on the value passed to function

it ('calculates discount applied at 1%', () => {
  expect(withDiscount(45).discount).toBe(1);
})

it ('calculates discount applied at 1%', () => {
  expect(withDiscount(100).discount).toBe(1);
})

it ('calculates discount applied at 5%', () => {
  expect(withDiscount(101).discount).toBe(5);
})

it ('calculates discount applied at 5%', () => {
  expect(withDiscount(450).discount).toBe(5);
})

it ('calculates discount applied at 5%', () => {
  expect(withDiscount(500).discount).toBe(5);
})

it ('calculates discount applied at 10%', () => {
  expect(withDiscount(658.89).discount).toBe(10);
})

it ('calculates discount applied at 10%', () => {
  expect(withDiscount(999.99).discount).toBe(10);
})

it ('calculates discount applied at 15%', () => {
  expect(withDiscount(1000.01).discount).toBe(15);
})

it ('calculates discount applied at 15%', () => {
  expect(withDiscount(1246).discount).toBe(15);
})

it ('calculates discount applied at 15%', () => {
  expect(withDiscount(45787687).discount).toBe(15);
})
