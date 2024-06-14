document.addEventListener('DOMContentLoaded', () => {
    const scenes = [];

    function initThreeJS() {
        document.querySelectorAll('.folder').forEach((elem) => {
            const canvas = elem.querySelector('canvas');
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
            renderer.setSize(elem.offsetWidth, elem.offsetHeight);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, elem.offsetWidth / elem.offsetHeight, 0.1, 1000);
            camera.position.z = 5;

            // Define the shape of a folder (correct orientation)
            const folderShape = new THREE.Shape();
            folderShape.moveTo(0, 1.5);
            folderShape.lineTo(0, 0);
            folderShape.lineTo(2, 0);
            folderShape.lineTo(2, 1.2);
            folderShape.lineTo(1.2, 1.2);
            folderShape.lineTo(1, 1.5);
            folderShape.lineTo(0, 1.5);

            const extrudeSettings = { depth: 0.1, bevelEnabled: false };
            const geometry = new THREE.ExtrudeGeometry(folderShape, extrudeSettings);
            const material = new THREE.MeshBasicMaterial({ color: '#c5a15b', transparent: true, opacity: 1 });
            const folder = new THREE.Mesh(geometry, material);
            scene.add(folder);

            // Shadow folders initially hidden and positioned to the right and slightly behind
            const shadowMaterial = new THREE.MeshBasicMaterial({ color: '#c5a15b', transparent: true, opacity: 0 });
            const shadowFolder1 = new THREE.Mesh(geometry, shadowMaterial);
            shadowFolder1.position.set(-1, 0, -1);  // More to the right and slightly behind the main folder
            scene.add(shadowFolder1);

            const shadowFolder2 = new THREE.Mesh(geometry, shadowMaterial);
            shadowFolder2.position.set(0, 0, -2);  // Even further to the right and behind
            scene.add(shadowFolder2);

            scenes.push({ scene, camera, renderer, elements: { folder, shadowFolder1, shadowFolder2 } });

            elem.addEventListener('mouseenter', () => {
                gsap.to(folder.position, { x: -0.6, z: 3, duration: 0.5 }); // Move the folder leftwards and towards the camera
                gsap.to(folder.rotation, { y: Math.PI * 0.5, duration: 0.5 }); // Rotate the folder
                gsap.to(shadowFolder1.material, { opacity: 0.5, duration: 0.5 });
                gsap.to(shadowFolder2.material, { opacity: 0.25, duration: 0.5 });
            });

            elem.addEventListener('mouseleave', () => {
                gsap.to(folder.position, { x: 0, z: 0, duration: 0.5 }); // Move the folder back to its original position
                gsap.to(folder.rotation, { y: 0, duration: 0.5 }); // Rotate the folder back
                gsap.to(shadowFolder1.material, { opacity: 0, duration: 0.5 });
                gsap.to(shadowFolder2.material, { opacity: 0, duration: 0.5 });
            });
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        scenes.forEach((obj) => {
            obj.renderer.render(obj.scene, obj.camera);
        });
    }

    initThreeJS();
    animate();
});
