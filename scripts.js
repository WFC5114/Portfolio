let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 50); // Closer camera position

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewport').appendChild(renderer.domElement);

    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Point light for focused illumination
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 20, 20);
    scene.add(pointLight);

    // Green cube setup
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0); // Centered at origin
    scene.add(cube);

    // TorusKnot setup
    const torusGeometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16); // Smaller size
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    torusKnot.position.set(0, 0, -10); // Closer to the cube
    scene.add(torusKnot);

    // Helpers
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);
    const gridHelper = new THREE.GridHelper(100, 10);
    scene.add(gridHelper);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Call init to setup our scene
init();
