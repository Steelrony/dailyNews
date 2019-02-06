import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatests } from '../actions/latestActions';


// component
import LatestNews from '../components/home/Latest';



class Home extends Component {

  componentDidMount(){
    this.props.getLatests();
  }
  render() {
    return (
      <div>
        <LatestNews/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    articles: state.latest
  } 
}

export default connect(mapStateToProps, {getLatests})(Home);