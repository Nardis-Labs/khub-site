import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Users, Circle, Database, Server } from "lucide-react";

// Animation variants for the flowing process
const flowVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
  }
};

// Animation variants for the central team circle
const centralCircleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 1
    }
  }
};

// Animation variants for the orbiting circles
const orbitingCircleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

// Animation variants for icons
const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Platform() {
  return (
    <section id="platform" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Built for Platform Teams</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empower your platform engineering team with tools designed for enterprise Kubernetes management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-48 relative mb-6 bg-background/50 rounded-lg overflow-hidden">
                  {/* Streamlined Operations Animation */}
                  <svg className="w-full h-full" viewBox="0 0 300 200">
                    {/* Primary flow path */}
                    <motion.path
                      d="M 50 100 C 100 100 150 50 200 100 C 250 150 300 100 350 100"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      variants={flowVariants}
                      initial="hidden"
                      animate="visible"
                    />

                    {/* Secondary flow paths */}
                    <motion.path
                      d="M 50 120 C 100 120 150 70 200 120 C 250 170 300 120 350 120"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth="1.5"
                      variants={flowVariants}
                      initial="hidden"
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                        transition: { 
                          duration: 3,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: 0.5
                        }
                      }}
                    />

                    <motion.path
                      d="M 50 80 C 100 80 150 30 200 80 C 250 130 300 80 350 80"
                      fill="none"
                      stroke="url(#gradient3)"
                      strokeWidth="1.5"
                      variants={flowVariants}
                      initial="hidden"
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                        transition: { 
                          duration: 2.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          delay: 1
                        }
                      }}
                    />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.3 }} />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.7 }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.05 }} />
                      </linearGradient>
                    </defs>

                    {/* Interactive icons */}
                    <motion.g
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="pulse"
                    >
                      <motion.g whileHover={{ scale: 1.1 }}>
                        <circle cx="50" cy="100" r="20" className="fill-background stroke-primary" strokeWidth="2"/>
                        <foreignObject x="35" y="85" width="30" height="30">
                          <Server className="h-5 w-5 text-primary" />
                        </foreignObject>
                      </motion.g>

                      <motion.g whileHover={{ scale: 1.1 }}>
                        <circle cx="150" cy="100" r="20" className="fill-background stroke-primary" strokeWidth="2"/>
                        <foreignObject x="135" y="85" width="30" height="30">
                          <Database className="h-5 w-5 text-primary" />
                        </foreignObject>
                      </motion.g>

                      <motion.g whileHover={{ scale: 1.1 }}>
                        <circle cx="250" cy="100" r="20" className="fill-background stroke-primary" strokeWidth="2"/>
                        <foreignObject x="235" y="85" width="30" height="30">
                          <Activity className="h-5 w-5 text-primary" />
                        </foreignObject>
                      </motion.g>
                    </motion.g>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Streamlined Operations</h3>
                <p className="text-muted-foreground">
                  Automate routine tasks and enable self-service capabilities for development teams while maintaining security controls.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="h-48 relative mb-6 bg-background/50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central circle */}
                    <motion.div
                      className="relative"
                      variants={centralCircleVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Circle className="h-16 w-16 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={1.5} />
                      <Users className="h-8 w-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                      {/* Orbiting circles */}
                      {[...Array(5)].map((_, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={orbitingCircleVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="absolute top-1/2 left-1/2"
                          style={{
                            width: "120px",
                            height: "120px",
                          }}
                        >
                          <motion.div
                            animate={{
                              rotate: 360
                            }}
                            transition={{
                              duration: 8,
                              ease: "linear",
                              repeat: Infinity,
                              delay: index * -1.6
                            }}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "absolute",
                            }}
                          >
                            <div 
                              className="absolute h-8 w-8 rounded-full border-2 border-primary bg-background flex items-center justify-center"
                              style={{
                                left: "50%",
                                transform: "translateX(-50%)",
                              }}
                            >
                              <Users className="h-4 w-4 text-primary" />
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  Foster collaboration between platform and development teams with shared workflows and clear communication channels.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}