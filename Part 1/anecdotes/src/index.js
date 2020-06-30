import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const MostVotes = (props) => {
  return (
    <div>
      <h1>Anecdote with the most votes</h1>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </div>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(2);
  const [score, setScore] = useState([0, 0, 0, 0, 0, 0]);

  const newAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const addOne = () => {
    const copy = [...score];
    copy.splice(selected, 1, copy[selected] + 1);
    setScore(copy);
  };

  const maxScore = Math.max(...score);
  let maxAnecdote = null;
  maxAnecdote = score.findIndex((item) => item === maxScore);
  console.log(maxAnecdote);

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <div>has {score[selected]} votes</div>
      <button onClick={newAnecdote}>Next Anecdote</button>
      <button onClick={addOne}>Add one</button>
      <MostVotes text={anecdotes[maxAnecdote]} votes={maxScore} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
