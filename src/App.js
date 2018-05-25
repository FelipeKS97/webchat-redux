import React, { Component } from "react";
import "./App.css";

import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <section id="messages-list">Lista de mensagens</section>
          <section id="new-message">Nova mensagem</section>
        </section>
      </div>
    );
  }
}

export default App;