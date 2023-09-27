// pages/index.js
import React, { useEffect } from 'react';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
  
export default function NavbarApp () {

    useEffect(() => {
        // Verifica si ya existe una instancia de la escena, la cámara y el renderizador
        if (typeof window.scene === 'undefined') {

          // Crea una escena, una cámara y un renderizador
          window.scene = new THREE.Scene();
          window.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          window.camera.position.set( 0, 0, 100 );
          window.camera.lookAt( 0, 0, 0 );
          window.renderer = new THREE.WebGLRenderer();
          
          // Configura el renderizador y agrega el canvas al DOM
          window.renderer.setSize(window.innerWidth, window.innerHeight);
          document.body.appendChild(window.renderer.domElement);
    
          // Configura la posición de la cámara (CUBE)
           window.camera.position.z = 5;
        }
    
        const scene = window.scene;
        const camera = window.camera;
        const renderer = window.renderer;
    
        // Crea un cubo y agrega a la escena
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Crear linea
        const materialLinea = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        const points = [];
        points.push( new THREE.Vector3( -3, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 3, 0 ) );
        points.push( new THREE.Vector3( 3, 0, 0 ) );
        const geometryLine = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line( geometryLine, materialLinea );
        scene.add( line );

        // Crea una función de animación
        const animate = () => {
          requestAnimationFrame(animate);
    
          // Rota el cubo en cada fotograma
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
    
          // Renderiza la escena
          renderer.render(scene, camera);
        };

    
        // Llama a la función de animación
        if ( WebGL.isWebGLAvailable() ) {
           animate();
        } else {
            const warning = WebGL.getWebGLErrorMessage();
            document.getElementById( 'container' ).appendChild( warning );
        }

       
    
        // Limpia la escena al desmontar el componente
        return () => {
            scene.remove(cube);
            geometry.dispose();
            material.dispose();
            geometryLine.dispose();
            materialLinea.dispose();
        };
    }, []);


    return <div id='container' />;
  }