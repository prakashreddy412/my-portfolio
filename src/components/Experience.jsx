import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: "Mercedes-Benz India (Client)",
      position: "Senior Backend Developer",
      duration: "May 2024 - Present",
      location: "Bangalore, India",
      description: "Leading backend development for enterprise applications using Java, kotlin, Spring Boot, and microservices architecture.",
      achievements: [
        "Designed and implemented RESTful APIs serving 1M+ daily requests",
        "Reduced API response time by 40% through optimization and caching",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines using Jenkins and Docker"
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "AWS", "PostgreSQL", "Docker"]
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Project - Associates",
      duration: "Feb 2024 - Prasent",
      location: "Bangalore, India",
      description: "Developed scalable backend solutions for e-commerce and fintech applications.",
      achievements: [
        "Built payment processing system handling $10M+ monthly transactions",
        "Implemented real-time notification system using WebSockets",
        "Designed database schema for multi-tenant architecture",
        "Collaborated with frontend team to deliver seamless user experience"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Redis", "Kubernetes", "Azure"]
    },
    {
      company: "Concert IDC",
      position: "Software Engineer",
      duration: "Oct 2020 - Dec 2023",
      location: "Chennai, India",
      description: "Started career in backend development, working on various startup projects.",
      achievements: [
        "Developed user authentication and authorization system",
        "Created REST APIs for mobile and web applications",
        "Implemented automated testing with 90% code coverage",
        "Participated in agile development processes"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit", "Git", "Jenkins"]
    },
    {
      company: "mandli technologies private limited",
      position: "Associate Software Engineer",
      duration: "Oct 2019 - sep 2020",
      description: "Started career in backend development, working on various startup projects.",
      achievements: [
        "Developed user authentication and authorization system",
        "Created REST APIs for mobile and web applications",
        "Implemented automated testing with 90% code coverage",
        "Participated in agile development processes"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit", "Git", "Jenkins"]
    },
    {
      company: "Invensis Technologies",
      position: "Process Excutive",
      duration: "May 2018 - Jun 2019",
      description: "Started career in backend development, working on various startup projects.",
      achievements: [
        "Developed user authentication and authorization system",
        "Created REST APIs for mobile and web applications",
        "Implemented automated testing with 90% code coverage",
        "Participated in agile development processes"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit", "Git", "Jenkins"]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-primary-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-white text-xl" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-secondary-900">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-primary-600 font-medium mt-2 md:mt-0">
                      <FaCalendar className="mr-2" />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="flex items-center text-secondary-600 mb-3">
                    <FaBriefcase className="mr-2" />
                    <span className="font-semibold">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-secondary-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-secondary-700">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
