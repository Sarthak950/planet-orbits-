import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';




//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// const camera = new THREE.OrthographicCamera(window.innerWidth/-20, window.innerWidth/20, window.innerHeight/20,window.innerHeight /-20, 0.1, 1000);
scene.add(camera);
camera.position.x = 25;
camera.position.y = 45;
camera.position.z = 25;




//planet
const geometry_planet = new THREE.SphereGeometry(10, 32, 32);
const material_planet = new THREE.MeshBasicMaterial({color: 0x0ff0ff, wireframe: true});
const planet = new THREE.Mesh(geometry_planet, material_planet);
scene.add(planet);

//star
const geometry_star = new THREE.SphereGeometry(1, 32, 32);
const material_star = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
const star = new THREE.Mesh(geometry_star, material_star);
scene.add(star);


//star_2
const geometry_star_2 = new THREE.SphereGeometry(1.3, 32, 32);
const material_star_2 = new THREE.MeshBasicMaterial({color: 0xf8eded});
const star_2 = new THREE.Mesh(geometry_star_2, material_star_2);
scene.add(star_2);

//star_3
const geometry_star_3 = new THREE.SphereGeometry(1.6, 32, 32);
const material_star_3 = new THREE.MeshBasicMaterial({color: 0x5f5dbd});
const star_3 = new THREE.Mesh(geometry_star_3, material_star_3);
scene.add(star_3);

//star_4
const geometry_star_4 = new THREE.SphereGeometry(2.5, 32, 32);
const material_star_4 = new THREE.MeshBasicMaterial({color: 0xc6de41});
const star_4 = new THREE.Mesh(geometry_star_4, material_star_4);
scene.add(star_4);
//ring around the star_4
const geometry_ring = new THREE.RingGeometry( 4.5, 3, 360 );
const material_ring = new THREE.MeshBasicMaterial( { color: 0xed8d8d, side: THREE.DoubleSide } );
const ring = new THREE.Mesh( geometry_ring, material_ring );
scene.add( ring );
ring.rotation.x = Math.PI / 4;

//star_5
const geometry_star_5 = new THREE.SphereGeometry(1.8, 32, 32);
const material_star_5 = new THREE.MeshBasicMaterial({color: 0x33425b});
const star_5 = new THREE.Mesh(geometry_star_5, material_star_5);
scene.add(star_5); 

//star_6 
const geometry_star_6 = new THREE.SphereGeometry(4.5, 32, 32);
const material_star_6 = new THREE.MeshBasicMaterial({color: 0x7DCE13});
const star_6 = new THREE.Mesh(geometry_star_6, material_star_6);
scene.add(star_6);



//renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


//controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0, 0);
controls.enableDamping = true;


//clock
const clock = new THREE.Clock();
//animation 
function animate() {   
    requestAnimationFrame(animate); 
   
    const elapsedTime = clock.getElapsedTime();

    //rotate the planet
    planet.rotation.y = elapsedTime;

    //revolve the star
    star.position.x = Math.cos(elapsedTime) * 13;
    star.position.z = Math.sin(elapsedTime) * 13;

    //revolve the star_2
    star_2.position.x = Math.cos(elapsedTime * 0.8) * 18;
    star_2.position.z = Math.sin(elapsedTime * 0.8) * 18;

    //revolve the star_3
    star_3.position.x = Math.cos(elapsedTime * 0.5) * 23;
    star_3.position.z = Math.sin(elapsedTime * 0.5) * 23;

    //revolve the star_4
    star_4.position.x = Math.cos(elapsedTime * 0.2) * 28;
    star_4.position.z = Math.sin(elapsedTime * 0.2) * 28;
    //ring position
    ring.position.x = star_4.position.x;
    ring.position.z = star_4.position.z;

    //revolve the star_5
    star_5.position.x = Math.sin(elapsedTime * 0.4) * 35;
    star_5.position.z = Math.cos(elapsedTime * 0.4) * 35;

    //revolve the star_6
    star_6.position.x = Math.cos(elapsedTime * 0.1) * 42;
    star_6.position.z = Math.sin(elapsedTime * 0.1) * 42;

      
    //update controls
    controls.update();



    renderer.render(scene, camera);
} 
animate();
