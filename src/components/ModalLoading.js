import Spinner from 'react-spinner-material';
import React, { Component } from 'react';
import styled from 'styled-components';

export default class Example extends Component {
  render() {
  return (
      <div>
      <Background>
      <Spinner radius={100} color={"#B97778"} stroke={5} visible={true} />
        </Background>
      </div>
    );
  }
}

const Background = styled.div`
position: fixed;
height: 100%;
width: 100%;
top: 50%;
left: 50%;
z-index: 100;
transform: translate(-50%,-50%);
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
background: rgba(0,0,0,0.8);
`
