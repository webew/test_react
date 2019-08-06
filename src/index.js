import React from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Toto" },
      { id: 2, nom: "Tata" },
      { id: 3, nom: "Tutu" }
    ]
  };

  handleDelete = id => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({ clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";
    const elements = this.state.clients.map(client => (
      <Client details={client} onDelete={this.handleDelete} />
    ));

    return (
      <div>
        <h1>{title}</h1>
        <ul>{elements}</ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
