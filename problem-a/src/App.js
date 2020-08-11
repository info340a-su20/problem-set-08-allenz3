import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable />
      </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    return (
      <table className="table table-bordered">
        <TableHeader cols = {['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          <SenatorRow senator = {EXAMPLE_SENATORS}/>
        </tbody>
      </table>
    );
  }
}

export class TableHeader extends Component {
  render() {
    const colNames = this.props.cols.map((colName) => {
      return (<th key={ colName }>
              { colName }
              </th>);
    });

    return (
      <thead>
        <tr>{ colNames }</tr>
      </thead>
    );
  }
}

export class SenatorRow extends Component {
  render() {
    const row = this.props.senator.map((senator) => {
      return (
        <tr key={senator.id}>
          <td>{ senator.name }</td>
          <td>{ senator.party.substring(0, 1) + " - " + senator.state }</td>
          <td>
            <a href={ "tel:+" + senator.phone }>{ senator.phone }</a>
          </td>
          <td href="https://twitter.com/user_name">
            <a>{ "@" + senator.twitter }</a>
          </td>
        </tr>
      );
    });
    return (
        {row}
    );
  }
}
/**/