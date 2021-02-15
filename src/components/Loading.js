import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner radius={30} color={"#fff"} stroke={2} visible={true} />
      </div>
    );
  }
}