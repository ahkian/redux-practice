import React, {Component} from 'react';
import { connect } from 'react-redux';

class New extends Component {
  render(){
    console.log("New Props", this.props);
    return(
      <React.Fragment>
        <p>New Here</p>
        <ul>
          {this.props.level.map(el =>{
            return <p><p>{el}</p><p>{el + 1}</p></p>
          })}
        </ul>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return{
    level: state.level >= 0 ? [...Array(state.level).keys()] : [...Array(state.level * -1).keys()]
  }
}

export default connect(mapStateToProps)(New)
