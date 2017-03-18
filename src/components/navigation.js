import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import '../styles/App.css'
import FontAwesome from 'react-fontawesome'
import { Badge } from 'react-bootstrap'
import { navigationDestination } from '../actions'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      home: true
    }
  }

  onClickLink(){
    this.setState({home: !this.state.home})
    this.props.updateNavigation(!this.state.home)
  }

  render(){
    const x = this.props.basketCount.map(item => item.counter)
    //const x1 = x.filter((val)=>val!==undefined)
    const x2 = x.reduce((prev, curr) => prev + curr, 0)
    return (
      <div>
        <div className='App-header'>
          <div className="Row">
              <div className="Column">
                <div className='NavText' style={{color:'white'}}>BABYLON</div>
              </div>
              <div className="Column">
                <div className='Icons'>
                  <Badge>{x2}</Badge>
                  {this.state.home ?
                  <Link onClick={()=>this.onClickLink()} to="/basket"><FontAwesome name='shopping-bag' size='2x' style={{color:'white'}}/></Link> :
                  <Link onClick={()=>this.onClickLink()} to='/'><FontAwesome name='home' size='2x' style={{color:'white'}}/></Link>}
                </div>
              </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

Navigation.propTypes = {
    navigation: PropTypes.bool.isRequired,
    basketCount: PropTypes.array.isRequired,
}

function mapStateToProps(state){
  return {
    navigation: state.navigation,
    basketCount: state.bag,
  }
}

function actions(dispatch) {
  return {
    updateNavigation: (bool) => dispatch(navigationDestination(bool)),
  }
}

export default connect(mapStateToProps, actions)(Navigation)
