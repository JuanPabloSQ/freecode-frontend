import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const Key = ({ display, value, handler, id, additionalClass = '' }) => (
  <Button variant="contained" id={id} onClick={() => handler(value)} className={`key ${additionalClass}`}>
    {display}
  </Button>
);

const Calculator = () => {
  const [output, setOutput] = useState(0);
  const [expression, setExpression] = useState('');
  const [display, setDisplay] = useState({ currentDisplay: '0', previousExpression: '' });

  const operatorRegex = /[-+/*]/;
  const numericRegex = /[0-9]/;

  const extractLastNumber = (str) => {
    let currentNumber = str;
    let previousNumber = str;
    let currentDisplay = str;
    const allOperatorMatch = str.match(/[-+/*]/g);
    if (allOperatorMatch) {
      const lastOperator = allOperatorMatch[allOperatorMatch.length - 1];
      const lastOperatorIndex = str.lastIndexOf(lastOperator);
      currentNumber = str.slice(lastOperatorIndex + 1);
      previousNumber = str.slice(0, lastOperatorIndex);
      currentDisplay = str.slice(lastOperatorIndex);
    } else {
      previousNumber = '';
    }
    return { currentNumber, previousNumber, currentDisplay };
  };

  const updateExpression = (str) => {
    if (/^0+$/.test(str)) str = '';
    if (str) {
      const { currentDisplay, previousNumber } = extractLastNumber(str);
      setDisplay({ currentDisplay: currentDisplay.toString(), previousExpression: previousNumber });
    } else {
      setDisplay({ currentDisplay: '0', previousExpression: '' });
    }
    setExpression(str);
  };

  const removeLastChar = (str) => {
    return str.slice(0, str.length - 1);
  };

  const handleOperator = (value) => {
    if (expression.length === 0) {
      updateExpression('0' + value);
      return;
    }
    const lastChar = expression[expression.length - 1];
    if (numericRegex.test(lastChar)) {
      updateExpression(expression + value);
    } else if (lastChar === '.') {
      updateExpression(expression + '0' + value);
    } else if (operatorRegex.test(lastChar)) {
      let str = expression.slice();
      if (/[-+/*]{2}/.test(str)) {
        str = removeLastChar(removeLastChar(str)) + value;
      } else {
        if (value === '-') {
          str += value;
        } else {
          str = removeLastChar(str) + value;
        }
      }
      updateExpression(str);
    }
  };

  const handleDecimal = () => {
    let currentNumber = extractLastNumber(expression).currentNumber;

    if (!(/\./.test(currentNumber))) {
      updateExpression(expression + '.');
    }
  };

  const handleClick = (value) => {
    if (operatorRegex.test(value)) {
      handleOperator(value);
    } else if (numericRegex.test(value)) {
      updateExpression(expression + value);
    } else if (value === '.') {
      handleDecimal();
    } else if (value === 'AC') {
      updateExpression('');
      setOutput(0);
    } else if (value === 'C') {
      if (expression.length < 2) {
        updateExpression('');
      } else {
        updateExpression(expression.slice(0, -1));
      }
    } else if (value === '=') {
      try {
        const str = expression.replace(/([+-/*])(-)/g, '$1 $2');
        const ans = Math.round(10000000 * eval(str)) / 10000000;
        console.log(expression, ' = ', ans);
        setOutput(ans || 0);
        updateExpression((ans || '').toString());
      } catch (exception) {
        setOutput('Error');
        setTimeout(() => setOutput(0), 1000);
      }
    }
  };

  const keys = [
    ['C', 'AC', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Calculator
      </Typography>
      <Box my={4} border={1} borderColor="white" borderRadius={2} p={2} maxWidth={320} margin="auto">
        <Box className="wrapper">
          <Box className="calc">
            <Box className="screen">
              <Typography variant="h5" className="expression">
                {display.previousExpression}
              </Typography>
              <Typography variant="h4" id="display" className="current-display">
                {display.currentDisplay}
              </Typography>
              <Typography variant="h5" className="output">
                {output}
              </Typography>
            </Box>
            <Box className="keys">
              {keys.map((row, rowIndex) => (
                <Grid container key={rowIndex} spacing={1}>
                  {row.map((key, colIndex) => (
                    <Grid item key={colIndex}>
                      <Key
                        display={key}
                        value={key}
                        handler={handleClick}
                        additionalClass={['C', 'AC', '='].includes(key) ? 'additional' : 'numeric'}
                        id={key}
                      />
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Calculator;
