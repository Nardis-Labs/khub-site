import { motion } from "framer-motion";
import { Shield, Terminal, Users, IdCard, AppWindow } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Fine-Grained Access Control and OAuth2 as a First Class Citizen",
    description: "Built-in ABAC authorization model for granular control over cluster operations. Integration with OAuth2 providers for seamless authentication and SSO."
  },
  {
    icon: AppWindow,
    title: "Common K8s Actions with Guardrails",
    description: "Manage scaling, rolling restarts, and other common Kubernetes runbooks with guardrails in place."
  },
  {
    icon: Terminal,
    title: "Custom Pod Exec Plugins",
    description: "Create and manage custom pod execution plugins for secure operations"
  },
  {
    icon: Users,
    title: "Team-Centric Design",
    description: "Allow service teams to view and manage their own resources in a self-service manner, securely."
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
            <br />
            <br />
            Platform teams and service teams can use KHub to gain deep visibility into their Kubernetes clusters, while also being able to manage their own resources in a self-service manner.
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
              <Card style={{minHeight: "260px"}}>
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