import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap'
import '../styles/App.css'

export default class BasketTable extends Component {
  render() {
    const { id, price, name, addItem, deleteItem, qty, total } = this.props
    return (
      <tr id={id}>
        <td>{name}</td>
        <td>{qty}</td>
        <td>{price.toFixed(2)}</td>
        <td><Button bsStyle="danger" onClick={deleteItem}>-</Button></td>
        <td><Button bsStyle="primary" onClick={addItem}>+</Button></td>
        <td>{total.toFixed(2)}</td>
      </tr>
      )
    }
  }

  BasketTable.propTypes = {
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      addItem: PropTypes.func.isRequired,
      deleteItem: PropTypes.func.isRequired,
      total: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired,
  }
