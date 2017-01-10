import React from 'react';
import axios from 'axios';

export default class Movies extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>
        <h1>Movies</h1>
        <div className="panel panel-default">
          <div className="panel-body">
            <label>Search</label>
            <input ref={n => this.query = n} type="number" />
            <button onClick={this.search} className="btn btn-primary btn-sm">Search</button>
          </div>
        </div>
      </div>
    );
  }
}
