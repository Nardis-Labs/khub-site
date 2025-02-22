import { motion } from "framer-motion";
import { Lock, Shield, Key } from "lucide-react";

export default function Security() {
  return (
    <section id="security" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Security-First Architecture
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Lock className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">In-Cluster Deployment</h3>
                  <p className="text-muted-foreground">
                    Runs within your Kubernetes cluster, minimizing network exposure to control planes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">ABAC Authorization</h3>
                  <p className="text-muted-foreground">
                    Fine-grained attribute-based access control for precise permission management.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Key className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Network Isolation</h3>
                  <p className="text-muted-foreground">
                    Designed for air-gapped and network-restricted environments without compromising functionality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}