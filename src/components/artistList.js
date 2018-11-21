import React from 'react';
import { Link } from 'react-router-dom';
// We need state less components so...
const ArtistList = (props) => {

    const list = ({ allArtists }) => {
        // to check that All artists has data or not , if yes , rander divs
        // Without this it wll throws error as  first time when applictaion get loads , this allArtist variable is empty array
        if (allArtists) {
            return allArtists.map((item) => {
                const style = {
                    background: `url('images/covers/${item.cover}.jpg') no-repeat`
                }
                return (
                    <Link key={item.id} to={`/artist/${item.id}`} className='artist_item'  style={style}>
                            <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }
    //console.log(props);
    return (
        <div className="artists_list">
            <h4>Browse The Artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistList;