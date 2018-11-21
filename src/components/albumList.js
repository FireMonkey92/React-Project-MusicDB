import React from 'react';



const AlbumList = (props) => {

    const LoadList = ({AlbumList}) =>{    
        
        if(AlbumList){
            return AlbumList.map((item, index) => {
                return(
                   <img alt="No Images Loaded" key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }  
    }

    return (
        <div className="album_list">
        {LoadList(props)}
        </div>
    )
}

export default AlbumList;