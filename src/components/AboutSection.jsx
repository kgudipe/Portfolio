import { BrainCircuit, Briefcase, Cloud, Code, User } from "lucide-react"



export const AboutSection = () => {
  return (
    <section id="aboutme" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">I’m a full-stack developer with experience building scalable, user-focused web applications and cloud-native systems. I specialize in React, Angular, Next.js, TypeScript, Node.js, Ruby on Rails, and modern DevOps workflows on AWS. With a strong foundation in both frontend engineering and backend architecture, I enjoy turning complex requirements into clean, performant, and intuitive digital experiences.</p>

            <p className="text-muted-foreground">I’ve worked on projects ranging from modernizing large academic platforms to developing AI-powered tools and distributed learning systems. I strive to create applications that are visually polished, technically robust, and designed with long-term maintainability in mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get in Touch</a>
              <a href="/Koushik_Gudipelly_Resume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
            </div>
          </div>


          <div className="grid grid-col-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">Building scalable and high-performing applications using React, Angular, Next.js, TypeScript, Node.js, and Ruby on Rails.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">Deploying and managing applications on AWS with CI/CD, containerization, and scalable cloud services.</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning & Distributed Systems</h4>
                  <p className="text-muted-foreground">Creating responsive and user-friendly websites using modern web technologies.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}