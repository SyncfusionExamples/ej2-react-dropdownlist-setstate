import * as React from 'react';

import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import './App.css';

export default class App extends React.Component<any, any> {
  private contacts: { [key: string]: Object }[] = [
    { displayName: 'bob', id: 'abc' },
    { displayName: 'tom', id: 'efg' }
  ];
  private fields: { [key: string]: Object } = { text: 'displayName', value: 'id' };
  constructor(props: Object) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { contactId: 'abc', contacts: this.contacts };
  }
  onChange(e: ChangeEventArgs) {
    if (e.isInteracted) {
      this.setState({ contactId: e.value });
    }
  }
  render() {
    return (
      <DropDownListComponent dataSource={this.state.contacts} id="ddlelement" change={this.onChange} value={this.state.contactId} fields={this.fields} />
    );
  }
}
