import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-primary-600 font-medium mb-4 animate-slide-up">
            👋 Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6 animate-slide-up">
            Chukka Prakash Reddy
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary-700 mb-4 animate-slide-up">
            Backend Developer
          </h2>
          
          {/* Tech Stack */}
          <p className="text-lg md:text-xl text-secondary-600 mb-8 animate-slide-up">
            Java • Spring Boot • Microservices • Cloud
          </p>
          
          {/* Tagline */}
          <p className="text-xl text-secondary-600 mb-12 max-w-3xl mx-auto animate-slide-up">
            "I design scalable backend systems and APIs with modern cloud technology."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <button className="btn-primary flex items-center justify-center gap-2">
              <FaDownload />
              Download Resume
            </button>
            <button 
              onClick={scrollToContact}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FaEnvelope />
              Contact Me
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up">
            <a
              href="https://www.linkedin.com/in/chukka-prakash-reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/prakashreddy412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:chukkaprakash@gmail.com"
              className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
