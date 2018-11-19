import React, { Component } from 'react';

// Componebnts 
import Header from './header';

const REQ_URL = "http://localhost:3004/artists";

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
            <div className='detail_container'>
                <Header></Header>
                <div className='artist_bio'>
                    <div className='avatar'>
                    <span style={{background: `url(/images/covers/${this.state.artist.covor}.jpg') no repeat`}}></span>
                    </div>
                    <div className='bio'>
                        <h3>{this.state.artist.name}</h3>
                        <div className='bio_text'>
                            {this.state.artist.bio}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Artist;