import React, { Component } from 'react'
import MessagesCard from './MessagesCard'
import MessagesAddMessage from './MessagesAddMessage'
import "./Messages.css"

export default class MessagesList extends Component {

  state = {
    messageIdForEditing: 0,
  }
  render() {
    let userId = Number(sessionStorage.getItem("User"));

     const messageToEdit = (messageId) => {
      console.log(messageId, userId)
      this.setState({messageIdForEditing: messageId})

    }


    if (this.props.messages.length === 0 ||  this.props.users.length === 0) {
      return null
    }
    return(
      <>
      <h1>Messages</h1>
      <section className="message-container">
        {
      this.props.messages.map( message =>
      <MessagesCard key={message.id}
        message={message}
        userId={message.userId}
        history={this.props.history}
        userDatabase={this.props.users}
        messageToEdit={messageToEdit}
        messageIdForEditing={this.state.messageIdForEditing}
        putMessage={this.props.putMessage}
        addFriend={this.props.addFriend}
        friends={this.props.friends} />
      )
        }
        <MessagesAddMessage
        addMessage={this.props.addMessage} />
      </section>
      </>
    )
  }
}
