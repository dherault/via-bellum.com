import {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
// import {ProgressiveLightMap} from 'three/examples/jsm/misc/ProgressiveLightMap.js';
import {GUI} from 'dat.gui';

export default function ArmyViewer() {
  const containerRef = useRef();

  useEffect(() => {
    runCanvas(containerRef.current);
  }, []);

  return <div ref={containerRef} className="flex-grow" />;
}

function runCanvas(element) {
  if (element.children.length) return;

  let camera, scene, renderer;
  let mesh, controls, directionalLight;

  init();
  drawGui();
  animate();

  function init() {
    const {width, height} = element.getBoundingClientRect();

    camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.z = 40;

    scene = new THREE.Scene();

    const light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);
    directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
    scene.add(directionalLight);

    // progressiveSurfacemap = new ProgressiveLightMap(renderer, 1024);

    const loader = new STLLoader();

    loader.load('/1.stl', (geometry) => {
      const material = new THREE.MeshPhongMaterial({
        color: 0xffbd69,
        specular: 0x111111,
        shininess: 200,
      });

      mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(0, 0, 0);
      mesh.rotation.set(0, 0, 0);
      mesh.scale.set(0.2, 0.2, 0.2);

      // mesh.castShadow = true;
      // mesh.receiveShadow = true;

      scene.add(mesh);
      camera.position.z = mesh.position.z + 10;
      camera.lookAt(mesh.position);
    });

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setClearColor(0x000000, 0); // the default
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    element.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    const {width, height} = element.getBoundingClientRect();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  }

  function drawGui() {
    const gui = new GUI();
    const meshFolder = gui.addFolder('Cube');
    meshFolder.add(mesh.rotation, 'x', 0, Math.PI * 2);
    meshFolder.add(mesh.rotation, 'y', 0, Math.PI * 2);
    meshFolder.add(mesh.rotation, 'z', 0, Math.PI * 2);
    meshFolder.open();
    const cameraFolder = gui.addFolder('Camera');
    cameraFolder.add(camera.position, 'z', 0, 10);
    cameraFolder.open();
  }

  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    directionalLight.position.copy(camera.position);
    if (!mesh) return;

    // progressiveSurfacemap.update(camera, true, true);
    // mesh.rotation.x += 0.005;
    // mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
}
