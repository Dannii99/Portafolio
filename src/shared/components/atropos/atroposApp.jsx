// import Atropos component
import Atropos from 'atropos/react';
import { Image } from "@nextui-org/react";
import NavbarApp from "../navbar/navbarApp";

const title = `Hi, \n I'm \n Frontend \n developer.`
const textoConSaltosDeLinea = 'Línea 1\nLínea 2\nLínea 3';

// Separa el string en un array usando '\n' como delimitador
const lineas = title.split('\n');
  
export default function AtroposApp () {
  return (
    <div id="app">
      {/* Atropos */}
      <Atropos 
      className="my-atropos"
      activeOffset={10}
      shadowScale={0.8}
      rotateXMax={8}
      rotateYMax={8}
     >
        <div className='wapper'>
          <NavbarApp />
          <div className='content-title'  data-atropos-offset="1">
            {lineas.map((linea, index) => (
              <h1 className='title' key={index}>
                {linea}
                {index < lineas.length - 1 && <br />}
              </h1>
            ))}
          {/* <h1 className='title'>{title}</h1> */}
        </div>
          <Image
            data-atropos-offset="4"
            className='figure one'
            src="assets/img/Figura-01.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="6"
            className='figure two'
            src="assets/img/Figura-02.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="3"
            className='figure three'
            src="assets/img/Figura-03.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="4"
            className='figure four'
            src="assets/img/Figura-04.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="2"
            className='figure five'
            src="assets/img/Figura-05.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="4"
            className='figure six'
            src="assets/img/Figura-06.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="4"
            className='figure seven'
            src="assets/img/Figura-07.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="4"
            className='figure eight'
            src="assets/img/Figura-08.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="4"
            className='groups one'
            src="assets/img/Grupo-01.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="2"
            className='groups two'
            src="assets/img/Grupo-02.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="4"
            className='groups three'
            src="assets/img/Grupo-03.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="3"
            className='groups four'
            src="assets/img/Grupo-04.svg"
            alt="Default Image"
            objectFit="cover"
         />
          <Image
            data-atropos-offset="6"
            className='groups five'
            src="assets/img/Grupo-06.svg"
            alt="Default Image"
            objectFit="cover"
         />
        </div>
      </Atropos>
    </div>
  )
}