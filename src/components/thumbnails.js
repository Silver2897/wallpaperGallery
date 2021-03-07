import '../app.css';
import React from 'react';
import './thumbnails.css';


const Thumbnails = ({images, onImageSelection}) =>{
    const imagesElements = images.map((data) =>
        <div key={data.id} className="thumbnail">
            <img src={data.urls.thumb} onClick={() => onImageSelection(data)} className="image-item" title="view"/>   
        </div>
    );
    return (
        <div className="thumbnail-container">
            {imagesElements}
        </div>
    )
}

export default Thumbnails; 