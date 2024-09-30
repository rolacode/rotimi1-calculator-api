const express = require('express');

// @desc POST Performing calculations
// @route POST /v1/calculator
// @access Public
const calculatorApiHandler = async (req, res) => {
  let { a, b, operator } = req.body;

  // List of valid operations
  const oprt = ['add', 'sub', 'mult', 'divi'];

  // Validate input types
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ message: 'Invalid input: a and b must be numbers' });
  }

  // Validate operator
  if (!oprt.includes(operator)) {
    return res.status(400).json({ message: 'Invalid operator, choose any of "add, sub, mult, divi"' });
  }

  let result;
  switch (operator) {
    case 'add':
      result = a + b;
      break;
    case 'sub':
      result = a - b;
      break;
    case 'mult':
      result = a * b;
      break;
    case 'divi':
      if (b === 0) {
        return res.status(400).json({ message: 'Division by zero is not allowed' });
      }
      result = a / b;
      break;
  }

  // Respond with result
  res.json({ result });
};

module.exports = {
  calculatorApiHandler
};
