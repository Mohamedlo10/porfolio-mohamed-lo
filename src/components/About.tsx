'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/50">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Élève ingénieur déterminé, sérieux et autonome. Élément moteur conscient du travail 
                qui l'attend, avec une passion pour le développement et les technologies modernes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Je me spécialise dans le développement fullstack avec JavaScript/TypeScript, 
                et j'ai une expérience solide avec les frameworks modernes comme React, Next.js, 
                Angular, et Node.js. Mon approche se concentre sur la création d'applications 
                performantes et centrées sur l'utilisateur.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-600/50 text-center">
                <User className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-semibold">21 ans</p>
                <p className="text-gray-400 text-sm">Sénégalais</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-600/50 text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Dakar</p>
                <p className="text-gray-400 text-sm">Sénégal</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                Formation
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">DIC Informatique</h4>
                  <p className="text-gray-400">École Supérieure Polytechnique de Dakar (ESP)</p>
                  <p className="text-sm text-purple-400">Oct. 2024 - En cours</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-lg font-semibold text-white">DUT Informatique</h4>
                  <p className="text-gray-400">École Supérieure Polytechnique de Dakar (ESP)</p>
                  <p className="text-sm text-cyan-400">Nov. 2022 - Juil. 2024 • Mention Bien</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-cyan-400 mr-3" />
                Langues
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">Wolof</span>
                  <span className="text-purple-400">Langue maternelle</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Français</span>
                  <span className="text-cyan-400">Courant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Anglais</span>
                  <span className="text-blue-400">Technique</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
