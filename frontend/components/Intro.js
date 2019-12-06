import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledIntro = styled.div`
  .modal-content {
    .modal-body {
      .modal-img {
        margin-top: -85px;
        width: 33%;
        border: 5px solid white;
        border-radius: 50%;
        padding: 5px;
        background: #6c757d;
      }

      .warning {
        color: rgb(114, 31, 31);
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;

class Intromessage extends Component {
  handleClose = () => {
    this.props.handlemessage(false);
  };

  render() {
    return (
      <StyledIntro>
        <Modal
          className='fade text-center'
          show={this.props.showIntroMessage}
          size='md'
          centered
        >
          <Modal.Body>
            <img src='/logo.png' className='modal-img' alt='logo' />
            <h4 aria-labelledby='Welcom to Custom Pizza Builder'>
              Welcome to Custom Pizza Builder
            </h4>
            <p>
              Here you can choose your own toppings, from a variant of
              ingredients. After you are finnish designing your Pizza, click on
              Rating, to bake your Pizza and get your rating.
            </p>
            <p className='warning'>this is only a desktop demo</p>
            <Button variant='secondary' onClick={this.handleClose}>
              Got it
            </Button>
          </Modal.Body>
        </Modal>
      </StyledIntro>
    );
  }
}

export default Intromessage;
