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
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
      </table>
    );
  }
}

export class TableHeader extends Component {
  render() {
    const colNames = this.props.cols.map((colName) => {
      return <ColumnHeading
              key = { colName }
              />;
    })

    return (
      <thead>
        <tr>{ colNames }</tr>
      </thead>
    );
  }
}

class ColumnHeading extends Component {
  render() {
    const key = "Column Heading";
    return (
      <th>{ key }</th>
    );
  }
}

export class SenatorRow extends Component {

}
/**/