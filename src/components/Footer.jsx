import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/chukka-prakash-reddy",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaGithub size={20} />,
      name: "GitHub",
      url: "https://github.com/chukkaprakash",
      color: "hover:text-gray-800"
    },
    {
      icon: <FaEnvelope size={20} />,
      name: "Email",
      url: "mailto:prakashreddy412@gmail.com",
      color: "hover:text-red-600"
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Chukka Prakash Reddy
            </h3>
            <p className="text-secondary-300 mb-6 max-w-md">
              Backend Developer specializing in Java, Spring Boot, and cloud technologies. 
              Building scalable solutions for modern applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-secondary-400 transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-secondary-300">
              <p>Bangalore, Karnataka</p>
              <p>India</p>
              <a 
                href="mailto:prakashreddy412@gmail.com"
                className="hover:text-white transition-colors duration-200"
              >
                prakashreddy412@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              © {currentYear} Chukka Prakash Reddy. All rights reserved.
            </p>
            <p className="text-secondary-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
