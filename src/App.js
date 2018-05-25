import React, { Component } from "react";
import "./App.css";

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