// DottedSurface — adapted for HTML+React CDN setup (no TS, no Tailwind, no next-themes)
// Renders an animated 3D dot grid as a section background.
// Props: color ([r,g,b] 0-255), opacity, size

const DottedSurface = ({
  color = [240, 232, 216],
  opacity = 0.55,
  size = 7,
  className = '',
  children,
  style = {}
}) => {
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || !window.THREE) return;
    const THREE = window.THREE;
    const SEPARATION = 150;
    const AMOUNTX = 40;
    const AMOUNTY = 60;
    const getSize = () => {
      const r = el.getBoundingClientRect();
      return {
        w: Math.max(1, r.width),
        h: Math.max(1, r.height)
      };
    };
    let {
      w,
      h
    } = getSize();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 10000);
    camera.position.set(0, 355, 1220);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const [cr, cg, cb] = color;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(ix * SEPARATION - AMOUNTX * SEPARATION / 2, 0, iy * SEPARATION - AMOUNTY * SEPARATION / 2);
        colors.push(cr / 255, cg / 255, cb / 255);
      }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size,
      vertexColors: true,
      transparent: true,
      opacity,
      sizeAttenuation: true
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    let count = 0;
    let animationId;
    let visible = true;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!visible) return;
      const posAttr = geometry.attributes.position;
      const pos = posAttr.array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3;
          pos[idx + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }
      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.05;
    };
    const handleResize = () => {
      const s = getSize();
      camera.aspect = s.w / s.h;
      camera.updateProjectionMatrix();
      renderer.setSize(s.w, s.h);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(el);

    // pause when off-screen to save battery
    const io = new IntersectionObserver(entries => entries.forEach(e => visible = e.isIntersecting), {
      threshold: 0
    });
    io.observe(el);
    animate();
    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      io.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: className,
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      ...style
    }
  }, children);
};
window.DottedSurface = DottedSurface;