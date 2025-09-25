"use client"

import { ArrowRight, Mail, Phone } from "lucide-react"

const CTASection = () => {
  return (
    <section className="relative py-10 bg-black" id="contact">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Plan the present.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Build the future.
            </span>
          </h2>
          <p className="text-sm text-gray-300 mb-6 max-w-xl mx-auto">
            Ready to transform your product development? Join thousands of teams already building better products with Pixelora.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <button 
            onClick={() => window.open('https://app.pixelora.com', '_blank')}
            className="bg-white text-black hover:bg-gray-100 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center"
          >
            Get started
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button 
            onClick={() => window.open('mailto:hello@pixelora.com', '_blank')}
            className="border border-gray-600 text-white hover:bg-gray-900 px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300"
          >
            Contact sales
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
          <div className="text-center">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xs font-semibold text-white mb-1">Email us</h3>
            <p className="text-gray-400 text-xs">hello@pixelora.com</p>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-xs font-semibold text-white mb-1">Call us</h3>
            <p className="text-gray-400 text-xs">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="pt-6 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <h4 className="font-semibold text-white mb-2 text-xs">Features</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Plan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Build</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2 text-xs">Product</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Method</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2 text-xs">Company</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2 text-xs">Resources</h4>
              <ul className="space-y-1 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Developers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-800 text-center text-gray-500 text-xs">
            <p>&copy; 2024 Pixelora. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
