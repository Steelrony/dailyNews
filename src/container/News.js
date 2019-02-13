import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedNews, clearSelectedNews } from '../actions/latestActions';

class News extends Component {

    componentDidMount(){
        this.props.getSelectedNews(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearSelectedNews()
    }

    renderNews = ({latest}) => {
         if(latest){
             return latest.map((item)=> {
                 return(
                     <div key={item.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {item.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Article by:  <strong>{item.author}</strong></span>
                        </div>
                        <img alt={item.title} src={`/images/articles/${item.img}`}/>
                        <div className="body_news">
                            {item.body}
                        </div>
                     </div>
                 )
             })
         }
    }

    render(){
        return(
            <div className="news_container">
                {this.renderNews(this.props)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('mapState', state)
    return{
        latest: state.latest.selected
    }
}

export default connect(mapStateToProps, {getSelectedNews, clearSelectedNews})(News); 