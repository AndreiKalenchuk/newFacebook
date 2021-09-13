import React from 'react';

import css from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        newStatus: null
    }
    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    onStatusChange = (event) => {
        const newStatus = event.value;
        this.setState({
            newStatus: this.state.newStatus += newStatus
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.toggleEditMode}> {this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={this.toggleEditMode}
                           value={this.props.status}
                           onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;