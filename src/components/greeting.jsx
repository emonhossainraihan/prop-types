import React from "react";
import PropTypes from "prop-types";

const Greeting = props => {
  const { name, strNum, bool, ary, aryOfObj } = props;
  return (
    <div>
      <div>{bool ? <h1>Hello, {name}</h1> : <h1>Hello, Guest</h1>}</div>
      <h2>Message: {strNum}</h2>
      <div>
        <h1>Array</h1>
        {ary.map(val => {
          return <li key={val}>{val}</li>;
        })}
      </div>
      <div>
        <h1>Array of Object </h1>
        {aryOfObj.map(val => {
          return (
            <li key={val.name}>
              <h4>
                Name:{val.name} Age:{val.age}
              </h4>
            </li>
          );
        })}
      </div>
      <div>{props.children}</div>
    </div>
  );
};

//propTypes refer method
Greeting.propTypes = {
  name: PropTypes.string.isRequired, //PropTypes refer to library
  bool: PropTypes.bool,
  strNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ary: PropTypes.arrayOf(PropTypes.number),
  aryOfObj: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    })
  ),
  children: PropTypes.element
};

export default Greeting;
