import React from 'react';
import Creator from "./Creator";
import {Item} from "./Item";
import Toolbar from "./Toolbar";

const MAX_ITEM = 5;

export default class Board extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            filter: 'all',
            number: 0
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setChecked = this.setChecked.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.filteredItems = this.filteredItems.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }

    addItem(label) {
        if (this.state.number < MAX_ITEM && !this.state.list.some(el => el.label === label)) {
            this.setState({
                list: [...this.state.list, {label: label, checked: false}],
                number: ++this.state.number
            });
        }
    }

    deleteItem(label) {
        this.setState(prevState => ({
            list: prevState.list.filter(el => el.label !== label),
            number: --prevState.number
        }));
    }

    setChecked(label) {
        let arr = this.state.list;
        arr.forEach(el => {
            if (el.label === label) {
                el.checked = !el.checked;
            }
        });
        this.setState({
            list: [...arr],
        });
    }

    setFilter(filter) {
        this.setState({filter: filter});
    }

    clearCompleted() {
        let i = 0;
        this.setState(prevState => ({
            list: prevState.list.filter(el => {
                let b = !el.checked;
                i = !b ? i + 1 : i;
                return b;
            }),
            number: prevState.number - i
        }))
    }

    filteredItems(el) {
        switch (this.state.filter) {
        case 'all':
            return <Item key={el.label} label={el.label} deleteItem={this.deleteItem}
                         setChecked={this.setChecked} checked={el.checked} />;
        case 'active':
            if (!el.checked) {
                return <Item key={el.label} label={el.label} deleteItem={this.deleteItem}
                             setChecked={this.setChecked} checked={el.checked} />;
            }
            break;
        case 'completed':
            if (el.checked) {
                return <Item key={el.label} label={el.label} deleteItem={this.deleteItem}
                             setChecked={this.setChecked} checked={el.checked} />;
            }
            break;
        }
    }

    render() {
        return (
                <div>
                    <Creator addItem={this.addItem}/>
                    <div className="todos-list">
                        { this.state.list.map(el => this.filteredItems(el)) }
                    </div>
                    <Toolbar itemsLeft={MAX_ITEM - this.state.number} filter={this.state.filter}
                             setFilter={this.setFilter} clearComplete={this.clearCompleted}/>
                </div>
        );
    }
}