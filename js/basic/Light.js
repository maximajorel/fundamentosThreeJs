import * as THREE from 'three';
const light = new THREE.AmbientLight( 0x404040 ); // soft white light



// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.add(directionalLight) // Agregamos la luz direccional a la luz ambiental 
directionalLight.position.set(-10, 10, 10);
console.log(directionalLight)
export default light;