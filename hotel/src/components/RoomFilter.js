import React from 'react'
//implementing react hooks to get context on functional component
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'


//to get all unique values of the rooms
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
};

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;

    //getting the unique types for each of the search field
    let types = getUnique(rooms,'type');
    //add all to whatever you have in the types
    types = ['all',...types];
    //map to jsx for the room type search field
    types = types.map((item,index)=>{
        return (
            <option value={item} key={index} >{item}</option>
        );
    });
    
    //unique type for guest search field
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
        return (
            <option value={item} key={index} >{item}</option>
        );
    });
    

    return (
        <section className="filter-container">
           <Title title="Search Rooms" />
           <form className="filter-form" >
              {/* select type */}
                <div className="form-group" >
                   <label htmlFor="type" >Room Type</label>
                   <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
              {/* end of select type */}

              {/* guests search */}
              <div className="form-group" >
                   <label htmlFor="capacity" >Guests</label>
                   <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>
              {/* end of guests search */}

              {/* room price scroll */}
                <div className="form-group">
                   <label htmlFor="price">Room Price ${price}</label>
                   <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
              {/* end of room price scroll */}

              {/* size search field */}
                 <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                 </div>
              {/* end of size search field */}

              {/* checkbox search field */}
                 <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                 </div>
              {/* end of checkbox search field */}
           </form>
        </section>
    );
}
