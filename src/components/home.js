import React,{Component} from 'react';


// Components 
import Banner from './banner';
import ArtistList from './artistList';

//API Link
const URL_ARTISTS = "http://localhost:3004/artists";

class Home extends Component{

    constructor(props){
        super(props);

        // States Defined For seting the lists of the artists 
        this.state = {
            artists : ""
        }
    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method: 'GET'
        }).then(responce => responce.json())
        .then(json=>{
            //console.log(json);
                this.setState({
                    artists: json
                })
        })
    }

    render(){
        return (
        <div>
            <Banner/>
            <ArtistList allArtists={this.state.artists}/>
        </div>
        )
    }
}   


export default Home;