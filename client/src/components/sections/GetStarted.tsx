import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Book, Github, Terminal } from "lucide-react";

export default function GetStarted() {
  return (
    <section id="get-started" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get Started with KHub</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start managing your Kubernetes clusters securely with these resources
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Book className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guides and API references
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://github.com/Nardis-Labs/khub', '_blank')}>
                  View Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                <Github className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Source Code</h3>
                <p className="text-muted-foreground mb-4">
                  Explore and contribute to the project
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://github.com/Nardis-Labs/khub', '_blank')}>
                  GitHub Repository
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Terminal className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
                <p className="text-muted-foreground mb-4">
                  Get up and running in minutes
                </p>
                <Button variant="outline" className="w-full" onClick={() => window.open('https://github.com/Nardis-Labs/khub', '_blank')}>
                  Installation Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
