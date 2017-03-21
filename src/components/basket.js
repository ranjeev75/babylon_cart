import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import '../styles/App.css'
import BasketTable from '../common/basketTable'
import { Table } from 'react-bootstrap'
import { addItem, deleteItem } from '../actions'
import {withDiscount, totalCost}  from '../utils'

class Basket extends Component {
  //constructor(props) {
    //super(props)
  //}

  addItem(item) {
    this.props.addItem(item)
  }

  deleteItem(id) {
    this.props.deleteItem(id)
  }

  componentDidMount() {

  }

  render() {
    const cost = totalCost(this.props.basket)
    //console.log(this.props.basket)
    return (
      <div>
        <Table responsive>
          {this.props.basket.length > 0 ? <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price (£)</th>
              <th>Delete</th>
              <th>Add</th>
              <th>Total</th>
            </tr>
          </thead>
          :
          null}
          <tbody>
          {this.props.basket.map((item, index) => {
            return (
              <BasketTable
                key={item.id}
                id={item.id}
                name={item.name}
                qty={item.counter}
                price={item.price}
                addItem={() => this.addItem(item)}
                deleteItem={() => this.deleteItem(item.id)}
                total={item.counter * item.price} />
            )
          } : null)
        }
        {this.props.basket.length > 0 ?
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>Sub Total</strong></td>
            <td><strong>£{cost.toFixed(2)}</strong></td>
          </tr>
        : null}
        {this.props.basket.length > 0 ?
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>Discount</strong></td>
            <td><strong>{withDiscount(cost).discount}%</strong></td>
          </tr>
        : null}
        {this.props.basket.length > 0 ?
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>Total</strong></td>
            <td><strong>£{(withDiscount(cost).finalCost).toFixed(2)}</strong></td>
          </tr>
        : <tr><td><strong>YOUR SHOPPING BASKET IS EMPTY</strong></td></tr>}
        </tbody></Table>
        </div>
    )
  }
}

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    basket: state.bag,
  }
}

function actions(dispatch) {
  return {
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (id) => dispatch(deleteItem(id)),
  }
}

export default connect(mapStateToProps, actions)(Basket)
