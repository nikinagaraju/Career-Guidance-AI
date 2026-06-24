import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative w-full aspect-video flex items-center justify-center overflow-hidden">
        <Image src="/hero-bg.png" alt="StrideLogic: Grounded in Data, Ascending in Career" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">StrideLogic</h1>
          <p className="text-xl md:text-2xl font-light">Grounded in Data, Ascending in Career.</p>
          <div className="flex gap-4 justify-center mt-6">
            <Link href="/dashboard"><Button size="lg" className="bg-primary hover:bg-blue-700 text-lg px-8">Start Your Ascent</Button></Link>
            <Link href="/ai-career-guide"><Button size="lg" variant="outline" className="bg-transparent hover:bg-white/20 text-white border-white text-lg px-8">AI Career Guide</Button></Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[{label: "Industries Covered", val: "50+"}, {label: "Interview Questions", val: "1000+"}, {label: "Success Rate", val: "95%"}, {label: "AI Support", val: "24/7"}].map((s, i) => (
              <div key={i}><h3 className="text-4xl font-bold">{s.val}</h3><p className="text-muted-foreground">{s.label}</p></div>
            ))}
        </div></div>
      </section>

      {/* 3. Professional Features Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Powerful Features For Your Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "AI-Powered Career Guidance", d: "Personalized advice, career path mapping, and skill gap analysis to ensure you stay ahead of market trends." },
              { t: "Interview Preparation", d: "Role-specific mock interviews with instant AI feedback, sentiment analysis, and confidence scoring." },
              { t: "Industry Insights", d: "Access real-time salary data, hiring trends, and competitive market intelligence reports." },
              { t: "Smart Resume Creation", d: "Build ATS-optimized resumes using intelligent formatting, keyword injection, and dynamic templates." }
            ].map((f, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-xl bg-gray-900/50 hover:border-primary transition-all">
                <h3 className="text-xl font-semibold mb-3">{f.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((t, i) => (
              <Card key={i} className="bg-background"><CardContent className="pt-6 flex flex-col items-center text-center">
                <Image src={t.image} alt={t.author} width={64} height={64} className="rounded-full mb-4 border-2 border-primary/20" />
                <p className="text-muted-foreground italic">&quot;{t.quote}&quot;</p>
                <p className="font-semibold mt-4">{t.author}</p>
              </CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Join thousands of professionals who are advancing their careers with AI-powered guidance.</p>
          <Link href="/dashboard"><Button size="lg" className="bg-white text-black hover:bg-gray-200">Start Your Journey Today →</Button></Link>
        </div>
      </section>
    </div>
  );
}