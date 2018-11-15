import React from 'react';
import {Link} from 'react-router-dom';
 // We need state less components so...
const ArtistList= (props) =>{

    const list =({allArtists})=>{
            console.log(allArtists);

            if(allArtists){
                return allArtists.map((item)=>{
                    return (
                       <div>item</div>
                    )  
               })
            }
            
        }
    //console.log(props);
    return(
        <div className="artists_list">
            <h4>Browse The Artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistList;