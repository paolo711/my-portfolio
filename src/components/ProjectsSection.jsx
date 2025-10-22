import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Anisave",
    description: "A simple yet powerful tool designed to help farmers stay informed about real-time market prices for their crops. With Anisave, every Filipino farmer gains a partner in achieving a more secure and profitable harvest.",
    image: "/anisave.jpg",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://anisave.vercel.app/landing",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Davoice",
    description:
      "Elevate your product experience with actionable insights. Our platform makes gathering and analyzing feedback simple, elegant, and powerfully effective..",
    image: "/davoice.jpg",
    tags: ["Figma", "React", "Vite"],
    demoUrl: "https://www.figma.com/design/IVKCZ14HB71CIGtx8yDybR/Davoice?node-id=1023-16&p=f&t=IttFrmqToneGaaRp-0",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Recent works that highlight my focus on clean design, smooth performance, and intuitive user interaction.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/paolo711"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
