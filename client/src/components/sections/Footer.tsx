import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">KHub</h3>
            <p className="text-sm text-muted-foreground">
              Open source Kubernetes management platform for enterprise teams
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/Nardis-Labs/khub" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/Nardis-Labs/khub" className="text-sm text-muted-foreground hover:text-foreground">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <SiGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
