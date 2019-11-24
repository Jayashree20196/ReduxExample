import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from  'react-redux'
 import {createPost} from '../Actions/postAction'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
        }
    }

onChange = (e) => {
    this.setState ({ [e.target.name] : e.target.value})
}

onSubmit = (e) => {
    e.preventDefault();
    
    const post = {
        title: this.state.title,
        body: this.state.body
    }
    
    this.props.createPost(post)
    
   

}

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
            <label>Title : </label><br/>
            <input type="text" name="title" onChange={this.onChange}></input>
            </div><br/>
            <div>
            <label>Body : </label><br/>
            <textarea name="body" onChange={this.onChange}></textarea>
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Postform.propType = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(Postform);
