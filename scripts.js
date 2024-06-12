let scene, camera, renderer, controls;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, 100); // Adjust to ensure all objects are in view

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewport').appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Add objects
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0); // Centered at origin
    scene.add(cube);

    const torusGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(0, 0, -30); // Adjust position to make it visible
    scene.add(torusKnot);

    // Add OrbitControls
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Only required if controls.enableDamping or controls.autoRotate are set to true
    renderer.render(scene, camera);
}

// Call init to setup our scene
init();
