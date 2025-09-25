"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  Code,
  Smartphone,
  Globe,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const projects = [
    {
      title: "Amkaa - App de Réservation de Restaurants",
      description:
        "Application mobile de réservation de restaurants permettant aux utilisateurs de découvrir des restaurants selon leur localisation, type de cuisine, budget et avis clients.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Supabase", "JavaScript"],
      type: "Mobile App",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      videoUrl:
        "https://vvkgkijzjazoehellugh.supabase.co/storage/v1/object/public/porfolio_video/Amkaa-presentation.mp4",
      githubUrl: "https://github.com/Mohamedlo10/amkaa",
      liveUrl: null,
      features: [
        "Géolocalisation des restaurants",
        "Système de réservation en temps réel",
        "Avis et notes des utilisateurs",
        "Filtres par cuisine et budget",
      ],
    },
    {
      title: "Mafalia - Gestion de Restaurants",
      description:
        "Application de gestion complète pour restaurants avec gestion des commandes, stock, et clients.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Supabase", "TypeScript"],
      type: "Mobile App",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      videoUrl:
        "https://vvkgkijzjazoehellugh.supabase.co/storage/v1/object/public/porfolio_video/Mafalia-presentation.mp4",
      githubUrl: "https://github.com/Mohamedlo10/mafalia",
      liveUrl: null,
      features: [
        "Gestion des commandes",
        "Suivi du stock",
        "Gestion des clients",
        "Tableau de bord analytique",
      ],
    },
    {
      title: "Dashboard de Supervision Yabalma",
      description:
        "Dashboard de supervision pour application mobile développé en télétravail avec une équipe internationale.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Supabase", "TypeScript"],
      type: "Web App",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      videoUrl:
        "https://vvkgkijzjazoehellugh.supabase.co/storage/v1/object/public/porfolio_video/yabalma-presentation.mp4",
      liveUrl: "https://yabalma-dashboard.vercel.app",
      features: [
        "Monitoring en temps réel",
        "Analytics avancées",
        "Interface responsive",
        "Travail collaboratif",
      ],
    },
    {
      title: "Orkidé - Gestion Scolaire",
      description:
        "Application complète de gestion scolaire développée avec Angular et Nest.js pour IT Experts & Associés.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Nest.js", "PostgreSQL"],
      type: "Web App",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      videoUrl: null,
      githubUrl: "https://github.com/Mohamedlo10/orkide",
      liveUrl: null,
      features: [
        "Gestion des étudiants",
        "Suivi des notes",
        "Planning des cours",
        "Communication parents-école",
      ],
    },
    {
      title: "Wallet Backend - Engy Partners",
      description:
        "Application backend de wallet avec architecture microservices utilisant FastAPI et PostgreSQL.",
      image: "/api/placeholder/600/400",
      technologies: ["FastAPI", "PostgreSQL", "Microservices"],
      type: "Backend",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      videoUrl: null,
      githubUrl: "https://github.com/Mohamedlo10/wallet-backend",
      liveUrl: null,
      features: [
        "Architecture microservices",
        "API RESTful",
        "Gestion des transactions",
        "Sécurité avancée",
      ],
    },
  ];

  // Fonction pour vérifier si le projet a une démo vidéo
  const hasVideoDemo = (project: any) => {
    return project.type === "Mobile App" || project.type === "Web App";
  };

  useEffect(() => {
    if (selectedProject !== null && videoRef.current) {
      // Try to play when modal opens. On mobile, user interaction is usually required —
      // having the play called after click that opens modal increases chance to play.
      const p = videoRef.current.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    } else if (selectedProject === null && videoRef.current) {
      try {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      } catch {}
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations à travers des démonstrations vidéo et des
            projets concrets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white mt-1`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Fonctionnalités :
                  </h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-400 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* Bouton démo vidéo - seulement pour Mobile App et Web App */}
                  {hasVideoDemo(project) && project.videoUrl && (
                    <button
                      onClick={() =>
                        setSelectedProject(
                          selectedProject === index ? null : index
                        )
                      }
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Voir la démo
                    </button>
                  )}

                  {/*   {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  )} */}
                </div>
              </div>

              {/* Video Modal - seulement pour les projets avec vidéo */}
              {selectedProject === index &&
                hasVideoDemo(project) &&
                project.videoUrl && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="bg-slate-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-gray-400 hover:text-white text-2xl"
                        >
                          ×
                        </button>
                      </div>

                      <div className="aspect-video bg-slate-700 rounded-lg overflow-hidden">
                        <video
                          ref={videoRef}
                          controls
                          className="w-full h-full"
                          preload="metadata"
                          playsInline
                          // @ts-ignore - webkit attribute for iOS
                          webkit-playsinline="true"
                          crossOrigin="anonymous"
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <button
                          onClick={() => {
                            const el = videoRef.current as any;
                            if (!el) return;
                            if (el.requestFullscreen) {
                              el.requestFullscreen().catch(() => {});
                            } else if (el.webkitEnterFullscreen) {
                              // iOS Safari native fullscreen for <video>
                              try {
                                el.webkitEnterFullscreen();
                              } catch {}
                            } else if (el.webkitRequestFullscreen) {
                              try {
                                el.webkitRequestFullscreen();
                              } catch {}
                            }
                          }}
                          className="px-4 md:hidden py-2 bg-slate-700/60 text-white rounded-md border border-slate-600 hover:bg-slate-700 transition"
                        >
                          Plein écran
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Intéressé par mon travail ?
            </h3>
            <p className="text-gray-300 mb-6">
              N'hésitez pas à me contacter pour discuter de vos projets ou pour
              toute collaboration.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Me contacter
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
