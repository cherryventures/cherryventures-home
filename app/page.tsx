import Link from "next/link";
import Image from "next/image";
import CherryIcon from "@/assets/icons/cherryIcon";
import ArrowRightIcon from "@/assets/icons/arrowRight";
import Navbar from "@/components/Navbar/Navbar";
import Portfolio from "@/components/home/Portfolio";

const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Careers", href: "#" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="bg-background py-12 md:py-24 lg:py-32" id="about">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <Image
                src="/images/about.png"
                width={600}
                height={400}
                alt="About Image"
                priority
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Invest in and Build Web3 Projects
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  We are dedicated to investing in and building innovative Web3
                  projects that will shape the future of the world. We love APAC
                  and Women founders.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline hover:underline-offset-2"
                  prefetch={false}
                >
                  Learn More
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Portfolio />

        <section className="bg-muted py-12 md:py-24 lg:py-32" id="contact">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Let&apos;s Talk
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Have a project in mind or want to learn more about our
                  services? Get in touch with our team today.
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Address:</strong> Singapore, Dubai, New York
                  </p>
                  <p>
                    <strong>Twitter:</strong>{" "}
                    <a href="https://x.com/cherry_ventures">@cherry_ventures</a>
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="#">support@cherryventures.org</a>
                  </p>
                </div>
              </div>
              <Image
                src="/images/contact.png"
                width={600}
                height={400}
                alt="Contact Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background px-4 py-6 shadow-sm md:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CherryIcon className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium">
              &copy; 2025 Cherry Ventures
            </span>
          </div>
          <nav className="hidden space-x-4 md:flex">
            {FOOTER_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                prefetch={false}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
