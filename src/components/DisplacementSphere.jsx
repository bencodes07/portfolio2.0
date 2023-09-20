"use client";
import { useEffect } from "react";
import * as THREE from "three";
import * as iosInnerHeight from "ios-inner-height";
import * as TWEEN from "tween";
import { sphereVertShader } from "../assets/sphereVertShader";
import { sphereFragShader } from "../assets/sphereFragShader";

function DisplacementSphere() {
  useEffect(() => {
    const start = Date.now();
    const canvas = document.getElementById("sphereCanvas");

    const rand = Math.random();
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    const scene = new THREE.Scene();

    const uniforms = THREE.UniformsUtils.merge([
      THREE.UniformsLib["ambient"],
      THREE.UniformsLib["lights"],
      THREE.ShaderLib.phong.uniforms,
      { time: { type: "f", value: 0 } },
    ]);

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: sphereVertShader,
      fragmentShader: sphereFragShader,
      lights: true,
    });

    const geometry = new THREE.SphereBufferGeometry(32, 128, 128);
    const sphere = new THREE.Mesh(geometry, material);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 152;
    camera.position.x = -38;
    if (window.innerWidth <= 768) {
      (camera.position.x = -15), (camera.position.y = -40);
    }
    camera.position.y = -20;

    scene.add(sphere);
    sphere.position.z = 0;
    sphere.modifier = rand;

    // Light

    const light = new THREE.DirectionalLight(0x6295ca, 1.7);
    light.position.z = 200;
    light.position.x = 100;
    light.position.y = 100;
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x6295ca, 0.6);
    scene.add(ambientLight);

    // Handle Resize

    const handleResize = () => {
      const canvasHeight = iosInnerHeight();
      const windowWidth = window.innerWidth;
      const fullHeight = canvasHeight + canvasHeight * 0.3;
      canvas.style.height = fullHeight;
      renderer.setSize(windowWidth, fullHeight);
      camera.aspect = windowWidth / fullHeight;
      camera.updateProjectionMatrix();
      if (window.innerWidth <= 768) {
        camera.position.x = -15;
        camera.position.y = -5;
        camera.position.z = 200;
      } else {
        camera.position.x = -38;
        camera.position.y = -20;
        camera.position.z = 152;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Interaction

    let ticking = false;
    let animationFrame = null;

    const onMouseMove = (event) => {
      const animate = () => {
        const position = {
          x: event.clientX / window.innerWidth,
          y: event.clientY / window.innerHeight,
        };

        const tween = new TWEEN.Tween(sphere.rotation)
          .to({ x: position.y / 1.1, y: position.x / 1.1 }, 2000)
          .easing(TWEEN.Easing.Quartic.Out)
          .start();

        ticking = false;
      };

      if (!ticking) {
        animationFrame = requestAnimationFrame(animate);
        ticking = true;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animate

    let frame = 0;
    const animate = () => {
      const animation = requestAnimationFrame(animate);

      uniforms.time.value = 0.00005 * (Date.now() - start);
      sphere.rotation.z += 0.001;

      renderer.render(scene, camera);
      TWEEN.update();
    };

    animate();
  }, []);

  return <canvas id="sphereCanvas" className="absolute z-0"></canvas>;
}

export default DisplacementSphere;
