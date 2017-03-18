import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import '../styles/App.css'
import products from '../../products.json'
import Cards from '../common/cards'
import { Grid, Row } from 'react-bootstrap'
import { addItem, deleteItem } from '../actions'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      home: []
    }
  }

  addItem(item){
    this.props.addItem(item)
  }

  deleteItem(id){
    this.props.deleteItem(id)
  }

  qty(id){
    return this.props.basket.reduce((total, item) => item.id === id ? item.counter : total, 0)
  }

  componentDidMount() {
    this.setState({home: products})
  }

  render() {
    //console.log(this.props)
    return (
      <div>
        <Grid>
          <Row>
            {this.state.home.map((item, index) => {
                //console.log(`PRODUCT ${item.name}`)
                return (
                  <Cards
                      className='Card'
                      key={index}
                      id={item.id}
                      price={item.price}
                      name={item.name}
                      qty={this.qty(item.id)}
                      onAdd={() => this.addItem(item)}
                      onDelete={() => this.deleteItem(item.id)}
                    />
                  )
              })
            }
          </Row>
        </Grid>

      </div>
    )
  }
}

Home.propTypes = {
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

export default connect(mapStateToProps, actions)(Home)
