
import Link from "next/link"
import { Button } from "../ui/button"

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            Ready to Start Your <span className="text-primary">Flooring Project?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your project needs, explore the right flooring solutions, and
            receive a custom quote tailored specifically to your commercial space.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
