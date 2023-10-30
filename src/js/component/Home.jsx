import React from "react";

import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Footer } from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
	<div>
		<Navbar />
		<div className="container">
			<Jumbotron />
			<div className="row">
				<Card titulo= {'titulo 1'} descripcion = {'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'} imagen = {'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg'}/>
				<Card titulo= {'titulo 2'} descripcion = {'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'} imagen = {'https://www.myposter.es/web/img/toolbox/optimize-example.jpg'}/>
				<Card titulo= {'titulo 3'} descripcion = {'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'} imagen = {'https://images.pexels.com/photos/9325425/pexels-photo-9325425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
				<Card titulo= {'titulo 4'} descripcion = {'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.'} imagen = {'https://agenciacomma.com/wp-content/uploads/2021/04/busqueda-inversa-imagenes.jpg'}/>
			</div>
		</div>
		<Footer />
		</div>
	);
};

export default Home;

