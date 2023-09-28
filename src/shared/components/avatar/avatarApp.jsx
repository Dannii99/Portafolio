// pages/index.js
import React, { useEffect } from 'react';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import * as THREE from 'three';
  
export default function NavbarApp () {

    useEffect(() => {
        // Verifica si ya existe una instancia de la escena, la cámara y el renderizador
        if (typeof window.scene === 'undefined') {

          // Crea una escena, una cámara y un renderizador
          window.scene = new THREE.Scene();
          window.renderer = new THREE.WebGLRenderer();
          window.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

          // posicion de la camara dentro de la escena
          window.camera.position.set( 0, 0, 12 );
          window.camera.lookAt( 0, 0, 0 );
          
          // Configura el renderizador y agrega el canvas al DOM
          window.renderer.setSize(window.innerWidth, window.innerHeight);
          document.body.appendChild(window.renderer.domElement);
          
        }
        
        const scene = window.scene;
        const camera = window.camera;
        const renderer = window.renderer;
        

        /* Configuracion scene */
        scene.background = new THREE.Color(0x2a3b4c);

        /* *********************** GEOMETRYS *********************** */

        // Crea un cubo y agrega a la escena
        const geometry = new THREE.BoxGeometry(2,2,2,1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        
        // Crea un cono y agrega a la escena
        const materialCone = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const geometryCone = new THREE.ConeGeometry(1, 2, 3, 4);
        const cone = new THREE.Mesh(geometryCone, materialCone);
        cone.position.y = -5
        scene.add(cone);


        // Crea un esfera y agrega a la escena
        const materialSphere = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const geometrySphere = new THREE.SphereGeometry(1, 32, 32, 0);
        const sphere = new THREE.Mesh(geometrySphere, materialSphere);
        sphere.position.x = -5
       scene.add(sphere);


        // Crea un cilindro y agrega a la escena
        const materialCylinder = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const geometryCylinder= new THREE.CylinderGeometry(0.5, 0.5, 3, 32, true);
        const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
        cylinder.position.x = 5
        scene.add(cylinder);


        // Crea un plane y agrega a la plane
        const materialPlane = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const geometryPlane= new THREE.PlaneGeometry(2, 2, 3, 5);
        const plane = new THREE.Mesh(geometryPlane, materialPlane);
        plane.position.y = 5
        scene.add(plane);


        // Crear linea y agrega a la escena
        const materialLinea = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        const points = [];
        points.push( new THREE.Vector3( -2, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 2, 0 ) );
        points.push( new THREE.Vector3( 2, 0, 0 ) );
        points.push( new THREE.Vector3( -2, 0, 0 ) );
        const geometryLine = new THREE.BufferGeometry().setFromPoints( points );
        const line = new THREE.Line( geometryLine, materialLinea );
        line.position.y = 5
        //scene.add( line );


        /* ********************************************************* */


        // Configurar el controlador de órbita
        const controls = new OrbitControls(camera, renderer.domElement);
        // Minima distancia en la escena
        controls.minDistance = 3;
        // Maxima distancia en la escena
        controls.maxDistance = 50;
        // Controlar zoom
        controls.enableZoom = true;
        // Controlar rotacion
        controls.enableRotate = true;
        // Controlar rotacion (Inercia) - initual vaule false
        controls.enableDamping = true;
        // Factor de rotacion
        controls.dampingFactor = 0.5;
        // Controlar la rotacion de la camara
        controls.maxPolarAngle = Math.PI; // Math.PI /  3
        // Controlar la perspectiva  de la pantalla
        controls.screenSpacePanning = true;

        // Se debe llamar a Controls.update() después de cualquier cambio manual en la transformación de la cámara.
        controls.update();

        // Configurar el controlador de tranform en un elemento o geometria
        const tControlOne = new TransformControls(camera, renderer.domElement);
        const tControlTwo = new TransformControls(camera, renderer.domElement);
        const tControlThree = new TransformControls(camera, renderer.domElement);

        // const {tControlOne, tControlTwo, tControlThree} =  new TransformControls(camera, renderer.domElement);
        
        // Agregar evento dragging-changed
        tControlOne?.addEventListener('dragging-changed', (e)=> {
          controls.enabled = !e.value
        })
        tControlTwo?.addEventListener('dragging-changed', (e)=> {
          controls.enabled = !e.value
        })
        tControlThree?.addEventListener('dragging-changed', (e)=> {
          controls.enabled = !e.value
        })
        

        // Atar geometria al tranformControl
        tControlOne?.attach(cone)
        tControlTwo?.attach(sphere)
        tControlThree?.attach(cylinder)

        // Modo rotate
        tControlOne?.setMode('rotate')

        // Modo scale
        tControlTwo?.setMode('scale')

        // Modo translate
        tControlThree?.setMode('translate')

        // Agregar escena
        scene.add(tControlOne, tControlTwo, tControlThree)
        
        // Crea una función de animación
        const animate = () => {
          requestAnimationFrame(animate);
    
          // Rota el cubo en cada fotograma
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;

          // requerido si controles.enableDamping o controles.autoRotate están configurados en verdadero
          controls.update();
    
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

        // Agregar el manejador de redimensionamiento de la ventana
        window.addEventListener('resize', handleResize);

    
        // Limpia la escena al desmontar el componente
        return () => {
            scene.remove(cube);
            geometry.dispose();
            geometryLine.dispose();
            geometryCone.dispose();
            geometrySphere.dispose();
            geometryCylinder.dispose();
            materialPlane.dispose();
            material.dispose();
            materialLinea.dispose();
            materialCone.dispose();
            materialSphere.dispose();
            materialCylinder.dispose();
            geometryPlane.dispose();
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
  
      // Actualizar el tamaño del renderizador y la relación de aspecto de la cámara
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    return <div id='container' />;
  }