import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import withDiscount from '../utils'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//Calculate total after 'variable' % discount has been applied to a combination of values

it ('calculates one item at £100', () => {
  expect(withDiscount(100).finalCost).toBe(99);
})

it ('calculates one item at £3', () => {
  expect(withDiscount(3).finalCost).toBe(2.97);
})

it ('calculates 15 items for £45', () => {
  expect(withDiscount(45).finalCost).toBe(44.55);
})

it ('calculates 3 items for £59', () => {
  expect(withDiscount(177).finalCost).toBe(168.15);
})

it ('calculates 1 item at £400', () => {
  expect(withDiscount(400).finalCost).toBe(380);
})

it ('calculates 3 items for £459', () => {
  expect(withDiscount(459).finalCost).toBe(436.05);
})

it ('calculates 1 item at £999', () => {
  expect(withDiscount(999).finalCost).toBe(899.10);
})

it ('calculates 2 item for £622', () => {
  expect(withDiscount(622).finalCost).toBe(559.80);
})

it ('calculates 1 item at £2559', () => {
  expect(withDiscount(2559).finalCost).toBe(2175.15);
})

it ('calculates 5 item at £87677', () => {
  expect(withDiscount(87677).finalCost).toBe(74525.45);
})


// Test that the correct discount rate has been applied depending on the value passed to function

it ('calculates % discount applied 1%', () => {
  expect(withDiscount(45).discount).toBe(1);
})

it ('calculates % discount applied 1%', () => {
  expect(withDiscount(100).discount).toBe(1);
})

it ('calculates % discount applied 5%', () => {
  expect(withDiscount(101).discount).toBe(5);
})

it ('calculates % discount applied 5%', () => {
  expect(withDiscount(450).discount).toBe(5);
})

it ('calculates % discount applied 5%', () => {
  expect(withDiscount(500).discount).toBe(5);
})

it ('calculates % discount applied 10%', () => {
  expect(withDiscount(658.89).discount).toBe(10);
})

it ('calculates % discount applied 10%', () => {
  expect(withDiscount(999.99).discount).toBe(10);
})

it ('calculates % discount applied 15%', () => {
  expect(withDiscount(1000.01).discount).toBe(15);
})

it ('calculates % discount applied 15%', () => {
  expect(withDiscount(1246).discount).toBe(15);
})

it ('calculates % discount applied 15%', () => {
  expect(withDiscount(45787687).discount).toBe(15);
})
