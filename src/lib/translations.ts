export type Language = 'es' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    services: string;
    experience: string;
    education: string;
    contact: string;
    bookConsultation: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bookAppointment: string;
    viewServices: string;
    consultationBadge: string;
    response24h: string;
    yearsExperience: string;
    satisfiedClients: string;
    currentPosition: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    consultService: string;
    taxAdvisory: {
      title: string;
      description: string;
      features: string[];
    };
    legalAdvisory: {
      title: string;
      description: string;
      features: string[];
    };
    internationalTax: {
      title: string;
      description: string;
      features: string[];
    };
    dataProtection: {
      title: string;
      description: string;
      features: string[];
    };
  };
  
  // Experience
  experience: {
    title: string;
    subtitle: string;
    positions: {
      [key: string]: {
        position: string;
        company: string;
        location: string;
        type: string;
        description: string;
      };
    };
  };
  
  // Education
  education: {
    title: string;
    subtitle: string;
    academicFormation: string;
    certifications: string;
    course: string;
    master: string;
    diploma: string;
    degree: string;
    certification: string;
    languages: string;
    professionalSkills: string;
    international: string;
  };
  
  // Contact
  contact: {
    title: string;
    subtitle: string;
    contactInfo: string;
    email: string;
    phone: string;
    location: string;
    whyChoose: string;
    reasons: string[];
    requestConsultation: string;
    name: string;
    consultationType: string;
    message: string;
    privacyPolicy: string;
    callNow: string;
    consultationTypes: {
      [key: string]: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    privacyPolicy: string;
    legalNotice: string;
  };
  
  // Common
  common: {
    present: string;
    fullTime: string;
    partTime: string;
    freelance: string;
    consultation: string;
    hybrid: string;
    remote: string;
    skills: string;
    readMore: string;
    readLess: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      experience: 'Experiencia',
      education: 'Formación',
      contact: 'Contacto',
      bookConsultation: 'Reservar Consulta'
    },
    hero: {
      title: 'Asesoría Fiscal y Jurídica Profesional',
      subtitle: 'Asesoría Fiscal',
      description: 'Senior Lawyer en Andersen Spain con amplia experiencia en derecho tributario, fiscalidad internacional y asesoría jurídica integral para empresas y particulares.',
      bookAppointment: 'Reservar Cita',
      viewServices: 'Ver Servicios',
      consultationBadge: 'Consulta profesional',
      response24h: 'Respuesta en 24h',
      yearsExperience: 'Años Experiencia',
      satisfiedClients: 'Clientes Satisfechos',
      currentPosition: 'Senior Lawyer - Andersen in Spain'
    },
    services: {
      title: 'Servicios Profesionales',
      subtitle: 'Ofrezco servicios integrales de asesoría fiscal y jurídica adaptados a las necesidades específicas de cada cliente, con un enfoque personalizado y profesional.',
      consultService: 'Consultar servicio',
      taxAdvisory: {
        title: 'Asesoría Fiscal',
        description: 'Planificación fiscal, declaraciones de impuestos, optimización tributaria y cumplimiento normativo.',
        features: ['Impuesto sobre la Renta', 'IVA y otros tributos', 'Planificación fiscal', 'Revisión de declaraciones']
      },
      legalAdvisory: {
        title: 'Asesoría Jurídica',
        description: 'Consultoría legal integral en diversas áreas del derecho con enfoque especializado.',
        features: ['Derecho civil', 'Derecho mercantil', 'Contratos', 'Resolución de conflictos']
      },
      internationalTax: {
        title: 'Fiscalidad Internacional',
        description: 'Especialización en tributación internacional, convenios de doble imposición y estructuras fiscales.',
        features: ['Convenios internacionales', 'Precios de transferencia', 'Residencia fiscal', 'Estructuración fiscal']
      },
      dataProtection: {
        title: 'Protección de Datos',
        description: 'Asesoramiento en RGPD, privacidad digital y cumplimiento normativo en protección de datos.',
        features: ['Implementación RGPD', 'Auditorías de privacidad', 'Políticas de privacidad', 'Formación en protección de datos']
      }
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Trayectoria profesional consolidada en prestigiosos despachos de abogados y firmas de asesoría fiscal, con especialización en derecho tributario y fiscalidad internacional.',
      positions: {
        'andersen': {
          position: 'Senior Lawyer',
          company: 'Andersen in Spain',
          location: 'Madrid, España',
          type: 'Tiempo completo',
          description: 'Asesoramiento fiscal y jurídico integral a empresas multinacionales y clientes de alto patrimonio.'
        },
        'blaw': {
          position: 'Abogado y Asesor fiscal',
          company: 'B LAW & TAX',
          location: 'Madrid, España',
          type: 'Tiempo completo',
          description: 'Gestión integral de carteras de clientes, planificación fiscal y asesoramiento jurídico especializado.'
        },
        'freelance': {
          position: 'Asesor fiscal',
          company: 'Freelance',
          location: 'Híbrido',
          type: 'Freelance',
          description: 'Servicios de consultoría fiscal independiente, especialización en impuesto sobre la renta y legislación tributaria.'
        }
      }
    },
    education: {
      title: 'Formación y Certificaciones',
      subtitle: 'Formación académica sólida y especialización continua en las últimas tendencias del derecho tributario y la fiscalidad internacional.',
      academicFormation: 'Formación Académica',
      certifications: 'Certificaciones',
      course: 'Curso especializado',
      master: 'Máster',
      diploma: 'Diploma',
      degree: 'Grado',
      certification: 'Certificación',
      languages: 'Certificación de idiomas',
      professionalSkills: 'Habilidades profesionales',
      international: 'Certificación internacional'
    },
    contact: {
      title: 'Contacto Profesional',
      subtitle: '¿Necesita asesoramiento fiscal o jurídico? Póngase en contacto conmigo para una consulta personalizada. Primera consulta gratuita.',
      contactInfo: 'Información de Contacto',
      email: 'Email',
      phone: 'Teléfono',
      location: 'Ubicación',
      whyChoose: '¿Por qué elegir mis servicios?',
      reasons: [
        'Más de 5 años de experiencia especializada',
        'Formación continua en fiscalidad internacional',
        'Enfoque personalizado para cada cliente',
        'Respuesta rápida y comunicación directa',
        'Primera consulta completamente gratuita'
      ],
      requestConsultation: 'Solicitar Consulta Gratuita',
      name: 'Nombre',
      consultationType: 'Tipo de consulta',
      message: 'Mensaje',
      privacyPolicy: 'Acepto la política de privacidad y el tratamiento de mis datos personales para la gestión de esta consulta.',
      callNow: 'Llamar Ahora',
      consultationTypes: {
        '': 'Seleccione el tipo de consulta',
        'fiscal': 'Asesoría Fiscal',
        'juridica': 'Asesoría Jurídica',
        'internacional': 'Fiscalidad Internacional',
        'proteccion-datos': 'Protección de Datos',
        'otro': 'Otro'
      }
    },
    footer: {
      description: 'Servicios profesionales de asesoría fiscal y jurídica con más de 5 años de experiencia en derecho tributario y fiscalidad internacional.',
      servicesTitle: 'Servicios',
      contactTitle: 'Contacto',
      rights: 'Todos los derechos reservados.',
      privacyPolicy: 'Política de Privacidad',
      legalNotice: 'Aviso Legal'
    },
    common: {
      present: 'Presente',
      fullTime: 'Tiempo completo',
      partTime: 'Tiempo parcial',
      freelance: 'Freelance',
      consultation: 'Consultoría',
      hybrid: 'Híbrido',
      remote: 'Remoto',
      skills: 'Habilidades',
      readMore: 'Leer más',
      readLess: 'Leer menos'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      bookConsultation: 'Book Consultation'
    },
    hero: {
      title: 'Professional Tax & Legal Advisory',
      subtitle: 'Tax Advisory',
      description: 'Senior Lawyer at Andersen Spain with extensive experience in tax law, international taxation, and comprehensive legal advisory for businesses and individuals.',
      bookAppointment: 'Book Appointment',
      viewServices: 'View Services',
      consultationBadge: 'Professional consultation',
      response24h: '24h response',
      yearsExperience: 'Years Experience',
      satisfiedClients: 'Satisfied Clients',
      currentPosition: 'Senior Lawyer - Andersen in Spain'
    },
    services: {
      title: 'Professional Services',
      subtitle: 'I offer comprehensive tax and legal advisory services tailored to the specific needs of each client, with a personalized and professional approach.',
      consultService: 'Consult service',
      taxAdvisory: {
        title: 'Tax Advisory',
        description: 'Tax planning, tax returns, tax optimization and regulatory compliance.',
        features: ['Income Tax', 'VAT and other taxes', 'Tax planning', 'Tax return review']
      },
      legalAdvisory: {
        title: 'Legal Advisory',
        description: 'Comprehensive legal consulting in various areas of law with specialized focus.',
        features: ['Civil law', 'Commercial law', 'Contracts', 'Dispute resolution']
      },
      internationalTax: {
        title: 'International Taxation',
        description: 'Specialization in international taxation, double taxation treaties and tax structures.',
        features: ['International treaties', 'Transfer pricing', 'Tax residence', 'Tax structuring']
      },
      dataProtection: {
        title: 'Data Protection',
        description: 'GDPR advisory, digital privacy and regulatory compliance in data protection.',
        features: ['GDPR implementation', 'Privacy audits', 'Privacy policies', 'Data protection training']
      }
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Consolidated professional trajectory in prestigious law firms and tax advisory firms, with specialization in tax law and international taxation.',
      positions: {
        'andersen': {
          position: 'Senior Lawyer',
          company: 'Andersen in Spain',
          location: 'Madrid, Spain',
          type: 'Full-time',
          description: 'Comprehensive tax and legal advisory to multinational companies and high net worth clients.'
        },
        'blaw': {
          position: 'Lawyer and Tax Advisor',
          company: 'B LAW & TAX',
          location: 'Madrid, Spain',
          type: 'Full-time',
          description: 'Comprehensive client portfolio management, tax planning and specialized legal advisory.'
        },
        'freelance': {
          position: 'Tax Advisor',
          company: 'Freelance',
          location: 'Hybrid',
          type: 'Freelance',
          description: 'Independent tax consulting services, specialization in income tax and tax legislation.'
        }
      }
    },
    education: {
      title: 'Education & Certifications',
      subtitle: 'Solid academic background and continuous specialization in the latest trends in tax law and international taxation.',
      academicFormation: 'Academic Background',
      certifications: 'Certifications',
      course: 'Specialized course',
      master: 'Master\'s',
      diploma: 'Diploma',
      degree: 'Degree',
      certification: 'Certification',
      languages: 'Language certification',
      professionalSkills: 'Professional skills',
      international: 'International certification'
    },
    contact: {
      title: 'Professional Contact',
      subtitle: 'Need tax or legal advice? Contact me for a personalized consultation. First consultation free.',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      whyChoose: 'Why choose my services?',
      reasons: [
        'Over 5 years of specialized experience',
        'Continuous training in international taxation',
        'Personalized approach for each client',
        'Quick response and direct communication',
        'First consultation completely free'
      ],
      requestConsultation: 'Request Free Consultation',
      name: 'Name',
      consultationType: 'Consultation type',
      message: 'Message',
      privacyPolicy: 'I accept the privacy policy and the processing of my personal data for the management of this consultation.',
      callNow: 'Call Now',
      consultationTypes: {
        '': 'Select consultation type',
        'fiscal': 'Tax Advisory',
        'juridica': 'Legal Advisory',
        'internacional': 'International Taxation',
        'proteccion-datos': 'Data Protection',
        'otro': 'Other'
      }
    },
    footer: {
      description: 'Professional tax and legal advisory services with over 5 years of experience in tax law and international taxation.',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      legalNotice: 'Legal Notice'
    },
    common: {
      present: 'Present',
      fullTime: 'Full-time',
      partTime: 'Part-time',
      freelance: 'Freelance',
      consultation: 'Consulting',
      hybrid: 'Hybrid',
      remote: 'Remote',
      skills: 'Skills',
      readMore: 'Read more',
      readLess: 'Read less'
    }
  }
};

export function getTranslation(language: Language): Translations {
  return translations[language];
}
