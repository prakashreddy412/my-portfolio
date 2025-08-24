import { FaJava, FaDatabase, FaCloud, FaDocker, FaGithub } from 'react-icons/fa'
import { SiSpringboot, SiHibernate, SiPostgresql, SiMysql, SiKubernetes, SiJenkins } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaJava className="text-2xl text-primary-600" />,
      skills: [
        { name: "Java", level: 95 },
        { name: "Kotlin", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <SiSpringboot className="text-2xl text-primary-600" />,
      skills: [
        { name: "Spring Boot", level: 95 },
        { name: "Spring Security", level: 90 },
        { name: "Hibernate", level: 85 },
        { name: "JPA", level: 90 },
        { name: "Spring Cloud", level: 80 }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: <FaCloud className="text-2xl text-primary-600" />,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-2xl text-primary-600" />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 80 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <FaGithub className="text-2xl text-primary-600" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Maven", level: 90 },
        { name: "Gradle", level: 80 },
        { name: "JUnit", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-secondary-900 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-secondary-900 text-center mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Microservices", "REST APIs", "GraphQL", "WebSockets", 
              "Message Queues", "Caching", "Load Balancing", "API Gateway",
              "Service Mesh", "Monitoring", "Logging", "Security",
              "Performance Optimization", "Code Review", "Agile", "Scrum"
            ].map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
