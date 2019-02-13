import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLatests } from '../actions/latestActions';
import { getOthers } from '../actions/otherActions';
import { getGallery } from '../actions/galleryActions';


// component
import LatestNews from '../components/home/Latest';
import OtherNews from '../components/home/OtherNews';
import Gallery from '../components/home/Gallery';



class Home extends Component {

  componentDidMount(){
    this.props.getLatests();
    this.props.getOthers();
    this.props.getGallery();
  }
  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles} />
        <OtherNews otherNews={this.props.posts}/>
        <Gallery gallery={this.props.gals}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    articles: state.latest.latests,
    posts: state.other.others,
    gals: state.gallery.galleries
  } 
}

export default connect(mapStateToProps, {getLatests, getOthers, getGallery})(Home);