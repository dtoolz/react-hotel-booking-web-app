import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true
    };
//accessing the data, and life cycle method to know when the component mounts

componentDidMount() {
   let rooms = this.formatData(items);
   //console.log(rooms); to see the new structured arrangement of the data from datajs,now getData function can easily access data for usage.
   let featuredRooms = rooms.filter(room => room.featured === true);
   this.setState({
       rooms,
       featuredRooms,
       sortedRooms:rooms,
       loading:false
   })
}
// passing a **items parameter below to format data from the structure with which it was recieved from datajs
formatData(items) {
    let tempItems = items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);

        let room = {...item.fields,images,id};
        return room;
    });
    return tempItems;
}


    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
               {this.props.children}
            </RoomContext.Provider>
        );
    }
}


const RoomConsumer = RoomContext.Consumer;

export{RoomProvider, RoomConsumer, RoomContext}