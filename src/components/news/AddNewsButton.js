import React, { Component } from 'react'

export default class AddNewsButton extends Component {
  render() {
    return(
      <div className="addNewsButton">
        <button type="button"
                onClick={()=> this.props.history.push("/addnews")}
                className="news-btn btn-login">
            Add A News Article
        </button>
    </div>
    )
  }
}