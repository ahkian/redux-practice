import React, {Component} from 'react';
import { connect } from 'react-redux';

class New extends Component {
  render(){
    console.log("New Props", this.props);
    return(
      <p>New Here</p>
    )
  }
}

function mapStateToProps(state){
  return{
    level: state.level
  }
}

export default connect(mapStateToProps)(New)
