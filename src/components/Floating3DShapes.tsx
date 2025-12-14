import { motion } from "framer-motion";

const Floating3DShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-accent/5"
      />
      
      {/* 3D Cube outline - top left */}
      <motion.div
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[10%] w-16 h-16"
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      >
        <div className="absolute inset-0 border border-accent/10 transform rotateY-0" />
        <div className="absolute inset-0 border border-accent/10 transform rotate-45" />
      </motion.div>

      {/* Floating diamond - bottom right */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotateZ: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[15%] w-12 h-12 border border-accent/15 rotate-45"
      />

      {/* Small glowing orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[25%] w-4 h-4 rounded-full bg-accent/30 blur-sm"
      />

      {/* Horizontal floating line */}
      <motion.div
        animate={{ 
          x: [-50, 50, -50],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[5%] w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      {/* Concentric circles - bottom left */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -left-24"
      >
        <div className="w-48 h-48 rounded-full border border-accent/5" />
        <div className="absolute inset-4 rounded-full border border-accent/10" />
        <div className="absolute inset-8 rounded-full border border-accent/5" />
      </motion.div>

      {/* Vertical floating bar */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent"
      />

      {/* 3D Triangle outline */}
      <motion.div
        animate={{ 
          rotateY: [0, 360],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[40%] left-[30%]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-accent/10"
        />
      </motion.div>

      {/* Small dots pattern */}
      <div className="absolute top-[15%] right-[35%] grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut" 
            }}
            className="w-1 h-1 rounded-full bg-accent"
          />
        ))}
      </div>
    </div>
  );
};

export default Floating3DShapes;
