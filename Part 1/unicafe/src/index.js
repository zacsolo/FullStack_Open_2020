import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;

  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / total) * 100;
  if (good === 0 && (neutral === 0) & (bad === 0)) {
    return <div>No Feedback Given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Statistic name='Good' value={good} />
          </tr>
          <tr>
            <Statistic name='Neutral' value={neutral} />
          </tr>
          <tr>
            <Statistic name='Bad' value={bad} />
          </tr>
          <tr>
            <Statistic name='All' value={total} />
          </tr>
          <tr>
            <Statistic name='Average' value={average} />
          </tr>
          <tr>
            <Statistic name='Positive' value={`${positive}%`} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Statistic = ({ name, value }) => {
  return (
    <>
      <td>{name}:</td>
      <td>{value}</td>
    </>
  );
};

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.name}</button>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <div style={{ display: 'flex' }}>
        <Button handleClick={() => setGood(good + 1)} name='Good' />
        <Button handleClick={() => setNeutral(neutral + 1)} name='Neutral' />
        <Button handleClick={() => setBad(bad + 1)} name='Bad' />
      </div>
      <h2>Statistics</h2>
      <Statistics feedback={{ good, neutral, bad }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
