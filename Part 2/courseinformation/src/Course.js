import React from 'react';

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  let sum = course.reduce((acc, curr) => acc + curr.exercises, 0);
  return <div>Total of {sum} courses</div>;
};

const Part = ({ name, ex }) => {
  return (
    <p>
      {name}: {ex}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.map((n) => {
        return <Part name={n.name} ex={n.exercises} key={n.id} />;
      })}
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.name}>
            <Header course={course} />
            <Content course={course.parts} />
            <Total course={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
