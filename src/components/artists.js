import React, { Component } from 'react';
// Componebnts 
import Header from './header';
import AlbumList from './albumList';

import {Link} from 'react-router-dom';

const REQ_URL = "https://my-json-server.typicode.com/FireMonkey92/React-Project-MusicDB/artists/";

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state ={
            artist : ''
        }
    }


    componentDidMount() {
        //to get the id from URl, artist id is id we passes in Router:
        //console.log(this.props.match.params.artistid);
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`, {
            method: "GET"
        })
            .then(responce => responce.json())
            .then(json => {
                this.setState({
                    artist : json
                });                
            })
    }

    render() {

        return (
            <div>
                <Header></Header>
                <div className='artist_bio'>
                    <div className='avatar'>
                    <span style={{ background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>
                    <h3>{this.state.artist.name}</h3>
                    <div className='bio_text'>
                        {this.state.artist.bio}
                    </div>
                    <AlbumList AlbumList={this.state.artist.albums}></AlbumList>
                    <Link  className="backbutton" to='/'></Link>
                </div>
            </div>
        )
    }
}
export default Artist;