import './app.css';
import Modal from 'react-modal';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {fetchDataFromAPI} from '../src/services/api.service';
import Thumbnails from './components/thumbnails';
const customStyles = {
  content : {
        height: window.innerHeight,
        textAlign :'center',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }

};

const Wallpaperpage = () =>{
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [imgUrl,setimgUrl] = React.useState('');
    const[images,setImages] = React.useState([]);
    useEffect(async()=>{
      if(!images.length){
        const response = await fetchDataFromAPI();
        setImages(response)
      }
    },[images])

    useEffect(()=>{
      if(imgUrl){
        setIsOpen(true);
      }
    },[imgUrl])
     
    function onImageSelection(data){
        
      setimgUrl(data.urls.regular);
        
    }
    function closeModal(){
      setIsOpen(false);
      setimgUrl('');
    }
    
    return(
      <div className="gallery">
        <Thumbnails images={images} onImageSelection={onImageSelection}/>
        <Modal
              isOpen={modalIsOpen}  
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="content">
                <button onClick={closeModal} className="modal-close">CLOSE</button>
                <img src={imgUrl} className="image"/>
              </div>
        </Modal>
      </div>
    ) 
}

export default Wallpaperpage; 