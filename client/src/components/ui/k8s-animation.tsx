import { motion } from "framer-motion";

export default function KubernetesIllustration() {
  return (
    <div className="w-full aspect-[2/1] relative">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Kubernetes logo at the top */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <path
            d="M400,50 L460,85 L460,155 L400,190 L340,155 L340,85 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
          <circle
            cx="400"
            cy="120"
            r="25"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        </motion.g>

        {/* Flowing pods in a downward pattern */}
        {[1, 2, 3].map((row) => (
          <g key={row}>
            {[-1, 0, 1].map((col) => (
              <motion.g
                key={`${row}-${col}`}
                initial={{ 
                  opacity: 0,
                  y: row * 80 - 40,
                  x: 400 + col * 120
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [row * 80 - 40, row * 80 + 40],
                  x: [400 + col * 120, 400 + col * 120 + (col * 10)]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: row * 0.5 + Math.abs(col) * 0.3,
                  ease: "easeInOut"
                }}
              >
                <path
                  d="M-15,-8.66 L0,-17.32 L15,-8.66 L15,8.66 L0,17.32 L-15,8.66 Z"
                  fill="hsl(var(--primary))"
                  fillOpacity="0.1"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                />
                <circle
                  r="6"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                />
              </motion.g>
            ))}
          </g>
        ))}

        {/* Connecting lines flowing downward */}
        {[1, 2, 3].map((row) => (
          <g key={`lines-${row}`}>
            {[-1, 0, 1].map((col) => (
              <motion.path
                key={`line-${row}-${col}`}
                d={`M${400 + col * 120},${row * 80 - 20} L${400 + col * 120},${row * 80 + 20}`}
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="4,4"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  pathLength: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: row * 0.3 + Math.abs(col) * 0.2
                }}
              />
            ))}
          </g>
        ))}

        {/* Subtle arrow indicator at the bottom */}
        <motion.path
          d="M380,350 L400,370 L420,350"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-10, 0, 10]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
}