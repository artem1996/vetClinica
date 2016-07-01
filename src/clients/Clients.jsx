import * as React from 'react';
import classNames from 'classnames';

export let Clients = React.createClass({
    render: function() {
        let classname = classNames({'success': this.props.selected});
        return (
            <tr className = {classname} onClick={this.props.getAnimal}>
                <td>{this.props.name}</td>
                <td>{this.props.phoneNumber}</td>
            </tr>
        );
    }
});
