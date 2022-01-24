import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../Global';

const New = () => {

    const url = Global.url;

    const [article, setArticle] = useState({
        title: null,
        content: null,
        author: null
    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let titleRef = React.createRef();
    let contentRef = React.createRef();
    let authorRef = React.createRef();

    const changeState = () => {

        setArticle({
            title: titleRef.current.value,
            content: contentRef.current.value,
            author: authorRef.current.value
        });

        console.log(article);

    }

    const sendData = (e) => {

        //Evitamos que al recibir los datos se recargue la pantalla:
        e.preventDefault();

        changeState();

        //Petición http por POST para guardar el artículo:
        axios.post(url + 'save', article).then(res => {
            setRedirect(true);
            console.log(res.data);
        });

    }

    if(redirect){
        return <Navigate to="articles" />;
    }

    return (
        <div className="nueva-publicacion">

            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                <div id="card-header" className="card-header text-dark">
                    <h4>Publicar un nuevo artículo</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={sendData}>

                        <div className="mb-3">
                            <label>Título</label>
                            <input className="form-control" type="text" id="title" name="title" ref={titleRef} onChange={changeState} required />

                        </div>

                        <div className="mb-3">
                            <label>Contenido</label>
                            <textarea className="form-control" rows="6" cols="30" ref={contentRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <label>Autor</label>
                            <input className="form-control" type="text" id="author" name="author" ref={authorRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                            <input className="form-control btn btn-primary" type="submit" id="publish" value="Publicar" />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default New;