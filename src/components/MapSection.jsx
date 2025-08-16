import { FaMapMarkerAlt, FaGlobe, FaClock } from 'react-icons/fa'

const MapSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Location
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Based in Bangalore, India
              </h3>
              <p className="text-secondary-700 leading-relaxed mb-6">
                I'm currently located in Bangalore, the Silicon Valley of India, 
                where I work on cutting-edge backend technologies and collaborate 
                with talented developers from around the world.
              </p>
            </div>

            {/* Location Details */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">
                    Current Location
                  </h4>
                  <p className="text-secondary-700">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaGlobe className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">
                    Time Zone
                  </h4>
                  <p className="text-secondary-700">
                    IST (UTC +5:30)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FaClock className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 mb-1">
                    Availability
                  </h4>
                  <p className="text-secondary-700">
                    Open to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="font-semibold text-secondary-900 mb-2">
                Let's Connect!
              </h4>
              <p className="text-secondary-700 mb-4">
                Whether you're in Bangalore or anywhere else in the world, 
                I'm always open to discussing new opportunities and collaborations.
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="relative">
            <div className="bg-secondary-200 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074463490625!3d12.954459516588813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bangalore, India"
                className="w-full h-96"
              ></iframe>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-secondary-900">Bangalore</p>
                  <p className="text-sm text-secondary-600">Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
