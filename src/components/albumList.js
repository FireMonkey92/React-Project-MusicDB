import React from 'react';



const AlbumList = (props) => {

    const LoadList = ({AlbumList}) =>{    
        
        if(AlbumList){
            console.log(AlbumList);
            
            return AlbumList.map((item, index) => {
                return(
                    <img key ={index} src={`/images/covers/${item.cover}.jpg`}/>
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