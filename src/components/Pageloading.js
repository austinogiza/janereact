import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner radius={100} color={"#B97778"} stroke={5} visible={true} />
      </div>
    );
  }
}