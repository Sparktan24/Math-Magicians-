import React from 'react';

const Calculator = () => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>0</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
            <td>÷</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td>0</td>
            <td>.</td>
            <td>=</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Calculator;
