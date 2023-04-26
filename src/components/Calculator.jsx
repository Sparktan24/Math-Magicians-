import { React, useState } from 'react';
import Button from './Button';
//  import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <section id="calculator">
        <table>
          <thead>
            <tr className="result">
              <th>{value}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="buttons-row">
              <td>
                <Button value="AC" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="+/-" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="%" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button
                  value="÷"
                  onClick={(e) => setValue(e.target.value)}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-row">
              <td>
                <Button value="7" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="8" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="9" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button
                  value="x"
                  onClick={(e) => setValue(e.target.value)}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-row">
              <td>
                <Button value="4" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="5" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="6" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button
                  value="-"
                  onClick={(e) => setValue(e.target.value)}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-row">
              <td>
                <Button value="1" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="2" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="3" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                {/* <button type="button" className="orange" value="+"></button> */}
                <Button
                  value="+"
                  onClick={(e) => setValue(e.target.value)}
                  className="orange"
                />
              </td>
            </tr>
            <tr className="buttons-last-row">
              <td>
                <Button value="0" onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button value="." onClick={(e) => setValue(e.target.value)} />
              </td>
              <td>
                <Button
                  value="="
                  onClick={(e) => setValue(e.target.value)}
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
