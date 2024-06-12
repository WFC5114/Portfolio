console.log("Script Loaded"); // Check if the new script is loaded
console.log(THREE); // Inspect the THREE object to ensure it's loaded properly

let scene, camera, renderer;

function init() {
    console.log("Initializing scene"); // Debugging statement
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 50);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewport').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 20, 20);
    scene.add(pointLight);

    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0);
    scene.add(cube);

    const torusGeometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(0, 0, -10);
    scene.add(torusKnot);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function startJourney() {
    // Hide the title screen and show the main content
    document.getElementById('titleScreen').style.display = 'none';
    // Assuming you have an element with id 'viewport' where the 3D scene will be shown
    document.getElementById('viewport').style.display = 'block';
}


init(); // Call init to setup our scene
