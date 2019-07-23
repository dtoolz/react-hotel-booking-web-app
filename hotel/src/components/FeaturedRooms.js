import React, { Component } from 'react'
import { RoomContext } from '../context'


export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {firstName,lastName} = this.context;

        return (
            <div>
                featured rooms showing my fullname {firstName} {lastName}
            </div>
        )
    }
}
