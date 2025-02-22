import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const screenshots = [
  {
    title: "Dashboard Overview",
    description: "Comprehensive view of your Kubernetes cluster resources",
    image: "",
  },
  {
    title: "Cluster Resource Deep Dive",
    description: "Intuitive interface for viewing cluster resources",
    image: "",
  },
  {
    title: "Resource Management",
    description: "Take action with guardrails in place.",
    image: "",
  },
  {
    title: "Custom Exec Plugins",
    description: "Create and run custom commands on your cluster's pods in a safe and secure manner.",
    image: "",
  },
];

export default function Interface() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 overflow-hidden bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a look at KHub's intuitive interface designed for secure Kubernetes access by enterprise teams.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <Card className="mx-4">
                      <CardContent className="p-6">
                        <div className="aspect-video relative mb-4">
                          <img
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                        <p className="text-muted-foreground">{screenshot.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}