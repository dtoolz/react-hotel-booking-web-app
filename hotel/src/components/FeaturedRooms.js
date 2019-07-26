import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default class FeaturedRooms extends Component {
    //to access the context
    static contextType = RoomContext;
    render() {
        //getting a room object each from contextjs
        let {loading,featuredRooms : rooms} = this.context;
        rooms = rooms.map(room => {
            return ( <Room key={room.id} room={room} /> );
        })
        return (
            <section className="featured-rooms">
               <Title title="Our Best Rooms" />
                <div className="featured-rooms-center" >
                  {loading ? <Loading/> : rooms}
                </div>
            </section>
        );
    }
}
