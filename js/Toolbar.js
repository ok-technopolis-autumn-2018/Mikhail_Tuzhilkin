import React from 'react';

export default class Toolbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            itemsLeft: this.props.itemsLeft,
            filter: this.props.filter,
            setFilter: this.props.setFilter,
            clearComplete: this.props.clearComplete
        };
    }

    render() {
        return (
                <div className="todos-toolbar">
                    <div className="todos-toolbar_unready-counter">{this.props.itemsLeft} items left</div>

                    <button className="todos-toolbar_clear-completed" onClick={event => {
                        event.preventDefault();
                        this.state.clearComplete();
                    }}>Clear completed</button>

                    <div className="filters todos-toolbar_filters">
                        <button className={`filters-item${this.state.filter === 'all' ? ' __selected' : ''}`}
                                aria-label={`Filter: All${this.state.filter === 'all' ? ', is selected' : ''}`}
                                onClick={event => {
                                    event.preventDefault();
                                    this.setState({filter: 'all'});
                                    this.state.setFilter('all');
                                }}>All</button>

                        <button className={`filters-item${this.state.filter === 'active' ? ' __selected' : ''}`}
                                aria-label={`Filter: Active${this.state.filter === 'active' ? ', is selected' : ''}`}
                                onClick={event => {
                                    event.preventDefault();
                                    this.setState({filter: 'active'});
                                    this.state.setFilter('active');
                                }}>Active</button>

                        <button className={`filters-item${this.state.filter === 'completed' ? ' __selected' : ''}`}
                                aria-label={`Filter: Completed${this.state.filter === 'completed' ? ', is selected' : ''}`}
                                onClick={event => {
                                    event.preventDefault();
                                    this.setState({filter: 'completed'});
                                    this.state.setFilter('completed');
                                }}>Completed</button>
                    </div>
                </div>
        );
    }

}