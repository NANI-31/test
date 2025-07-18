// import { simulationVertexShader, simulationFragmentShader, renderVertexShader, renderFragmentShader } from './shader.js';

// document.addEventListener('DOMContentLoaded', () => {
// 	const scene = new THREE.Scene();
// 	const simScene = new THREE.Scene();
// 	const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
// 	const renderer = new THREE.WebGLRenderer({
// 		antialias: true,
// 		alpha: true,
// 		preserveDrawingBuffer: true,
// 	});
// 	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	document.body.appendChild(renderer.domElement);
// 	const mouse = new THREE.Vector2();
// 	let frame = 0;
// 	const width = window.innerWidth * window.devicePixelRatio;
// 	const height = window.innerHeight * window.devicePixelRatio;
// 	const options = {
// 		format: THREE.RGBAFormat,
// 		type: THREE.FloatType,
// 		minFilter: THREE.LinearFilter,
// 		magFilter: THREE.LinearFilter,
// 		stencilBuffer: false,
// 		depthBuffer: false,
// 	};
// 	let rtA = new THREE.WebGLRenderTarget(width, height, options);
// 	let rtB = new THREE.WebGLRenderTarget(width, height, options);
// 	const simMaterial = new THREE.ShaderMaterial({
// 		uniforms: {
// 			textureA: { value: null },
// 			mouse: { value: mouse },
// 			resolution: { value: new THREE.Vector2(width, height) },
// 			time: { value: 0 },
// 			frame: { value: 0 },
// 		},
// 		vertexShader: simulationVertexShader,
// 		fragmentShader: simulationFragmentShader,
// 	});

// 	const renderMaterial = new THREE.ShaderMaterial({
// 		uniforms: {
// 			textureA: { value: null },
// 			textureB: { value: null },
// 		},
// 		vertexShader: renderVertexShader,
// 		fragmentShader: renderFragmentShader,
// 		transparent: true,
// 	});
// 	const plane = new THREE.PlaneGeometry(2, 2);
// 	const simQuad = new THREE.Mesh(plane, simMaterial);
// 	const renderQuad = new THREE.Mesh(plane, renderMaterial);
// 	simScene.add(simQuad);
// 	scene.add(renderQuad);
// 	const canvas = document.createElement('canvas');
// 	canvas.width = width;
// 	canvas.height = height;
// 	const ctx = canvas.getContext('2d', { alpha: true });
// 	ctx.fillStyle = '#fb7427';
// 	ctx.fillRect(0, 0, width, height);
// 	const fontSize = Math.round(250 * window.devicePixelRatio);
// 	ctx.fillStyle = '#fef4b8';
// 	ctx.font = `bold ${fontSize}px `;
// 	ctx.textAlign = 'center';
// 	ctx.textBaseline = 'middle';
// 	ctx.textRendering = 'geometricPrecision';
// 	ctx.imageSmoothingEnabled = true;
// 	ctx.imageSmoothingQuality = 'high';
// 	ctx.fillText('softhorizon', width / 2, height / 2);
// 	const textTexture = new THREE.CanvasTexture(canvas);
// 	textTexture.minFilter = THREE.LinearFilter;
// 	textTexture.magFilter = THREE.LinearFilter;
// 	textTexture.format = THREE.RGBAFormat;
// 	window.addEventListener('resize', () => {
// 		const newwidth = window.innerWidth * window.devicePixelRatio;
// 		const newHeight = window.innerHeight * window.devicePixelRatio;
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		rtA.setSize(newwidth, newHeight);
// 		rtB.setSize(newwidth, newHeight);
// 		simMaterial.uniforms.resolution.value.set(newwidth, newHeight);
// 		canvas.width = newwidth;
// 		canvas.height = newHeight;
// 		ctx.fillStyle = '#fb7427';
// 		ctx.fillRect(0, 0, newwidth, newHeight);
// 		const newFontSize = Math.round(250 * window.devicePixelRatio);
// 		ctx.fillStyle = '#fef4b8';
// 		ctx.font = `bold ${newFontSize}px`;
// 		ctx.textAlign = 'center';
// 		ctx.textBaseline = 'middle';
// 		ctx.fillText('softhorizon', newwidth / 2, newHeight / 2);
// 		textTexture.needsUpdate = true;
// 	});
// 	renderer.domElement.addEventListener('mousemove', (e) => {
// 		mouse.x = e.clientX * window.devicePixelRatio;
// 		mouse.y = (window.innerHeight - e.clientY) * window.devicePixelRatio;
// 	});
// 	renderer.domElement.addEventListener('mouseleave', () => {
// 		mouse.set(0, 0);
// 	});
// 	const animate = () => {
// 		simMaterial.uniforms.frame.value = frame++;
// 		simMaterial.uniforms.time.value = performance.now() / 1000;
// 		simMaterial.uniforms.textureA.value = rtA.texture;
// 		renderer.setRenderTarget(rtB);
// 		renderer.render(simScene, camera);
// 		renderMaterial.uniforms.textureA.value = rtB.texture;
// 		renderMaterial.uniforms.textureB.value = textTexture;
// 		renderer.setRenderTarget(null);
// 		renderer.render(scene, camera);
// 		const temp = rtA;
// 		rtA = rtB;
// 		rtB = temp;
// 		requestAnimationFrame(animate);
// 	};
// 	animate();
// });

