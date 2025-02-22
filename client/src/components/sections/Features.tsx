import { motion } from "framer-motion";
import { Shield, Terminal, Database, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Fine-Grained Access Control",
    description: "Built-in ABAC authorization model for granular control over cluster operations"
  },
  {
    icon: Terminal,
    title: "Custom Pod Exec Plugins",
    description: "Create and manage custom pod execution plugins for secure operations"
  },
  {
    icon: Database,
    title: "MySQL Topology Visualization",
    description: "Automatically generate and document complex MySQL replication topologies"
  },
  {
    icon: Users,
    title: "Team-Centric Design",
    description: "Enable platform teams to manage resources securely with minimal network exposure"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            KHub provides essential tools for secure Kubernetes management, from resource visualization to automated topology documentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}