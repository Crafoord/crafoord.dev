import * as THREE from 'three'
import React from 'react'

export default class ThreeJS extends React.Component {

  componentDidMount() {
    const container = document.getElementById( 'threejs-container' );
    
    if(container) {
      
      const renderer = new THREE.WebGLRenderer();
      container.appendChild( renderer.domElement );
      renderer.setSize( container.offsetWidth, container.offsetWidth );

      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
      camera.position.z = 5;

      const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
      const makeInstance = (geometry:any, color:number, y:number) => {
        const material = new THREE.MeshPhongMaterial({color});
       
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
       
        cube.position.y = y;
       
        return cube;
      }
      const cubes = [
        makeInstance(boxGeometry, 0xFF0000, 2),
        makeInstance(boxGeometry, 0xFF9900, 0),
        makeInstance(boxGeometry, 0x00FF00, -2),
      ];

      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
  
  
      const render = function (time: number) {
        time *= 0.001; // convert time to seconds
        
        cubes.forEach((cube, ndx) => {
          const speed = 1 + ndx * .1;
          const rot = time * speed;
          cube.rotation.x = rot;
          cube.rotation.y = rot;
        });

        renderer.render(scene, camera);
        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);
    }
  }

  render() {return <div id="threejs-container"/>}
}