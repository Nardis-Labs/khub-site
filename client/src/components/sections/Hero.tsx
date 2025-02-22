import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Secure Kubernetes UI for
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}Network Isolated{" "}
            </span>
            Environments
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            KHub is an open-source Kubernetes UI designed to run in-cluster, providing secure access to your control plane with minimal network exposure.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9"
              alt="Kubernetes Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}