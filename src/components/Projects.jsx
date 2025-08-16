import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaCloud, FaMobile } from 'react-icons/fa'
import ComingSoon from './ComingSoon'

const Projects = () => {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState('')
  const projects = [
    {
      title: "School Management System",
      description: "A comprehensive school management platform with student, teacher, and administrative modules. Features include attendance tracking, grade management, and communication tools.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      technologies: ["Spring Boot", "React", "PostgreSQL", "JWT", "Docker"],
      features: [
        "Multi-role authentication system",
        "Real-time notifications",
        "Report generation",
        "File upload and management"
      ],
      github: "https://github.com/chukkaprakash/school-management",
      live: "https://school-management-demo.com",
      category: "Full Stack"
    },
    {
      title: "Home Schedulers App",
      description: "A mobile application for scheduling and managing home services. Integrates with payment gateways and provides real-time tracking for service providers and customers.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
      technologies: ["Spring Boot", "React Native", "PostgreSQL", "Twilio", "Stripe"],
      features: [
        "Real-time scheduling system",
        "Payment integration",
        "Push notifications",
        "Service provider matching"
      ],
      github: "https://github.com/chukkaprakash/home-schedulers",
      live: "https://home-schedulers-app.com",
      category: "Mobile & Backend"
    },
    {
      title: "Staples Analysis Dashboard",
      description: "A business intelligence dashboard for analyzing sales data and market trends. Provides interactive visualizations and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Tableau", "Java Backend APIs", "PostgreSQL", "Python", "AWS"],
      features: [
        "Interactive data visualizations",
        "Automated report generation",
        "Real-time data processing",
        "Custom dashboard creation"
      ],
      github: "https://github.com/chukkaprakash/staples-dashboard",
      live: "https://staples-dashboard.com",
      category: "Data Analytics"
    },
    {
      title: "Library Management System",
      description: "A microservices-based library management system with distributed architecture. Handles book cataloging, member management, and lending operations.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
      technologies: ["Microservices", "Spring Cloud", "Docker", "Kubernetes", "MongoDB"],
      features: [
        "Microservices architecture",
        "Service discovery and load balancing",
        "Distributed tracing",
        "Cloud deployment ready"
      ],
      github: "https://github.com/chukkaprakash/library-management",
      live: "https://library-management-demo.com",
      category: "Microservices"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack":
        return <FaCode />
      case "Mobile & Backend":
        return <FaMobile />
      case "Data Analytics":
        return <FaDatabase />
      case "Microservices":
        return <FaCloud />
      default:
        return <FaCode />
    }
  }

  return (
    <section id="projects" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <FaGithub size={20} />
                    </a>
                    <button
                      onClick={() => {
                        setSelectedProject(project.title)
                        setComingSoonOpen(true)
                      }}
                      className="bg-white p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={20} />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-secondary-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-900 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-secondary-700 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    <FaGithub />
                    View Code
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProject(project.title)
                      setComingSoonOpen(true)
                    }}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Coming Soon Modal */}
      <ComingSoon 
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        projectTitle={selectedProject}
      />
    </section>
  )
}

export default Projects
