import React from 'react';

import css from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.props.updateStatus(this.state.status);
        this.setState({
            editMode: false
        })
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status !== prevProps.status) {
           this.setState({
               status: this.props.status
           })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span placeholder={'Enter a status'}
                          onDoubleClick={this.activateEditMode}> {this.state.status || '--------'} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;