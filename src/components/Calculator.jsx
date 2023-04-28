import { React, useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({});
  /* const [result, setResult] = useState(
    value.next ? setResult(value.next) : value.total ? setResult(value.total) : 0
    ); */
  //  REFACTOR: each Button to array with value, color(classname), function? columns?
  //  and use map to render each button (re-design structure)

  let result;
  if (value.next) {
    result = value.next;
  } else if (value.total) {
    result = value.total;
  } else result = 0;

  return (
    <>
      <section id="calculator">
        <table>
          <thead>
            <tr className="result">
              <th>{result}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="buttons-row">
              <td>
                <Button
                  value="AC"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="+/-"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="%"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="÷"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-row">
              <td>
                <Button
                  value="7"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="8"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="9"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="x"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-row">
              <td>
                <Button
                  value="4"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="5"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="6"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="-"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-row">
              <td>
                <Button
                  value="1"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="2"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="3"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="+"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-last-row">
              <td>
                <Button
                  value="0"
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="."
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                />
              </td>
              <td>
                <Button
                  value="="
                  onClick={(e) => setValue(calculate(value, e.target.value))}
                  className="orange"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Calculator;
