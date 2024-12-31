import React, { useEffect, useRef, useState } from "react";

const MouseTrailEffect = () => {
  const cords = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const colors = [
    "#ff00c3", "#d123ba", "#a42dab", "#7b2f97",
    "#552b80", "#342465", "#181a48", "#050b2b",
  ];
  const numCircles = 16;
  const [isMobile, setIsMobile] = useState(false);

  // Add global cursor style
  useEffect(() => {
    // Add style to hide cursor
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
      a, button, [role="button"], input, select, textarea {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      cords.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [circles, setCircles] = useState(
    Array(numCircles).fill({ x: cords.current.x, y: cords.current.y })
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      cords.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        e.preventDefault();
        cords.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchstart", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animateCircles = () => {
      setCircles((prevCircles) => {
        const newCircles = [...prevCircles];
        let x = cords.current.x;
        let y = cords.current.y;

        for (let i = 0; i < newCircles.length; i++) {
          const { x: prevX, y: prevY } = newCircles[i];
          newCircles[i] = {
            x: prevX + (x - prevX) * (i === 0 ? 1 : 0.3), // First circle follows cursor exactly
            y: prevY + (y - prevY) * (i === 0 ? 1 : 0.3),
          };
          x = prevX;
          y = prevY;
        }
        return newCircles;
      });

      animationFrameId = requestAnimationFrame(animateCircles);
    };

    animationFrameId = requestAnimationFrame(animateCircles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (isMobile && window.innerWidth < 480) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            height: index === 0 ? "8px" : "24px", // Smaller first circle
            width: index === 0 ? "8px" : "24px",
            borderRadius: "50%",
            backgroundColor: index === 0 ? "#ffffff" : colors[index % colors.length],
            transform: `translate(${circle.x - (index === 0 ? 4 : 12)}px, ${
              circle.y - (index === 0 ? 4 : 12)
            }px) scale(${(numCircles - index) / numCircles})`,
            transition: index === 0 ? "none" : "transform 0.1s linear",
            pointerEvents: "none",
            boxShadow: index === 0 ? "0 0 10px rgba(255,255,255,0.5)" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrailEffect;