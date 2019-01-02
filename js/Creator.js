import React from "react";

export default class Creator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            addItem: this.props.addItem,
            label: ''
        }
    }

    addItem() {
        if (this.state.label !== '' ) {
            this.state.addItem(this.state.label);
            this.setState({label: ''})
        }
    }

    render() {
        return (
                <form className="todo-creator">
                    <button className="todo-creator_check-all" aria-label="Check all items as done"
                              onClick={ event => {
                                  event.preventDefault();
                                  this.addItem();
                              }}/>
                    <div className="todo-creator_text-input-w">
                        <input className="todo-creator_text-input" type="text" placeholder="New todo name"
                               aria-label="Input new todo text" value={this.state.label}
                               onChange={event => this.setState({label: event.target.value})}/>
                    </div>
                </form>
        );
    }
}