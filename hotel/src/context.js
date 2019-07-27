import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true,
      type:'all',
      capacity:1,
      price:0,
      minPrice:0,
      maxPrice:0,
      minSize:0,
      maxSize:0,
      breakfast:false,
      pets:false
    };
//accessing the data, and life cycle method to know when the component mounts

componentDidMount() {
   let rooms = this.formatData(items);
   //console.log(rooms); to see the new structured arrangement of the data from datajs,now getData function can easily access data for usage.
   let featuredRooms = rooms.filter(room => room.featured === true);
   //for search filter of room lists
   let maxPrice = Math.max(...rooms.map(item => item.price));
   let maxSize = Math.max(...rooms.map(item => item.size));

   //sets states to what they should display initially
   this.setState({
       rooms,
       featuredRooms,
       sortedRooms:rooms,
       loading:false,
       price:maxPrice,
       maxPrice,
       maxSize
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
   //getting and inserting the actual slug from datajs for each specific room
  getRoom = (slug) =>{
     let tempRooms = [...this.state.rooms];
     const room = tempRooms.find(room => room.slug=== slug);
      return room;
  };
     //changing the initial props
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        }, this.filterRooms);
    };
      //accessing the original room props in filterRoom, then updating props through the filterRoom callback above
      filterRooms = () => {
          let {
              rooms, type, capacity, price, minSize, maxSize, breakfast, pets
          } = this.state;
          //get an array from this updated props
          let tempRooms = [...rooms];
          //transform value 
          capacity = parseInt(capacity);
          price = parseInt(price);
          //filtering by type
          if (type !== 'all') {
              //after getting the updated props array, return only the rooms that match the type
              tempRooms = tempRooms.filter(room => room.type === type);
          };
          //filtering by capacity
           if (capacity !==1 ) {
              //after getting the updated props array, return only the rooms that match the capacity
              tempRooms = tempRooms.filter(room => room.capacity >= capacity);
          };
          //filtering by price
          tempRooms = tempRooms.filter(room => room.price <= price);
          //filter by size
          tempRooms = tempRooms.filter(room => room.size >=minSize && room.size <= maxSize);
          //filter by breakfast
          if (breakfast) {
              tempRooms = tempRooms.filter(room => room.breakfast === true );
          }
          //filter by pets
          if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true );
        }
          //change state
          this.setState({
              sortedRooms : tempRooms
          });
      };

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
               {this.props.children}
            </RoomContext.Provider>
        );
    }
}


const RoomConsumer = RoomContext.Consumer;

//creating Hoc to access Hoc in RoomContainer js
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <RoomConsumer>
                { value => <Component {...props} context={value} /> }
            </RoomConsumer>
        );
    }
}

export{RoomProvider, RoomConsumer, RoomContext}