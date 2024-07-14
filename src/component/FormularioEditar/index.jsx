import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const FormularioContenedor = styled.form`
  
  width: 70%;
  color: white;
 
  div{
    display: flex;
    flex-direction: column;
   
  }

  input, select , textarea{
   
    border: 3px solid var(--Blue, rgba(34, 113, 209, 1));
    background: rgba(3, 18, 47, 1);
    width: 100%;
    height: 30px;
    border-radius: 10px;
    color: white;
    margin-bottom: 30px;
    
    
  }

  label{
    margin: 5px;
  }

 .botones{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
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




const FormularioEditar = ({videoModal , categorias, setModal , VideoUpdate}) => {

    

    const [formData, setFormData] = useState({
        linkImagenVideo: '',
        linkVideo: '',
        titulo: '',
        descripcion: '',
        Categoria: ''
      });


      useEffect(() => {
        if (videoModal) {
          setFormData({
            linkImagenVideo: videoModal.linkImagenVideo,
            linkVideo: videoModal.linkVideo,
            titulo: videoModal.titulo,
            descripcion: videoModal.descripcion,
            Categoria: videoModal.Categoria
          });
        }
      }, [videoModal]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const updatedVideo = { ...formData, id: videoModal.id };
        console.log(updatedVideo);
        VideoUpdate(updatedVideo);
        setModal(false);
      };
    
      const handleClear = () => {
        setFormData({
          linkImagenVideo: '',
          linkVideo: '',
          titulo: '',
          descripcion: '',
          Categoria: ''
        });
      };
    
      return (
        <>
          <FormularioContenedor onSubmit={handleSubmit}>
            <h2>Editar Video</h2>
            <div className='DivTituloCategoria'>
              <div>
                <label>Título</label>
                <input
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Categoría</label>
                <select
                  name="Categoria"
                  value={formData.Categoria}
                  onChange={handleChange}
                  required
                >
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.nombre}>
                      {categoria.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='DivTituloCategoria'>
              <div>
                <label>Imagen</label>
                <input
                  type="text"
                  name="linkImagenVideo"
                  value={formData.linkImagenVideo}
                  onChange={handleChange}
                  placeholder="el enlace es obligatorio"
                  required
                />
              </div>
              <div>
                <label>Video</label>
                <input
                  type="text"
                  name="linkVideo"
                  value={formData.linkVideo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label>Descripción</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="¿de qué se trata este vídeo?"
              />
            </div>
            <div className='botones'>
              <button className='guardar' type="submit">Guardar</button>
              <button className='limpiar' type="button" onClick={handleClear}>Limpiar</button>
            </div>
          </FormularioContenedor>
        </>
  )
}

export default FormularioEditar