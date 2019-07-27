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
    //getting the unique types
    let types = getUnique(rooms,'type');
    //add all to whatever you have in the types
    types = ['all',...types];
    //map to jsx
    types = types.map((item,index)=>{
        return (
            <option value={item} key={index} >{item}</option>
        )
    })
    return (
        <section className="filter-container">
           <Title title="Search Rooms" />
           <form className="filter-form" >
              {/* select type */}
                <div className="form-group" >
                   <label htmlFor="type" >room type</label>
                   <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
              {/* end of select type */}
           </form>
        </section>
    );
}
