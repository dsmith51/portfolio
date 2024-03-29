import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Mountains from '../assets/Mountains.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${Mountains}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
    z-index: -2;
  }
  
  .overlay {
    background-color: #000;
    opacity: .4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container>
                <h1>Hello, I'm Daniel.</h1>
                <h3>I'm a full stack developer and a junior data scientist.</h3>
            </Container>
        </Jumbo>
    </Styles>
)