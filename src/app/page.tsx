'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, FlaskConical } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [projectFilter, setProjectFilter] = useState<'all' | 'previous' | 'current'>('all');

  const projects = [
    {
      title: '🧠 ASTOUND',
      description: 'A pathfinder EU project exploring artificial awareness grounded in the Attention Schema Theory. ASTOUND aims to create novel frameworks for understanding how artificial systems can exhibit attention-driven awareness.',
      status: 'current',
      year: '2022-Present',
    },
    {
      title: '🖼️ ASSIST',
      description: 'A booster EU project developing an intelligent AI-based guide tailored for enhancing the experience of museum visitors. ASSIST seeks to enrich cultural exploration through interactive, personalized AI guidance.',
      status: 'previous',
      year: '2022-2025',
    },
  ];

  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(p => p.status === projectFilter);

  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-poppins)]">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative w-64 h-64 mx-auto mb-8">
              <Image
                src="/thau_LUIS.png"
                alt="THAU-LUIS Research Group"
                width={256}
                height={256}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            THAU-LUIS Research Group
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-4xl mx-auto space-y-4"
          >
            <p>
              Welcome to <span className="text-yellow-400 font-semibold">LUIS</span>, the Language Understanding and Interactive Speech research group!
            </p>
            <p>
              We are part of the <span className="text-yellow-400 font-semibold">THAU</span> (Tecnología del Habla y Aprendizaje Automático) team at <span className="text-yellow-400 font-semibold">UPM</span> (Universidad Politécnica de Madrid). Our group focuses on advancing the fields of natural language understanding, interactive speech technologies, and artificial intelligence.
                  </p>
                </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <FlaskConical size={20} />
              <span>Explore Research</span>
                  </a>
                  <a
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
                  >
              <Mail size={20} />
              <span>Get in Touch</span>
                  </a>
                </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* About Our Research Section */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ios p-8 md:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              What We Do 🎯
            </h2>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              {/* Focus Areas */}
              <div>
                <p className="text-lg mb-4">
                  Our research group focuses on cutting-edge projects in <span className="font-semibold text-white">Speech AI</span>, <span className="font-semibold text-white">Language Processing</span>, <span className="font-semibold text-white">Multi-Modal Systems</span>, <span className="font-semibold text-white">Cultural & Art AI</span>, and promoting <span className="font-semibold text-white">Diversity</span> in artificial intelligence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 text-sm font-medium">
                    Speech AI
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 text-sm font-medium">
                    Language Processing
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 text-sm font-medium">
                    Multi-Modal AI
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 text-sm font-medium">
                    Cultural & Art AI
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/30 text-sm font-medium">
                    Diversity in AI
                  </span>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-lg mb-4">
                  We leverage state-of-the-art technologies including <span className="font-semibold text-white">PyTorch</span>, <span className="font-semibold text-white">Hugging Face</span>, <span className="font-semibold text-white">Node.js</span>, <span className="font-semibold text-white">RAGs</span>, <span className="font-semibold text-white">Vision-Language Models</span>, <span className="font-semibold text-white">Speech Foundation Models</span>, and deploy our solutions on <span className="font-semibold text-white">Azure</span> and <span className="font-semibold text-white">Google Cloud</span>.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    PyTorch
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    Hugging Face
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    RAGs
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    Vision-Language Models
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    Speech Foundation Models
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    Azure
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-sm font-medium">
                    Google Cloud
                  </span>
                </div>
              </div>

              {/* Publications */}
              <div>
                <p className="text-lg mb-4">
                  We actively publish our findings at top-tier conferences including <span className="font-semibold text-white">Interspeech</span>, <span className="font-semibold text-white">ICASSP</span>, <span className="font-semibold text-white">ASRU</span>, <span className="font-semibold text-white">IWSDS</span>, <span className="font-semibold text-white">LREC</span>, and many more prestigious venues.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-sm font-medium">
                    Interspeech
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-sm font-medium">
                    ICASSP
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-sm font-medium">
                    ASRU
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-sm font-medium">
                    IWSDS
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-sm font-medium">
                    LREC
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-sm font-medium">
                    + More
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6 border-t border-[#404040]">
                <p className="text-lg text-center mb-6">
                  Whether you&apos;re an <span className="font-semibold text-white">academic enthusiast</span> or a <span className="font-semibold text-white">development engineer</span>, we welcome you to join us! Share your resume and areas of interest through our <a href="#contact" className="text-yellow-400 hover:text-yellow-300 transition-colors underline decoration-dotted">contact section</a>, and explore our <a href="#projects" className="text-yellow-400 hover:text-yellow-300 transition-colors underline decoration-dotted">projects</a>, <a href="/papers" className="text-yellow-400 hover:text-yellow-300 transition-colors underline decoration-dotted">past papers</a>, and meet <a href="/team" className="text-yellow-400 hover:text-yellow-300 transition-colors underline decoration-dotted">our students and staff</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Research Projects 🔬
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Pushing the boundaries of artificial intelligence and machine learning
            </p>

            {/* Project Filter - Capsule Style */}
            <div className="project-toggle inline-flex">
              <button
                onClick={() => setProjectFilter('all')}
                className={`capsule ${projectFilter === 'all' ? 'active' : ''}`}
              >
                All Projects
              </button>
              <button
                onClick={() => setProjectFilter('current')}
                className={`capsule ${projectFilter === 'current' ? 'active' : ''}`}
              >
                Current
              </button>
              <button
                onClick={() => setProjectFilter('previous')}
                className={`capsule ${projectFilter === 'previous' ? 'active' : ''}`}
              >
                Previous
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
            <motion.div
                key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-ios p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full border border-[#404040] bg-[#1a1a1a]">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center text-sm">
                  <span className={`px-3 py-1 rounded-full ${
                    project.status === 'current' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {project.status === 'current' ? '🟢 Active' : '✓ Completed'}
                      </span>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch 📧
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Interested in collaboration or joining our team?
            </p>
            </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-ios p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="mt-1" size={20} />
              <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:luisfernando.dharo@upm.es"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      luisfernando.dharo@upm.es
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hiring Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-ios p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">We&apos;re Hiring! 🚀</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                  <p className="font-medium mb-2">PhD Position</p>
                  <p className="text-sm text-gray-400">1 position available</p>
                </div>
                <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#404040]">
                  <p className="font-medium mb-2">Research Intern</p>
                  <p className="text-sm text-gray-400">2 positions available</p>
                </div>
                  </div>
                  <button
                onClick={() => window.location.href = 'mailto:luisfernando.dharo@upm.es'}
                className="btn-primary w-full mt-6"
              >
                Apply Now
                  </button>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center card-ios p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              Interested in our research?
            </h3>
            <p className="text-gray-400 mb-6">
              We&apos;re always looking for talented researchers and collaborators passionate about AI and machine learning.
            </p>
            <button
              onClick={() => window.location.href = 'mailto:luisfernando.dharo@upm.es'}
              className="btn-secondary"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 THAU-LUIS Research Group. All rights reserved.</p>
          <p className="mt-2">Universidad Politécnica de Madrid</p>
        </div>
      </footer>
    </div>
  );
}