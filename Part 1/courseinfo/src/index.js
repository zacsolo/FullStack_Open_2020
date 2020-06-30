import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
  return (
    <div>
      <p>{props.part}</p>
      <p>{props.exercises}</p>
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};
const Content = ({ parts }) => {
  console.log(parts);
  return parts.map((el) => (
    <Part key={el.name} part={el.name} exercises={el.exercises} />
  ));
};

const Total = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      <p>
        Number of exercises:{' '}
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
