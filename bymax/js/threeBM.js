import * as THREE from './three/build/three.module.js';
import  {OrbitControls}  from './three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from './three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from './three/examples/jsm/loaders/MTLLoader.js';


var scene, camera, renderer, controls;
setTimeout(() => {
init()

},500)
function init() {

	var canvas = document.getElementById("canvas3D");

	var th = {
		w: canvas.offsetWidth ,
		h: canvas.offsetHeight ,
		controls : {
			r: 60
		}
	}
	console.log(canvas.offsetHeight + '|' + 1)


	scene = new THREE.Scene(th.w, th.h);
	camera = new THREE.PerspectiveCamera( 45,  th.w/th.h, 0.1, 5000 );
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

	renderer.setSize(th.w, th.h);
	canvas3D.appendChild( renderer.domElement );

	controls = new OrbitControls( camera, renderer.domElement );

	controls.minPolarAngle   = th.controls.r * Math.PI/180
	controls.maxPolarAngle   = th.controls.r * Math.PI/180;
	// controls.screenSpacePanning = false;
	controls.autoRotateSpeed = -1;
	controls.dampingFactor   = 0.05;


	controls.autoRotate      = true;
	controls.enableDamping   = true;
	controls.enableKeys      = false;
	controls.enablePan       = false;
	controls.enableZoom      = false;

	var material = new THREE.MeshPhongMaterial({
		color: '#031388',
		emissive: '#000000',
		specular: '#0aabbe',
		shininess: 40
	})

	var obj;
	var loader = new OBJLoader();
	loader.load( '3d/2.obj', function ( object ) {
		
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = material;
			}
		});	
		object.position.y = 0.7;
		var size = 70
		object.scale.set( size, size, size );
		obj = object;
		scene.add( obj );
	});

	var gridHelper = new THREE.GridHelper( 10, 10 );
	gridHelper.position.y = -4;
	// scene.add( gridHelper );


	var light1 = new THREE.DirectionalLight( 0xcccccc, .15 );
	light1.position.y = 500 * Math.PI
	light1.position.z = 0 * Math.PI
	scene.add( light1 );

	var light2 = new THREE.DirectionalLight( 0xffffff, 0.2 );
	light2.position.y = 100 * Math.PI;
	camera.add( light2 );
	scene.add( camera );

	var light3 = new THREE.DirectionalLight( 0xcccccc, .2 );
	light3.position.y = -500 * Math.PI
	light3.position.z = 200 * Math.PI
	camera.add( light3 );
	scene.add( camera );


	camera.position.z = 320 * Math.PI;	
	// camera.position.y = 5 * Math.PI;	

	animate();			
	function animate() {
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
	}

	console.log()

	// --------------------------------------------------

	let last_known_scroll_position = 0;
	let ticking = false;

	function doSomething(sc) {
  			// Do something with the scroll position

  			window.requestAnimationFrame(function() {
  				th.controls.r = sc = (60 + (sc / 20)) * (Math.PI/180) ;
  				controls.minPolarAngle  =  sc ;
  				controls.maxPolarAngle  =  sc ;

  			})

			// controls.maxPolarAngle = sc * Math.PI;
			// camera.setCameraAngle(window.scrollY / sc);	
			// camera.rotation.x = sc * Math.PI
		}

		window.addEventListener('scroll', function(e) {
			last_known_scroll_position = settings.sc;

			if (!ticking) {
				window.requestAnimationFrame(function() {
					doSomething(last_known_scroll_position);
					ticking = false;
				});

				ticking = true;
			}
		});


	// --------------------------------------------------

}

