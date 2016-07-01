import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {ContactsList} from './ContactLists.jsx';

console.log(ContactsList);

ReactDOM.render(
    <ContactsList />,
    document.getElementById("content")
);