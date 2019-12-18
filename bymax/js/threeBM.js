import * as THREE from './three/build/three.module.js';
import  {OrbitControls}  from './three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from './three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from './three/examples/jsm/loaders/MTLLoader.js';
import { GUI } from './three/examples/jsm/libs/dat.gui.module.js';

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

	scene = new THREE.Scene(th.w, th.h);
	camera = new THREE.PerspectiveCamera( 45,  th.w/th.h, 0.1, 5000 );
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

	renderer.setSize(th.w, th.h);
	canvas3D.appendChild( renderer.domElement );

	controls = new OrbitControls( camera, renderer.domElement );

	controls.minPolarAngle   = th.controls.r * Math.PI/180
	controls.maxPolarAngle   = th.controls.r * Math.PI/180;
	controls.autoRotateSpeed = -1;
	controls.dampingFactor   = 0.05;
	controls.autoRotate      = true;
	controls.enableDamping   = true;
	controls.enableKeys      = false;
	controls.enablePan       = false;
	controls.enableZoom      = false;

	var r = 'img/c1/envmap2.png';
	var urls = [ r,r,r,r,r,r ];

	var textureCube = new THREE.CubeTextureLoader().load( urls );
	
	var material = new THREE.MeshPhongMaterial({
		color: '#001063',
		emissive: '#000000',
		specular: '#2755ff',
		shininess: 50,
		reflectivity: 0.5,
		envMap: textureCube,
	})

	var obj;
	var loader = new OBJLoader();
	loader.load( '3d/2.obj', function ( object ) {
		
		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = material;
			}
		});	
		var size = 70
		object.scale.set( size, size, size );
		obj = object;
		scene.add( obj );
	});

	var light1 = new THREE.DirectionalLight( 0xcccccc, 1 );
	light1.position.y = 500 * Math.PI
	scene.add( light1 );

	var light2 = new THREE.DirectionalLight( 0xcccccc, 1 );
	light2.position.y = -500 * Math.PI
	camera.add( light2 );
	scene.add( camera );

	var light3 = new THREE.DirectionalLight( 0xcccccc, 0.5 );
	light3.position.y = -50 * Math.PI
	camera.add( light3 );
	scene.add( camera );

	camera.position.z = 300 * Math.PI;	

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
  				th.controls.r = sc = (60 * Math.PI/180) + ((last_known_scroll_position/13) * (Math.PI/180)) ;
  				if (sc > 1.8) 	return 0;
  				controls.minPolarAngle  =  sc ;
  				controls.maxPolarAngle  =  sc ;
  			})
		}

		window.addEventListener('scroll', function(e) {
			last_known_scroll_position = x.sc;

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

