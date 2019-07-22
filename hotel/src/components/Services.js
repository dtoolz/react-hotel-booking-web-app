import React, { Component } from 'react'
import {FaHotel, FaTv, FaGlassCheers, FaWifi} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
      services:[
          {
            icon:<FaHotel/>,
            title:"Accommodation",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne vitationem quidem doloris."
          },
          {
            icon:<FaWifi/>,
            title:"Free Internet Access",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne vitationem quidem doloris. "
          },
          {
            icon:<FaGlassCheers/>,
            title:"Bar",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne vitationem quidem doloris. "
          },
          {
            icon:<FaTv/>,
            title:"Cinema",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne vitationem quidem doloris."
          }
      ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                   {this.state.services.map((item, index) => {
                return ( <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                       </article>
                      );
                   })}
                </div>
            </section>
        );
    }
}
