import React from 'react'

function StudentCard(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <p>Course: {props.course}</p>
        <p>Marks: {props.marks}</p>
    </div>
  );
}

export default StudentCard