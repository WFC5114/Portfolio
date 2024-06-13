import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/loaders/GLTFLoader.js';

console.log("Script Loaded");
console.log(THREE);

let scene, camera, renderer, controls;

document.addEventListener('DOMContentLoaded', function () {
    init();
    document.querySelector('.button').addEventListener('click', startJourney);
});

function init() {
    console.log("Initializing scene");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 100, 300);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewport').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 500);
    pointLight.position.set(50, 100, 100);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load('CyberCity/scene.gltf', function (gltf) {
        gltf.scene.scale.set(20, 20, 20);
        gltf.scene.position.set(0, -10, 0);
        scene.add(gltf.scene);
        console.log('Model loaded successfully');
    }, undefined, function (error) {
        console.error('An error happened while loading the model:', error);
    });

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function startJourney() {
    document.getElementById('titleScreen').style.display = 'none';
    document.getElementById('viewport').style.display = 'block';
}
