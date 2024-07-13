import React, { useContext  , useState} from 'react'
import { GlobalContext } from '../Contetx'
import styled from 'styled-components';



const Form = styled.form`
     display: flex;
     width: 70%;
    
     
  color: white;
  flex-direction: column;

  h2{
    border-width: 1px 0;
    border-style: solid;
    border-color: rgba(38, 38, 38, 1); ;
    padding: 10px;
    width: 100%;
  }
 
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





const Fomulario = () => {

    const {categorias , videos , addVideo ,deleteTarjeta} = useContext(GlobalContext);
    const [titulo, setTitulo] = useState('');
    const [Categoria, setCategoria] = useState('');
    const [linkImagenVideo, setImagen] = useState('');
    const [linkVideo, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        //Esto valida la ID  para no tomar uno repetido y asignar un numero siguiente
        const ValidarId = videos.map(video => parseInt(video.id, 10));
        const IdMaximo = Math.max(...ValidarId);
        const id = IdMaximo + 1;
        

        const nuevoVideo = { titulo, Categoria, linkImagenVideo, linkVideo, descripcion, id };
      //  addVideo(nuevaTarjeta);

      console.log("dentro del submit");
     addVideo(nuevoVideo);
    
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
        setDescripcion('');
      };

  return (<>

    
    <Form onSubmit={handleSubmit}>
    <h2>Crear Tarjeta</h2>
    <div className='DivTituloCategoria'>
      <div>
        <label>Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <label>Categoría</label>
        <select value={Categoria} onChange={(e) => setCategoria(e.target.value)}>
          
          {
            categorias.map((e) => { return <option key={e.id} value={e.nombre}>{e.nombre}</option>})
          }
        </select>
      </div>
      </div>

      <div className='DivTituloCategoria'>
      <div>
        <label>Imagen</label>
        <input type="text" value={linkImagenVideo} onChange={(e) => setImagen(e.target.value)} placeholder="el enlace es obligatorio" />
      </div>
      <div>
        <label>Video</label>
        <input type="text" value={linkVideo} onChange={(e) => setVideo(e.target.value)} />
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