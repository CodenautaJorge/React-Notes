 //Diferentes métodos y rutas relacionadas con los artículos. Definimos todos los métodos y objetos de la API

 'use strict'

 var Article = require('../models/article');

 //creamos un objeto controller para disponer de todos los métodos de ruta:
var controller = {

	//Método para guardar un artículo:

	save: (req, res) =>{

		var params = req.body;
        console.log(params);
		//Objeto a guardar
        var article = new Article();

        // Asignar valores
        article.title = params.title;
        article.content = params.content;
        article.author = params.author;

        // Guardamos el articulo
        article.save((err, articleStored) => {

            if(err || !articleStored){
                return res.status(404).send({
                    status: 'error',
                    message: 'El artículo no se ha guardado !!!'
                });
            }

            // Devolver una respuesta 
            return res.status(200).send({
                status: 'success',
                articleStored
            });

        }); 
            
	},

	//Método para obtener o listar los artículos:

	getArticles: (req, res) =>{

		var query = Article.find({});

		query.sort('-date').exec((err, articles) => {

			if(err){
				return res.status(500).send({
					status: "error",
					message: "Error al extraer los datos"
				});
			}

			//Si no existen artículos:
			if(!articles){
				return res.status(404).send({
					status: "error",
					message: "No hay artículos para mostrar"
				});
			}

			return res.status(200).send({
				status: "success",
				articles
			});

		});	

	},

	//Eliminar un artículo:

	delete: (req, res) =>{

		//Recogemos el id de la url
		var articleId = req.params.id;

		Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) =>{

			if(err){
				return res.status(500).send({
					status: "error",
					message: "Error al eliminar!!"
				});
			}

			if(!articleRemoved){
				return res.status(404).send({
					status: "error",
					message: "No se ha encontrado el artículo que deseas aliminar!!"
				});
			}

			//Si no hay ningún error obtenemos el artículo eliminado

			return res.status(200).send({
				status: "success",
				article: articleRemoved
			});
			
		});

	}

}; 

module.exports = controller;