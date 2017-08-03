import React from 'react';
import ReactDOM from 'react-dom';
export default class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    return $.getJSON('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole/')
      .then((data) => {
        this.setState({ person: data.results });
      });
  }

  render() {
    const persons = this.state.person.map((item, i) => {
      return <div key={i}>
        <h1>{item.first}</h1>
        <span>{item.last}, {item.email}</span>
      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">{ persons }</div>
    </div>
  }
}