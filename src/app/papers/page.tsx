'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function PapersPage() {
  const papers = [
    {
      title: 'Multilingual Speech Emotion Recognition for Iberian Languages: A Generative AI Approach with LLMs and Data Augmentation Techniques',
      authors: 'J Bellver-Soler, A Guragain, S Ramos-Varela, R Córdoba, LF D\'Haro',
      venue: 'Available at SSRN 5244228',
      link: 'https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=5244228',
      year: '2024',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-poppins)]">
      <Navbar />

      {/* Papers Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Publications 📄
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Latest research contributions from our team
            </p>
          </motion.div>

          <div className="space-y-6">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-ios p-6 hover:border-[#606060]"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 leading-tight">{paper.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{paper.authors}</p>
                    <p className="text-gray-500 text-sm">{paper.venue}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      arXiv
                    </a>
                    <span className="text-xs text-center px-3 py-2 rounded border border-[#404040] bg-[#1a1a1a]">
                      {paper.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center card-ios p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              More publications coming soon!
            </h3>
            <p className="text-gray-400">
              Stay tuned for our latest research in AI, machine learning, and speech technologies.
            </p>
          </motion.div>
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
