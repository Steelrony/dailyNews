import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatests } from '../actions/latestActions';
import { getOthers } from '../actions/otherActions';


// component
import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/OtherNews';



class Home extends Component {

  componentDidMount(){
    this.props.getLatests();
    this.props.getOthers();
  }
  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles} />
        <OtherNews otherNews={this.props.posts}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('mapToState', state);
  return {
    articles: state.latest.latests,
    posts: state.other.others
  } 
}

export default connect(mapStateToProps, {getLatests, getOthers})(Home);