import { PageHeroSection } from "@/components/sections/page-hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/common/container";
import { ArrowRight, CalendarDays, Mail, MapPin, MessageSquareText } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageHeroSection
        eyebrow="// CONTACT"
        title="Let's discuss your"
        textPrimarytitle="project."
        description="Tell us what you're building. Whether it's a custom AI product, an internal tool, or workflow automation, we'll help you shape the right path from idea to launch."
      />
    
      <section className="relative py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="space-y-4">
              <div className="card-shadow rounded-2xl border border-border/60 bg-card/55 p-6">
                <h2 className="text-lg font-semibold">Get in touch</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We usually respond within one business day.
                </p>

                <div className="mt-5 space-y-3">
                  <Link
                    href="mailto:hello@boffinblocks.com"
                    className="flex items-center gap-3 rounded-md border border-border/60 bg-background/40 
                    px-3 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/40"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    hello@boffinblocks.com
                  </Link>
                  <div className="flex items-center gap-3 rounded-md border border-border/60 bg-background/
                  40 px-3 py-2 text-sm text-foreground/90">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    Mon - Fri, 10:00 AM - 7:00 PM IST
                  </div>
                  <div className="flex items-center gap-3 rounded-md border border-border/60 bg-background/
                  40 px-3 py-2 text-sm text-foreground/90">
                    <MapPin className="h-4 w-4 text-primary" />
                    Remote-first, serving teams globally
                  </div>
                </div>
              </div>

              <div className="card-shadow rounded-2xl border border-border/60 bg-card/55 p-6">
                <h3 className="text-sm font-semibold tracking-wide text-foreground/90">
                  What to include
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>- Project goal and timeline</li>
                  <li>- Team size and stakeholders</li>
                  <li>- Existing tools or tech stack</li>
                </ul>
              </div>
            </aside>

            <section
              className="card-shadow rounded-2xl border border-border/60 bg-card/55 p-6 sm:p-8"
              aria-labelledby="contact-form-heading"
            >
              <div className="mb-6 flex items-center gap-2">
                <MessageSquareText className="h-5 w-5 text-primary" />
                <h2 id="contact-form-heading" className="text-lg font-semibold">
                  Project Inquiry Form
                </h2>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-foreground/90">
                      Full name
                    </label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-foreground/90">
                      Work email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm text-foreground/90">
                      Company
                    </label>
                    <Input id="company" name="company" placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm text-foreground/90">
                      Budget range
                    </label>
                    <Input id="budget" name="budget" placeholder="e.g. $5k - $20k" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-foreground/90">
                    Project details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share your goals, scope, and expected timeline..."
                    className="min-h-36"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted regarding your inquiry.
                  </p>
                  <Button
                    type="submit"
                    className="inline-flex h-11 items-center gap-2 border border-accent/45 bg-primary px-5 
                    text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Send Inquiry
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}
