let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;  // Adjust camera position so it's not inside any geometry

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewport').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Neon green cube
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Call init to setup our scene
init();
