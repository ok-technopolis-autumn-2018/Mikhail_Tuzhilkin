import React from 'react';

export class Item extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            deleteItem: this.props.deleteItem,
            setChecked: this.props.setChecked,
            label: this.props.label
        };

        this.checked = this.checked.bind(this);
    }

    checked() {
        this.setState({checked: !this.state.checked});
        this.state.setChecked(this.state.label);
    };

    deleteItem() {
        this.state.deleteItem(this.state.label);
    }

    render() {
        return (
                <div className="todos-list_item">
                    <div className="custom-checkbox todos-list_item_ready-marker">
                        <input type="checkbox" className="custom-checkbox_target" aria-label="Mark todo as ready"
                               onChange={this.checked} />
                        <div className={`custom-checkbox_visual${this.state.checked ? '_check' : ''}`}>
                            <div className={`custom-checkbox_visual_icon${this.state.checked ? '_check' : ''}`} />
                        </div>
                    </div>
                    <button className="todos-list_item_remove" aria-label="Delete todo" onClick={event => {
                        event.preventDefault();
                        this.state.deleteItem(this.props.label);
                    }}/>
                    <div className="todos-list_item_text-w">
                        <textarea className={`todos-list_item_text${this.state.checked ? ' __checked' : ''}`}
                                  rows="1" readOnly value={this.state.label} />
                    </div>
                </div>
        );
    }
}