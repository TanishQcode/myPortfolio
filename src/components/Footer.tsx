import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center relative z-10">
      <div className="container-custom flex flex-col items-center">
        <p className="text-sm text-gray-500 mb-4 font-mono">
          Designed & Built by Tanishq Sharma <br /> Full Stack .NET Developer
        </p>
        <div className="flex gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/tanishqbug/"
            className="text-gray-500 hover:text-cyan-400"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/TanishQcode"
            className="text-gray-500 hover:text-cyan-400"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:emailfortanishq@gmail.com"
            className="text-gray-500 hover:text-cyan-400"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs text-gray-600">
          Copyright &copy; 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
