import React from 'react';
import './Person.css';

const person = (props) => {

    const style = {
        cursor: 'pointer'
      }

    return (
        <div className="Person">
            <p style={style} onClick={props.click}>{props.name} - {props.rank} {props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;