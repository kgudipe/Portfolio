import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    <div className="space-y-6 flex flex-col items-start md:flex-1">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium">Email</h4>
                                <p className="text-muted-foreground">
                                    <a
                                        href="mailto:kgudipe@ncsu.edu"
                                        className="hover:text-primary transition-colors"
                                    >
                                        kgudipe@ncsu.edu
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium">Phone</h4>
                                <p className="text-muted-foreground">
                                    <a
                                        href="tel:+19195619381"
                                        className="hover:text-primary transition-colors"
                                    >
                                        +1 (919) 561-9381
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground">
                                    San Diego, CA
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 md:pt-2 md:flex-1 md:text-left">
                        <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
                        <div className="flex space-x-6 justify-center md:justify-start">
                            <a
                                href="mailto:kgudipe@ncsu.edu"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Mail className="h-5 w-5" />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/koushik-gudipelly/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
