import { useState, useEffect } from 'react'
import { FaTimes, FaRocket, FaCode, FaClock, FaEnvelope } from 'react-icons/fa'

const ComingSoon = ({ isOpen, onClose, projectTitle }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    if (!isOpen) return

    // Set target date (30 days from now)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen])

  if (!isOpen) return null

     return (
     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
       {/* Backdrop */}
       <div 
         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
         onClick={onClose}
       ></div>
       
       {/* Modal */}
       <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mt-16 mb-8 animate-fadeIn">
         {/* Top Border with Project Name */}
         <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-t-2xl">
           <div className="flex items-center justify-between">
             <h3 className="text-lg font-semibold truncate">
               {projectTitle}
             </h3>
             <button
               onClick={onClose}
               className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-200 shadow-lg flex-shrink-0"
             >
               <FaTimes size={16} />
             </button>
           </div>
         </div>

        {/* Content */}
        <div className="relative">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                <FaRocket size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-2">Coming Soon!</h2>
              <p className="text-primary-100 text-lg">
                {projectTitle} is under development
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            {/* Status */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FaCode />
                In Development
              </div>
              <p className="text-gray-600 text-lg">
                We're working hard to bring you an amazing experience. 
                The project is currently in active development and will be ready soon!
              </p>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="bg-primary-50 text-primary-600 rounded-lg p-4">
                  <div className="text-2xl font-bold">{countdown.days}</div>
                  <div className="text-sm text-gray-600">Days</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary-50 text-primary-600 rounded-lg p-4">
                  <div className="text-2xl font-bold">{countdown.hours}</div>
                  <div className="text-sm text-gray-600">Hours</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary-50 text-primary-600 rounded-lg p-4">
                  <div className="text-2xl font-bold">{countdown.minutes}</div>
                  <div className="text-sm text-gray-600">Minutes</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary-50 text-primary-600 rounded-lg p-4">
                  <div className="text-2xl font-bold">{countdown.seconds}</div>
                  <div className="text-sm text-gray-600">Seconds</div>
                </div>
              </div>
            </div>

            {/* Features Preview */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaClock />
                What to Expect
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Modern UI/UX</h4>
                    <p className="text-sm text-gray-600">Beautiful and intuitive user interface</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Responsive Design</h4>
                    <p className="text-sm text-gray-600">Works perfectly on all devices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Performance Optimized</h4>
                    <p className="text-sm text-gray-600">Fast loading and smooth interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-900">Advanced Features</h4>
                    <p className="text-sm text-gray-600">Cutting-edge functionality</p>
                  </div>
                </div>
              </div>
            </div>

                         {/* Call to Action */}
             <div className="text-center">
               <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                 <h4 className="font-semibold mb-2 flex items-center justify-center gap-2">
                   <FaEnvelope />
                   Stay Updated
                 </h4>
                 <p className="text-primary-100 mb-4">
                   Get notified when the project goes live!
                 </p>
                 <button 
                   onClick={() => {
                     const element = document.querySelector('#contact')
                     if (element) {
                       element.scrollIntoView({ behavior: 'smooth' })
                     }
                     onClose()
                   }}
                   className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-2 px-6 rounded-lg transition-colors duration-200"
                 >
                   Contact Me
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   )
}

export default ComingSoon
