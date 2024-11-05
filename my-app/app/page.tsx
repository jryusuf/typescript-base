import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/ui/Footer"
import { Body } from "@/components/ui/Body"

export default function HomePage() {
  const features = [
    {
      icon: "🤖",
      title: "Advanced AI Insights",
      description: "Leverage cutting-edge machine learning to gain deep business insights."
    },
    {
      icon: "📊",
      title: "Data Visualization",
      description: "Transform complex data into intuitive, actionable visualizations."
    },
    {
      icon: "🚀",
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with unprecedented accuracy."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechInnovate",
      quote: "This AI platform has revolutionized our decision-making process.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, DataDrive Solutions",
      quote: "Unprecedented insights that have given us a competitive edge.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ]

  return (
    <>
      <Header />
      <Body>
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock the Power of AI for Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our AI-driven platform provides intelligent insights, predictive analytics,
              and data visualization to transform your business strategy.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powerful Features, Intelligent Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-background border rounded-lg">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-background border p-6 rounded-lg">
                  <p className="italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-primary text-primary-foreground p-16 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8">
              Start your AI-powered journey today with a free consultation.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </section>
        </div>
      </Body>
      <Footer />
    </>
  )
}
