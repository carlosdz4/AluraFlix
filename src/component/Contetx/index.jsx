import React, { createContext, useState , useEffect} from 'react'


export const GlobalContext = createContext();




const Context = ({children}) => {

    const [categorias , setCategorias] = useState([]);
    

    const [videos , setvideo] = useState([]);
    const [Modal , setModal] = useState({
      valor: false,
      video: {},
    });
    const [titulo, setTitulo] = useState('');
    const [Categoria, setCategoria] = useState('');
    const [linkImagenVideo, setImagen] = useState('');
    const [linkVideo, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

   

   
      //Get categoria
    useEffect(() => {
        fetch(
          "https://alurafix-api-fake-d25n.vercel.app/categorias"
        )
          .then((res) => res.json())
          .then((data) => setCategorias(data));
      
      fetch(
        "https://alurafix-api-fake-d25n.vercel.app/videos"
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
        
      fetch(`https://alurafix-api-fake-d25n.vercel.app/videos/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          const nuevovideo = videos.filter((video) => video.id !== id);
          setvideo(nuevovideo);
        })
        .catch(error => {
          console.error('Error deleting tarjeta:', error);
        });
    };

    const VideoUpdate = (videoForm) => {
      fetch(`https://alurafix-api-fake-d25n.vercel.app/videos/${videoForm.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(video)
      })
        .then(response => response.json())
        .then(data => {

          const nuevoVideo = videos.map((video) => {
            if (video.id === videoForm.id) {
              return data;
            }
  
            return video;
          });

          setvideo(nuevoVideo);
          
        })
        .catch(error => {
          console.error('Error updating tarjeta:', error);
        });
    };
   
  

  return (
    <GlobalContext.Provider value={{categorias , setCategorias , videos , setvideo 
    , addVideo , Borrarvideo , Modal , setModal, titulo, setTitulo , Categoria, setCategoria,
    linkImagenVideo, setImagen, linkVideo, setVideo ,descripcion, setDescripcion , VideoUpdate 
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default Context