// import * as THREE from 'three'
let THREE = require('three')

let loader = new THREE.FontLoader();

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(window.innerWidth / 4, window.innerHeight / 4)
document.body.appendChild(renderer.domElement)

// What if window resizes??
window.addEventListener('resize', function () {
  const width = window.innerWidth
  const height = window.innerHeight
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

// create the shape
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)

// create material colour or image texture
const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 3
// game logic
const update = function () {
  cube.rotation.x += 0.001
  cube.rotation.y += 0.001
}

const render = function () {
  renderer.render(scene, camera)
}
// run game loop update render repeat
const GameLoop = function () {
  requestAnimationFrame(GameLoop)
  update()
  render()
}

GameLoop()

const addHandlers = function () {
  $(document).ready(GameLoop)
}
module.exports = {
  addHandlers

}

// --------------------------------------------------------------------------------------------

// GO HERE => https://github.com/mrdoob/three.js/blob/master/examples/canvas_particles_waves.html
// import * as THREE from 'three'
// const THREE = require('three-js')()
// var THREE = require("three-canvas-renderer");
//
// const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
// let container, stats;
// let camera, scene, renderer;
// let particles, particle, count = 0;
// let mouseX = 0, mouseY = 0;
// let windowHalfX = window.innerWidth / 2;
// let windowHalfY = window.innerHeight / 2;
//
// function init() {
//   container = document.createElement( 'div' );
//   document.body.appendChild(container);
//   camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000 );
//   camera.position.z = 1000; // Good var to change
//   scene = new THREE.Scene();
//   particles = new Array();
//   var PI2 = Math.PI * 2;
//   var geometry = new THREE.Geometry();
//   var material = new THREE.SpriteCanvasMaterial({
//     color: 0xffffff,
//     program: function ( context ) {
//       context.beginPath();
//       context.arc( 0, 0, 0.4, 0, PI2, true );
//       context.fill();
//     }
//   });
//
//
//   var i = 0;
//   for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
//     for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
//       particle = particles[ i ++ ] = new THREE.Sprite( material );
//       particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
//       particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
//       scene.add(particle);
//
//       if (i > 0) {
//         geometry.vertices.push( particle.position );
//       }
//     }
//   }
//
//   // var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
//   //   color: 0xffffff,
//   //   opacity: 0.5,
//   //   linewidth: 4
//   // }));
//   // scene.add( line );
//
//   renderer = new THREE.CanvasRenderer();
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   container.appendChild(renderer.domElement);
//   stats = new Stats();
//   container.appendChild( stats.dom );
//   document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//   document.addEventListener( 'touchstart', onDocumentTouchStart, false );
//   document.addEventListener( 'touchmove', onDocumentTouchMove, false );
//   //
//   window.addEventListener( 'resize', onWindowResize, false );
// }
//
// function onWindowResize() {
//   windowHalfX = window.innerWidth / 2;
//   windowHalfY = window.innerHeight / 2;
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize( window.innerWidth, window.innerHeight );
// }
//
// function onDocumentMouseMove(event) {
//   mouseX = event.clientX - windowHalfX;
//   mouseY = event.clientY - windowHalfY;
// }
//
// function onDocumentTouchStart(event) {
//   if (event.touches.length === 1) {
//     event.preventDefault();
//     mouseX = event.touches[ 0 ].pageX - windowHalfX;
//     mouseY = event.touches[ 0 ].pageY - windowHalfY;
//   }
// }
//
// function onDocumentTouchMove( event ) {
//   if (event.touches.length === 1) {
//     event.preventDefault();
//     mouseX = event.touches[ 0 ].pageX - windowHalfX;
//     mouseY = event.touches[ 0 ].pageY - windowHalfY;
//   }
// }
//
// function animate() {
//   requestAnimationFrame( animate );
//   render();
//   stats.update();
// }
//
// function render() {
//   renderer.setClearColor( 0x07074e, 1);
//   camera.position.x += ( mouseX - camera.position.x ) * .05;
//   camera.position.y += ( - mouseY - camera.position.y ) * .05;
//   camera.lookAt( scene.position );
//   var i = 0;
//   for (var ix = 0; ix < AMOUNTX; ix++) {
//     for (var iy = 0; iy < AMOUNTY; iy++) {
//       particle = particles[i++];
//       particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
//       particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
//     }
//   }
//   renderer.render(scene, camera);
//   count += 0.1;
// }
//
// init();
// animate();
