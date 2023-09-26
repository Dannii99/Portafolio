// pages/index.js
import React, { useEffect } from 'react';
import * as THREE from 'three';
  
export default function NavbarApp () {

    useEffect(() => {
        // Aquí puedes empezar a trabajar con Three.js
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
    
        // Añade código de Three.js aquí...
    
        // Limpia la escena al salir del componente
        return () => {
          // Limpia los recursos de Three.js si es necesario
        };
    }, []);


    return (
        <div>
            {/* Contenedor donde se renderizará la escena Three.js */}
            <div id="canvas-container" />
            HAHAHAHAHAHHA
        </div>
    )
  }