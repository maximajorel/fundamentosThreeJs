import scene from './basic/Scene.js';
import camera from './basic/Camera.js';
import renderer from './basic/Renderer.js';
import cube from './basic/shapes/Cube.js';
import light from './basic/Light.js';
import resize from './basic/Resize.js';


scene.add(cube);
scene.add(light)

camera.position.set(2,2,2)
camera.lookAt(cube.position);

setInterval(() => {
    cube.rotation.y += .01;
    renderer.render(scene, camera); // Esto toma foto de la escena, pero necesitamos 60fps para crear ese efecto de movimiento entonces usamos setInterval para que se ejecute cada 60 veces por segundo

}, 1000/60);

resize.start(renderer);


// console.log(scene ,camera, renderer, cube);
