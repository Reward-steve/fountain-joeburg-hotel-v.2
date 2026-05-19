import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// Interactive 3D tilt effect on hover for the Booking Widget
export function InteractiveWidgetContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Core cursor tracking values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Add structural spring dampening to smooth out quick, jittery movements
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Map smoothed values to rotation coordinates
  const rotateX = useTransform(smoothY, [-300, 300], [12, -12]);
  const rotateY = useTransform(smoothX, [-300, 300], [-12, 12]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative coordinates calculation based on center point (0, 0)
    const currentX = event.clientX - rect.left - width / 2;
    const currentY = event.clientY - rect.top - height / 2;

    mouseX.set(currentX);
    mouseY.set(currentY);
  }

  function handleMouseLeave() {
    // Snap back safely to dead-center coordinates
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex w-full justify-center lg:col-span-5 lg:justify-end"
      style={{ perspective: 1200 }} // Inline style ensures perspective works cross-browser without custom tailwind plugins
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-md lg:max-w-lg" // Removed CSS transition utilities entirely
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
