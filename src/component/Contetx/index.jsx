import React, { createContext, useState , useEffect} from 'react'


export const GlobalContext = createContext();




const Context = ({children}) => {

    const [categorias , setCategoria] = useState([]);
    

    const [videos , setvideo] = useState([]);

   

   
      //Get categoria
    useEffect(() => {
        fetch(
          "https://alurafix-api-fake.vercel.app/categorias"
        )
          .then((res) => res.json())
          .then((data) => setCategoria(data));
      }, []);
      //Get videos
   useEffect(() => {
       fetch(
         "https://alurafix-api-fake.vercel.app/videos"
       )
         .then((res) => res.json())
         .then((data) => setvideo(data));
     }, []);
      //Post Video
     const addVideo = (video) => {
      
      fetch('https://alurafix-api-fake.vercel.app/videos', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(video)
      })
        .then(response => response.json())
        .then(data => {
          setvideo(data);
        })
        .catch(error => {
          console.error('Error adding tarjeta:', error);
        });
    };

    const Borrarvideo = (id) => {
        
      fetch(`https://alurafix-api-fake.vercel.app/videos/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          const newVideos = videos.filter((video) => video.id !== id);
          setvideo(newVideos);
        })
        .catch(error => {
          console.error('Error deleting tarjeta:', error);
        });
    };
   
  

  return (
    <GlobalContext.Provider value={{categorias , setCategoria , videos , setvideo , addVideo , Borrarvideo}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default Context