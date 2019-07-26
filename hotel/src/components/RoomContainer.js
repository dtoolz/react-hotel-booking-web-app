import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer({context}) {
    const {loading,sortedRooms,rooms} = context;
      if (loading) {
        return (
            <Loading />
            );
        }
        return (
            <>
              <RoomFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </>
                );
        
}

export default withRoomConsumer(RoomContainer)










//for reference, getting the values of the rooms in a functional component without using Hoc
// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     //get the values of the rooms in a functional component
//     return (
//         <RoomConsumer>
//             {
//               (value) => {
//                   //destructuring the values retrieved
//                   const {loading,sortedRooms,rooms} = value;
//                   if (loading) {
//                       return (
//                           <Loading />
//                       );
//                   }
//                   return (
//                     <div>
//                       RoomContainer showing
//                       <RoomFilter rooms={rooms} />
//                       <RoomList rooms={sortedRooms} />
//                     </div>
//                   );
//               }
//             }
//         </RoomConsumer>
        
//     )
// }
