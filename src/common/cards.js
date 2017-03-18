import React, { Component, PropTypes } from 'react';
import { Button, Col, Thumbnail } from 'react-bootstrap'
import '../styles/App.css'


export default class Cards extends Component {

  render() {
    const { id, price, name, onAdd, onDelete, className, qty } = this.props
    return(
      <Col xs={6} md={4} className={className}>
        <Thumbnail src={require('../assets/shoppingcart.png')}>
          <h3>{name}</h3>
          <p>{id}</p>
          <p>Quantity in basket - {qty}</p>
          <p>
            £{price}<br/>
          <Button bsStyle="primary" onClick={onAdd}>Buy</Button>
            <span style={{padding:'70px'}}>{qty > 0 ?
                <Button bsStyle="danger" onClick={onDelete}>Delete</Button> :
                null
              }
            </span>
          </p>
        </Thumbnail>
      </Col>
      )
    }
  }

  Cards.propTypes = {
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      onAdd: PropTypes.func.isRequired,
      onDelete: PropTypes.func.isRequired,
      className: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
  }
