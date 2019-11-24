import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from  'react-redux'
import {fetchPosts} from '../Actions/postAction'
class Post extends Component {

  componentWillMount = () => {
    this.props.fetchPosts();
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
      //map through response with jsx format. JSX should always a unique key
      const postItems = this.props.posts.map(posts => (
          <div key={posts.id}>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
          </div>
      ));
    return (
      <div>
       <h1>Post</h1> 
       {postItems}
      </div>
    )
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost : state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Post)