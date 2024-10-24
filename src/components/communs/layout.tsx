import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import Header from './header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation(); // Pour détecter l'URL actuelle
    let camera: THREE.PerspectiveCamera;

    useEffect(() => {
        const scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        // Créer la sphère uniquement si l'URL est la page d'accueil
        let sphere: THREE.Mesh | null = null;
        if (location.pathname === '/') {
            const geometry = new THREE.SphereGeometry();
            const material = new THREE.MeshStandardMaterial({
                color: 0x00ff00,
                metalness: 0.5,
                roughness: 0.1
            });
            sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);
        }

        camera.position.z = 5;

        const particleCount = 10000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 2000;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 1 });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        const animate = () => {
            requestAnimationFrame(animate);
            if (sphere) {
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;
            }
            particles.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [location.pathname]); // Met à jour la scène à chaque changement de page

    // Fonction de zoom et navigation après le zoom
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        const zoomDuration = 2000;
        const zoomTargetZ = 1;
        const startZoom = Date.now();

        const animateZoom = () => {
            const elapsed = Date.now() - startZoom;
            const t = Math.min(elapsed / zoomDuration, 1);
            camera.position.z = 5 * (1 - t) + zoomTargetZ * t;

            if (t < 1) {
                requestAnimationFrame(animateZoom);
            } else {
                navigate(path); // Rediriger vers la page après le zoom
            }
        };
        animateZoom();
    };

    return (
        <div className="relative h-screen">
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10 text-white">{children}</div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                <Header onLinkClick={handleLinkClick} />
            </div>
        </div>
    );
};

export default Layout;
