// import '../styles/';
import React, { useEffect } from 'react';
import star from '../img/star.png';
// import star from '../img/star-12.png';
const Background = () => {
	useEffect(() => {
		const THREE = window.THREE;
		const win = document.defaultView;

		
		let scene, camera, renderer, starGeo, stars;
		function init() {
			//create scene object
			scene = new THREE.Scene();
			//setup camera with facing upward
			camera = new THREE.PerspectiveCamera(
				60,
				window.innerWidth / window.innerHeight,
				1,
				1000
			);
			camera.position.z = 1;
			camera.rotation.x = Math.PI / 2;
			//setup renderer
			renderer = new THREE.WebGLRenderer({ alpha: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			//this will resize the scene with the window
			window.addEventListener('resize', function () {
				renderer.setSize(window.innerWidth, window.innerHeight);
			});
			document.body.appendChild(renderer.domElement);
			starGeo = new THREE.Geometry();
			for (let i = 0; i < 6000; i++) {
				let star = new THREE.Vector3(
					Math.random() * 600 - 300,
					Math.random() * 600 - 300,
					Math.random() * 600 - 300,
					Math.random() * 600 - 300,
					Math.random() * 600 - 300,
					Math.random() * 600 - 300
				);
				star.velocity = 0;
				star.acceleration = 0.002;
				starGeo.vertices.push(star);
			}
			let sprite = new THREE.TextureLoader().load(star);
			let starMaterial = new THREE.PointsMaterial({
				color: 0xaaaaaa,
				size: 0.7,
				map: sprite,
			});
			stars = new THREE.Points(starGeo, starMaterial);
			scene.add(stars);
		
			animate();
		}
		//rendering loop
		function animate() {
		
			starGeo.vertices.forEach((p) => {
				p.velocity += p.acceleration;
				p.y -= p.velocity;
				if (p.y < -200) {
					p.y = 200;
					p.velocity = 0;
				}
			});
			starGeo.verticesNeedUpdate = true;
			stars.rotation.y += 0.002;
			renderer.render(scene, camera);

			requestAnimationFrame(animate);
		}
		init();
	}, []);
	return <div className="background"></div>;
};
export default Background;
