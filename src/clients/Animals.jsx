import * as React from 'react';
import classNames from 'classnames';

export let Animals = React.createClass({
    render: function() {
        let classname = classNames({'success': this.props.selected});
        return (
            <tr className = {classname} onClick={this.props.getClients}>
                <td>{this.props.name}</td>
                <td>{this.props.kind}</td>
                <td>{this.props.breed}</td>
                <td>{this.props.age}</td>
                <td>{this.props.color}</td>
                <td>{this.props.gender}</td>
                <td>{this.props.lastUse}</td>
            </tr>
        );
    }
});