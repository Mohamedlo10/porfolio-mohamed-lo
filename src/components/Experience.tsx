'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire Développeur Backend",
      company: "Engy-partners",
      location: "Dakar",
      period: "Juin 2025 - Sept. 2025",
      type: "Stage",
      description: "Développement d'une application backend de wallet",
      technologies: ["FastAPI", "PostgreSQL", "Microservices"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Développement d'appli Mobile nommée Amkaa",
      company: "Amkaa",
      location: "Dakar",
      period: "Août 2025",
      type: "Freelance",
      description: "Développement mobile d'une appli de réservation de restaurants",
      technologies: ["React Native", "Supabase"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Développement d'appli Mobile",
      company: "Mafalia",
      location: "Dakar",
      period: "Août 2025",
      type: "Prestation",
      description: "Développement d'une application de gestion de restaurants",
      technologies: ["React Native", "Supabase"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Stagiaire Développeur Web",
      company: "Yabalma",
      location: "Paris",
      period: "Sept. 2024 - Juil. 2025",
      type: "Stage (Télétravail)",
      description: "Développement d'un dashboard de supervision pour application mobile",
      technologies: ["Next.js", "Supabase"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Stagiaire Développeur Fullstack",
      company: "IT Experts & Associés SARL",
      location: "Dakar",
      period: "Mai 2024 - Sept. 2024",
      type: "Stage",
      description: "Développement d'une application de gestion scolaire (Orkidé)",
      technologies: ["Angular", "Nest.js"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Président Adjoint du Pôle IT",
      company: "Enactus ESP",
      location: "Dakar",
      period: "Nov. 2024 - Oct. 2025",
      type: "Leadership",
      description: "Accompagnement des différents pôles et projets dans leur mission",
      technologies: ["Management", "Coordination"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Président Adjoint Commission Culturelle",
      company: "CEE (Comité Exécutif des Étudiants)",
      location: "ESP, Dakar",
      period: "Juin 2024 - Mai 2025",
      type: "Leadership",
      description: "Investissement au sein de la communauté polytechnicienne",
      technologies: ["Organisation", "Événements"],
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-slate-900 z-10`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