import { simulationVertexShader, simulationFragmentShader, renderVertexShader, renderFragmentShader } from './shader.js';

document.addEventListener('DOMContentLoaded', () => {
	const scene = new THREE.Scene();
	const simScene = new THREE.Scene();
	const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
	const renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	document.body.appendChild(renderer.domElement);

	const mouse = new THREE.Vector2(-1, -1);
	let frame = 0;

	const width = window.innerWidth * window.devicePixelRatio;
	const height = window.innerHeight * window.devicePixelRatio;

	const rtOptions = {
		format: THREE.RGBAFormat,
		type: THREE.FloatType,
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		depthBuffer: false,
		stencilBuffer: false,
	};

	let rtA = new THREE.WebGLRenderTarget(width, height, rtOptions);
	let rtB = new THREE.WebGLRenderTarget(width, height, rtOptions);

	const simMaterial = new THREE.ShaderMaterial({
		uniforms: {
			textureA: { value: null },
			mouse: { value: mouse },
			resolution: { value: new THREE.Vector2(width, height) },
			time: { value: 0 },
			frame: { value: 0 },
		},
		vertexShader: simulationVertexShader,
		fragmentShader: simulationFragmentShader,
	});

	const renderMaterial = new THREE.ShaderMaterial({
		uniforms: {
			textureA: { value: null },
			textureB: { value: null },
		},
		vertexShader: renderVertexShader,
		fragmentShader: renderFragmentShader,
		transparent: true,
	});

	const plane = new THREE.PlaneGeometry(2, 2);
	const simQuad = new THREE.Mesh(plane, simMaterial);
	const renderQuad = new THREE.Mesh(plane, renderMaterial);
	simScene.add(simQuad);
	scene.add(renderQuad);

	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = '#fb7427';
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = '#fef4b8';
	ctx.font = `${Math.round(250 * window.devicePixelRatio)}px sans-serif`;
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText('softhorizon', width / 2, height / 2);
	const textTexture = new THREE.CanvasTexture(canvas);

	window.addEventListener('resize', () => {
		const w = window.innerWidth * window.devicePixelRatio;
		const h = window.innerHeight * window.devicePixelRatio;
		renderer.setSize(window.innerWidth, window.innerHeight);
		rtA.setSize(w, h);
		rtB.setSize(w, h);
		simMaterial.uniforms.resolution.value.set(w, h);
		canvas.width = w;
		canvas.height = h;
		ctx.fillStyle = '#fb7427';
		ctx.fillRect(0, 0, w, h);
		ctx.fillStyle = '#fef4b8';
		ctx.font = `${Math.round(250 * window.devicePixelRatio)}px sans-serif`;
		ctx.fillText('softhorizon', w / 2, h / 2);
		textTexture.needsUpdate = true;
	});

	renderer.domElement.addEventListener('mousemove', (e) => {
		mouse.x = e.clientX * window.devicePixelRatio;
		mouse.y = (window.innerHeight - e.clientY) * window.devicePixelRatio;
	});

	renderer.domElement.addEventListener('mouseleave', () => {
		mouse.set(-1, -1);
	});

	function animate() {
		simMaterial.uniforms.frame.value = frame++;
		simMaterial.uniforms.time.value = performance.now() / 1000;
		simMaterial.uniforms.textureA.value = rtA.texture;

		renderer.setRenderTarget(rtB);
		renderer.render(simScene, camera);

		renderMaterial.uniforms.textureA.value = rtB.texture;
		renderMaterial.uniforms.textureB.value = textTexture;

		renderer.setRenderTarget(null);
		renderer.render(scene, camera);

		let temp = rtA;
		rtA = rtB;
		rtB = temp;

		requestAnimationFrame(animate);
	}
	animate();
});
