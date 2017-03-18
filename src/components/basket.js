import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import '../styles/App.css'
import BasketTable from '../common/basketTable'
import { Table } from 'react-bootstrap'
import { addItem, deleteItem } from '../actions'
import withDiscount from '../utils'

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

  totalCost() {
    return this.props.basket.reduce((total, item) => total + item.price * item.counter : total, 0)
  }

  componentDidMount() {

  }

  render() {
    const basketNew = this.props.basket.filter(item => item.counter > 0)
    //console.log(this.props.basket)
    return (
      <div>
        <Table responsive>
          {basketNew.length > 0 ? <thead>
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
          {basketNew.map((item, index) => {
            return(
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
          } :
          null)
          }
        {basketNew.length > 0?
          <tr>
            <td><strong>Sub Total</strong></td>
            <td><strong>£{this.totalCost().toFixed(2)}</strong></td>
            <td><strong>Discount</strong></td>
            <td><strong>{withDiscount(this.totalCost()).discount}%</strong></td>
            <td><strong>Total</strong></td>
            <td><strong>£{(withDiscount(this.totalCost()).finalCost).toFixed(2)}</strong></td>
          </tr>
        : <tr><td>YOUR SHOPPING BASKET IS EMPTY</td></tr>}
        </tbody></Table>
        </div>
    )
  }
}

Basket.propTypes = {
    basket: PropTypes.array.isRequired,
}

function mapStateToProps(state){
  return {
    basket: state.bag,
  }
}

function actions(dispatch) {
  return {
    addItem: (item) => dispatch(addItem(item)),
    deleteItem: (uid) => dispatch(deleteItem(uid)),
  }
}

export default connect(mapStateToProps, actions)(Basket)
