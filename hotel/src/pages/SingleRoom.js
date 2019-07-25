import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        //note room properties are available here, check with console.log(this.props).
        this.state = {
            //the path to slug displayed in the console wrt the properties
           slug: this.props.match.params.slug,
           defaultBcg
        };
    };
    //to get access to context
    static contextType = RoomContext;
    render() {
      const {getRoom} = this.context;
      const room = getRoom(this.state.slug);
      //at this stage console.log(room) gives the actual slug but adds undefine, undefine needs to handled.
       if (!room){
           return (
               <div className="error">
                 <h3>Room Does Not Exist...</h3>
                 <Link to='/rooms' className="btn-primary" >
                   Go Back To Rooms
                 </Link>
               </div>
           );
       }
       const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        return (
            <StyledHero img={images[0] || this.state.defaultBcg}>
              <Banner title={`${name} room`} >
              <Link to='/rooms' className="btn-primary" >
                   Go Back To Rooms
                 </Link>
              </Banner>
            </StyledHero>
        )
    };
};

// to be imported to appjs