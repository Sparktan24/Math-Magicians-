import React from 'react';

const Calculator = () => (
  <>
    <section id="calculator">
      <table>
        <thead>
          <tr className="result">
            <th>0</th>
          </tr>
        </thead>
        <tbody>
          <tr className="buttons-row">
            <td>
              <button type="button">AC</button>
            </td>
            <td>
              <button type="button">+/-</button>
            </td>
            <td>
              <button type="button">%</button>
            </td>
            <td>
              <button type="button" className="orange">
                ÷
              </button>
            </td>
          </tr>
          <tr className="buttons-row">
            <td>
              <button type="button">7</button>
            </td>
            <td>
              <button type="button">8</button>
            </td>
            <td>
              <button type="button">9</button>
            </td>
            <td>
              <button type="button" className="orange">
                x
              </button>
            </td>
          </tr>
          <tr className="buttons-row">
            <td>
              <button type="button">4</button>
            </td>
            <td>
              <button type="button">5</button>
            </td>
            <td>
              <button type="button">6</button>
            </td>
            <td>
              <button type="button" className="orange">
                -
              </button>
            </td>
          </tr>
          <tr className="buttons-row">
            <td>
              <button type="button">1</button>
            </td>
            <td>
              <button type="button">2</button>
            </td>
            <td>
              <button type="button">3</button>
            </td>
            <td>
              <button type="button" className="orange">
                +
              </button>
            </td>
          </tr>
          <tr className="buttons-last-row">
            <td>
              <button type="button">0</button>
            </td>
            <td>
              <button type="button">.</button>
            </td>
            <td>
              <button type="button" className="orange">
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </>
);

export default Calculator;
