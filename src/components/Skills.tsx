"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Palette, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Web",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Fullstack JavaScript", level: 85 },
        { name: "Angular.js", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "React", level: 90 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Nest.js", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Microservices", level: 70 },
      ],
    },
    {
      title: "Base de Données",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Supabase", level: 85 },
        { name: "Administration BDD", level: 70 },
      ],
    },
    {
      title: "Langages",
      icon: Code,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C/C++", level: 65 },
      ],
    },
    {
      title: "Outils & DevOps",
      icon: Wrench,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 65 },
        { name: "UML", level: 75 },
      ],
    },
    {
      title: "Méthodologies",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Agile", level: 80 },
        { name: "Scrum", level: 75 },
        { name: "Travail d'équipe", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compétences Techniques
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 hover:bg-slate-700/70 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Centres d'Intérêt
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Football",
                icon: "⚽",
                color: "from-green-500 to-emerald-500",
              },
              {
                name: "Finance",
                icon: "💰",
                color: "from-yellow-500 to-orange-500",
              },
              {
                name: "Jeux Vidéo",
                icon: "🎮",
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "Voyage",
                icon: "✈️",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((interest, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl p-4 hover:bg-slate-700/70 transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`text-3xl mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {interest.icon}
                </div>
                <p className="text-white font-medium">{interest.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
