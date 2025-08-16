import { FaCode, FaCloud, FaDatabase, FaServer } from 'react-icons/fa'

const About = () => {
  const expertise = [
    {
      icon: <FaCode className="text-3xl text-primary-600" />,
      title: "Backend Development",
      description: "Expert in Java, Spring Boot, and microservices architecture"
    },
    {
      icon: <FaCloud className="text-3xl text-primary-600" />,
      title: "Cloud Technologies",
      description: "Proficient in AWS and Azure cloud platforms"
    },
    {
      icon: <FaDatabase className="text-3xl text-primary-600" />,
      title: "Database Design",
      description: "Experience with PostgreSQL, MySQL, and NoSQL databases"
    },
    {
      icon: <FaServer className="text-3xl text-primary-600" />,
      title: "System Architecture",
      description: "Designing scalable and maintainable backend systems"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
              Backend Developer & Cloud Enthusiast
            </h3>
            
            <p className="text-secondary-700 leading-relaxed">
              I'm a passionate backend developer with expertise in Java, Spring Boot, and cloud technologies. 
              With a strong foundation in software engineering principles, I specialize in building scalable, 
              high-performance backend systems that power modern applications.
            </p>
            
            <p className="text-secondary-700 leading-relaxed">
              My journey in software development has been driven by a curiosity for solving complex problems 
              and creating robust solutions. I enjoy working with microservices architecture, designing APIs, 
              and implementing cloud-native solutions that can handle real-world scale.
            </p>
            
            <p className="text-secondary-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">5+</div>
                <div className="text-sm text-secondary-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">6+</div>
                <div className="text-sm text-secondary-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-secondary-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
