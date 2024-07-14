import React, { useContext  , useState} from 'react'
import { GlobalContext } from '../Contetx'
import styled from 'styled-components';
import {  useNavigate } from 'react-router-dom';


const TituloForm = styled.h2`
   border-width: 1px 0;
    border-style: solid;
    border-color: rgba(38, 38, 38, 1); ;
    padding: 10px;
    width: 100%;
    color: white;
    text-align: center;
    width: 70%;
    
`

const Form = styled.form`
     display: flex;
     width: 70%;
    
     
  color: white;
  flex-direction: column;

 
 
  div{
    display: flex;
    flex-direction: column;
   
  }

  .DivTituloCategoria{
    display: flex;
    flex-direction: row;
    gap: 2em;
    flex-wrap: wrap;
  }

  input, select , textarea{
    border: 3px solid var(--Dark-Grey, rgba(38, 38, 38, 1));
    background: rgba(25, 25, 25, 1);
    color: white;
    padding: 15px;
    
  }

  textarea{
    width: 50%;
    height: 190px;
    border-radius: 10px;
  }

  label{
    margin: 5px;
  }


.botones{
    display: flex;
    margin-top: 50px;
    flex-direction: row;
    width: 50%;
    gap: 20px;
    flex-wrap: wrap;
}

button{
    font-size: 20px;
font-weight: 900;
line-height: 24px;
text-align: center;

width: 180.13px;
height: 54px;
background-color: transparent;
border-radius: 10px;
}

.guardar{
    
    color: white;
border: 2px solid var(--Blue, #2271D1);
box-shadow: 0px 0px 12px 4px #2271D1 inset;
cursor: pointer;
}
.limpiar{
    border: 2px solid #F5F5F5;
    color: #F5F5F5;
    border: 2px solid var(--white, #F5F5F5);
    cursor: pointer;

}

`







const Fomulario = ({videoModal}) => {

    const {categorias , videos , addVideo , titulo, setTitulo , Categoria, setCategoria,
      linkImagenVideo, setImagen, linkVideo, setVideo ,descripcion, setDescripcion , VideoUpdate,setModal  } = useContext(GlobalContext);
    
      const navigate = useNavigate();
     
   


    const handleSubmit = (e) => {
      
     
        e.preventDefault();
        console.log("dentro del submit");
        //Esto valida la ID  para no tomar uno repetido y asignar un numero siguiente
        const ValidarId = videos.map((video) => parseInt(video.id, 10));
        const IdMaximo = Math.max(...ValidarId);
        const id = (IdMaximo + 1).toString();
        

        const nuevoVideo = { titulo, Categoria, linkImagenVideo, linkVideo, descripcion, id };

        
     addVideo(nuevoVideo);
    
     navigate('/');
      
      };

  return (<>

        



  <TituloForm>Crear Tarjeta</TituloForm>
    <Form  onSubmit={handleSubmit}>
   
    <div className='DivTituloCategoria'>
      <div>
        <label>Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
      </div>
      <div>
        <label>Categoría</label>
        <select value={Categoria} onChange={(e) => setCategoria(e.target.value)}  required>
        <option value="">Seleccione una categoría</option>
          {
            categorias.map((e) => { return <option key={e.id} value={e.nombre}>{e.nombre}</option>})
          }
        </select>
      </div>
      </div>

      <div className='DivTituloCategoria'>
      <div>
        <label>Imagen</label>
        <input type="text" value={linkImagenVideo}   pattern="^https:\/\/i\.ytimg\.com\/vi\/.*$" onChange={(e) => setImagen(e.target.value)} placeholder="el enlace es obligatorio" required/>
      </div>
      <div>
        <label>Video</label>
        <input type="text" value={linkVideo} pattern="^(https:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$"   onChange={(e) => setVideo(e.target.value)} required />
      </div>
      </div>
      <div>
        <label>Descripción</label>
        <textarea  value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="¿de qué se trata este vídeo?" />
      </div>

      <div className='botones'>
      <button className='guardar' type="submit">Guardar</button>
      <button className='limpiar' type="button" onClick={() => {
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
        setDescripcion('');
      }}>Limpiar</button>
      </div>
    </Form> 
    </>
    
    
  )
}

export default Fomulario