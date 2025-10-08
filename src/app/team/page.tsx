'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Github, Linkedin, Mail, Users, Briefcase } from 'lucide-react';

export default function TeamPage() {
  const members = {
    professor: [
      {
        name: 'Luis Fernando D\'Haro',
        role: 'Professor',
        image: '/luis.jpg',
        email: 'luisfernando.dharo@upm.es',
        linkedin: 'https://scholar.google.com/citations?user=SCFRL80AAAAJ&hl=en',
        github: '',
      }
    ],
    phd: [
      {
        name: 'Jaime Bellver Soler',
        role: 'PhD Student',
        image: '/jaime.jpeg',
        email: 'jaime.bellver@upm.es',
        linkedin: 'https://scholar.google.com/citations?user=wjA6pEUAAAAJ&hl=en',
      }
    ],
    researchers: [
      {
        name: 'Anmol Guragain',
        role: 'Research Assistant',
        image: '/anmol.jpeg',
        email: 'anmol.g@upm.es',
        linkedin: 'https://scholar.google.com/citations?user=c8B9URUAAAAJ',
      },
      {
        name: 'Samuel Ramos Varela',
        role: 'Research Assistant',
        image: '/samuel.jpeg',
        email: 's.rvarela@upm.es',
        linkedin: 'https://www.linkedin.com/in/samu-rv/?originalSubdomain=es',
      },
      {
        name: 'David Aragón Diaz',
        role: 'Research Assistant',
        image: '/david.jpg',
        email: 's.daviarag@ucm.es',
        linkedin: '',
      },
      {
        name: 'Long Lin',
        role: 'Research Assistant',
        image: '/long.png',
        email: 'long.lin@upm.es',
        linkedin: '',
      }
    ],
    interns: []
  };

  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-poppins)]">
      <Navbar />

      {/* Team Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our Team 👥
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the brilliant minds driving our research forward
            </p>
          </motion.div>

          {/* Professor */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Users className="mr-3" size={28} />
              Professor
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.professor.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-ios p-6 text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="member-img object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-gray-500 hover:text-gray-300 mb-4 block"
                    >
                      {member.email}
                    </a>
                  )}
                  <div className="flex justify-center space-x-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-[#404040] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-[#404040] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full border border-[#404040] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PhD Students */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Briefcase className="mr-3" size={28} />
              PhD Students
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.phd.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-ios p-6 text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="member-img object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{member.role}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-gray-500 hover:text-gray-300 mb-4 block"
                    >
                      {member.email}
                    </a>
                  )}
                  <div className="flex justify-center space-x-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-[#404040] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full border border-[#404040] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Assistants */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Research Assistants</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.researchers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-ios p-6 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="member-img object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-base font-semibold mb-1">{member.name}</h4>
                  <p className="text-gray-400 text-xs mb-2">{member.role}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-gray-500 hover:text-gray-300 mb-3 block truncate"
                    >
                      {member.email}
                    </a>
                  )}
                  <div className="flex justify-center space-x-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-[#404040] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full border border-[#404040] hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Interns */}
          {members.interns.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-8">Research Interns</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Intern cards would go here */}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      {/* Section Divider */}
      <div className="section-divider"></div>

      <footer className="py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 THAU-LUIS Research Group. All rights reserved.</p>
          <p className="mt-2">Universidad Politécnica de Madrid</p>
        </div>
      </footer>
    </div>
  );
}
