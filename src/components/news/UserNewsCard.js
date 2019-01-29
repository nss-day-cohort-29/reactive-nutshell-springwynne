import React, { Component } from 'react'

export default class UserNewsCard extends Component {
  render() {
    return(
      <>
      <div key={this.props.newsArticle.id}>
        <h4>{this.props.newsArticle.title}</h4>
        <button>Remove This Article</button>
        <hr></hr>
      </div>
      </>
    )
  }
}