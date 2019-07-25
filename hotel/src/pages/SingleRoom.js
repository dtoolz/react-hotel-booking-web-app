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
       //array of images destructuring to get main image of image[0] and the rest images
       const [mainImg, ...defaultImg] = images;
        return (
           <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
              <Banner title={`${name} room`} >
              <Link to='/rooms' className="btn-primary" >
                   Go Back To Rooms
                 </Link>
              </Banner>
            </StyledHero>
            <section className="single-room" >
              <div className="single-room-images" >
                 {defaultImg.map((item,index) => {
                    return ( <img key={index} src={item} alt={name} /> );
                 })}
              </div>
              <div className="single-room-info" >
                <article className="desc" >
                   <h3>Details</h3>
                   <p>{description}</p>
                </article>
                <article className="info" >
                   <h3>info</h3>
                   <h6>price : ${price}</h6>
                   <h6>size : {size} SQFT</h6>
                   <h6>
                     max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                   </h6>
                   <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                   <h6>{breakfast && "Free Breakfast Available"}</h6>
                </article>
              </div>
            </section>
            <section className="room-extras">
              <h6>Additional Benefits</h6>
              <ul className="extras">
                 {extras.map((item,index) =>{
                   return (
                     <li key={index}>-{item}</li>
                   )
                 })}
              </ul>
            </section>
           </>
        )
    };
};

// to be imported to appjs