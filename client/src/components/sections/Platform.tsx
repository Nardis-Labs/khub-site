import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
                <img
                  src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1"
                  alt="Platform Team"
                  className="rounded-lg mb-6"
                />
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
                <img
                  src="https://images.unsplash.com/photo-1521830101529-057b1dfd9784"
                  alt="Team Collaboration"
                  className="rounded-lg mb-6"
                />
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
