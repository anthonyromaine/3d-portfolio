import './style.css'
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 3, 10);

const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820);
scene.add(ambient);

const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(1, 10, 6);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0,4,0);
controls.update();

window.addEventListener('resize', resize, false);

function update() {
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

update();

