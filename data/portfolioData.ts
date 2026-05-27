export type Lang = "en" | "es";

type Localized<T> = Record<Lang, T>;

export type PortfolioContent = {
  nav: { label: string; href: string }[];
  languageLabel: string;
  hero: {
    eyebrow: string;
    name: string;
    roles: string[];
    value: string;
    summary: string;
    ctas: { projects: string; cv: string; contact: string };
    status: string;
    carouselHint: string;
  };
  photos: {
    src: string;
    alt: string;
    label: string;
    caption: string;
    treatment: "original" | "performance";
  }[];
  stats: { value: string; label: string }[];
  about: {
    kicker: string;
    title: string;
    body: string[];
    strengthsTitle: string;
    strengths: string[];
    opportunitiesTitle: string;
    opportunities: string;
  };
  experience: {
    kicker: string;
    title: string;
    items: {
      company: string;
      role: string;
      period: string;
      bullets: string[];
      highlights: string[];
    }[];
  };
  skills: {
    kicker: string;
    title: string;
    groups: { title: string; items: string[] }[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    items: {
      name: string;
      description: string;
      repo: string;
      demo?: string;
      thumbnail: string;
      technologies: string[];
      signal: string;
    }[];
    buttons: { repo: string; demo: string };
  };
  education: {
    kicker: string;
    title: string;
    items: { title: string; institution: string; period: string; note?: string }[];
    volunteeringTitle: string;
    volunteering: string[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  footer: string;
};

const shared = {
  cvFiles: [
    {
      path: "/cv/CV-Jesus-Gonzalo-Barba-Garcia-05-2026-ES.pdf",
      fileName: "CV-Jesus-Gonzalo-Barba-Garcia-05-2026-ES.pdf"
    },
    {
      path: "/cv/CV-Jesus-Gonzalo-Barba-Garcia-05-2026-EN.pdf",
      fileName: "CV-Jesus-Gonzalo-Barba-Garcia-05-2026-EN.pdf"
    }
  ],
  email: "jesubarba123@gmail.com",
  phone: "+51 999 629 969",
  linkedin: "https://www.linkedin.com/in/jesus-barba-a8b671242",
  github: "https://github.com/jesubarba123"
};

const photos: Localized<PortfolioContent["photos"]> = {
  en: [
    {
      src: "/images/jesus-formal.jpg",
      alt: "Formal black and white portrait of Jesús Gonzalo Barba García in an office setting.",
      label: "Formal portrait",
      caption: "Executive signal",
      treatment: "original"
    },
    {
      src: "/images/jesus-lifestyle.jpg",
      alt: "Outdoor lifestyle portrait of Jesús Gonzalo Barba García.",
      label: "Original version",
      caption: "Lifestyle frame",
      treatment: "performance"
    }
  ],
  es: [
    {
      src: "/images/jesus-formal.jpg",
      alt: "Retrato formal en blanco y negro de Jesús Gonzalo Barba García en un entorno de oficina.",
      label: "Retrato formal",
      caption: "Señal ejecutiva",
      treatment: "original"
    },
    {
      src: "/images/jesus-lifestyle.jpg",
      alt: "Retrato lifestyle en exterior de Jesús Gonzalo Barba García.",
      label: "Versión original",
      caption: "Marco lifestyle",
      treatment: "performance"
    }
  ]
};

export const portfolioData: {
  shared: typeof shared;
  content: Localized<PortfolioContent>;
} = {
  shared,
  content: {
    en: {
      nav: [
        { label: "Profile", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
      ],
      languageLabel: "ES",
      hero: {
        eyebrow: "AI recruiting / Talent intelligence / Business automation",
        name: "Jesús Gonzalo Barba García",
        roles: [
          "AI Recruiter",
          "IT Talent Acquisition Specialist",
          "Talent Data Analyst",
          "Talent Intelligence Builder"
        ],
        value: "I build high-precision talent engines with AI, data and automation.",
        summary:
          "A data-driven HR professional focused on IT recruiting, candidate experience, people analytics and scalable automation for modern talent operations.",
        ctas: {
          projects: "View projects",
          cv: "Download CVs",
          contact: "Contact"
        },
        status: "Upcoming Master's Degree in Data Science, ML and AI",
        carouselHint: "Portrait carousel"
      },
      photos: photos.en,
      stats: [
        { value: "40h", label: "manual CV-formatting hours saved per person" },
        { value: "35%", label: "reduction in hiring time through automated flows" },
        { value: "370+", label: "employees supported in end-to-end talent operations" },
        { value: "50/mo", label: "recruiting processes managed at peak volume" }
      ],
      about: {
        kicker: "Profile",
        title: "Talent acquisition with the rhythm of data, automation and business impact.",
        body: [
          "I specialize in end-to-end acquisition for high-demand technology roles across software engineering, web, mobile, data science, data engineering, MLOps, DevOps, IT support, blockchain, fintech and videogame development.",
          "My edge is a hybrid operating model: recruiting craft, analytical thinking, automation and AI-assisted workflow design. I use indicators, dashboards and structured processes to improve speed, accuracy and hiring experience.",
          "My next professional chapter is focused on scaling talent intelligence, HR automation and data science applied to workforce decisions."
        ],
        strengthsTitle: "Core strengths",
        strengths: [
          "Full-cycle IT recruitment",
          "Talent KPI analysis and dashboards",
          "AI-assisted workflow automation",
          "Candidate and hiring manager experience",
          "Process improvement and product ownership"
        ],
        opportunitiesTitle: "Target opportunities",
        opportunities:
          "AI Recruiting, IT Talent Acquisition, Talent Intelligence, People Analytics, HR automation and data-driven talent operations."
      },
      experience: {
        kicker: "Track record",
        title: "Operational horsepower across recruiting, analytics and automation.",
        items: [
          {
            company: "10 Pearls LATAM",
            role: "Talent Acquisition Specialist",
            period: "2025 - Present",
            bullets: [
              "Own end-to-end talent acquisition for high-demand technology roles across engineering, data, MLOps, DevOps, support, blockchain, fintech and videogame profiles.",
              "Build longlists for internal and external hiring managers and coordinate client-facing recruiting processes.",
              "Conduct competency-based interviews, prepare job profiles and manage recruiting indicators in Excel and Power BI."
            ],
            highlights: [
              "Product Owner for an AI profile recommendation solution.",
              "Led CV-format automation that saved 40 manual hours per person and improved recruiting time by 25%."
            ]
          },
          {
            company: "10 Pearls LATAM",
            role: "Bilingual IT Recruiter",
            period: "2024 - 2025",
            bullets: [
              "Managed bilingual full-cycle recruiting for technical roles and collaborated with internal and external stakeholders.",
              "Automated routine steps with Power Automate, including notifications, approvals and reminders.",
              "Prepared Power BI views and Excel trackers to monitor onboarding progress, response times and ticket status."
            ],
            highlights: [
              "Reduced time-to-hire by 35% through automated screening and onboarding flows.",
              "Coordinated onboarding sessions, team trainings and feedback loops."
            ]
          },
          {
            company: "WIGO Motors - GACSA Perú",
            role: "Talent Acquisition / HR Analyst",
            period: "2023 - 2024",
            bullets: [
              "Managed end-to-end talent acquisition for more than 370 employees across operational and strategic roles.",
              "Maintained HR and ATS records, documented resolutions and supported workforce planning with leadership.",
              "Built Power Automate flows, Power BI views and Excel trackers for onboarding, response times and process status."
            ],
            highlights: [
              "Improved filtering accuracy by 40% through candidate scoring models and reporting.",
              "Managed up to 50 recruiting processes per month.",
              "Developed a Python machine learning model to reduce high-turnover hires."
            ]
          },
          {
            company: "WIGO Motors - GACSA Perú",
            role: "Human Resources Intern",
            period: "2021 - 2023",
            bullets: [
              "Supported employees and managers through shared services, HR tools, documented FAQs and process guides.",
              "Maintained data integrity in spreadsheets and records while supporting screening, interviews and onboarding.",
              "Prepared internal communications, psychometric tests, reference checks and hiring compliance documentation."
            ],
            highlights: [
              "Implemented practical process improvements with templates, checklists and standardized email responses."
            ]
          }
        ]
      },
      skills: {
        kicker: "Toolbox",
        title: "A high-performance mix of talent, data and automation skills.",
        groups: [
          {
            title: "Talent acquisition",
            items: [
              "IT recruitment",
              "Competency-based interviews",
              "Job profiling",
              "LinkedIn Recruiter",
              "Bumeran",
              "Hiring Room",
              "Greenhouse",
              "ATS optimization"
            ]
          },
          {
            title: "Data and KPIs",
            items: [
              "Power BI",
              "Advanced Excel",
              "Recruiting funnels",
              "Time-to-hire",
              "Time-to-fill",
              "Quality of hire",
              "Early turnover",
              "Cost per hire"
            ]
          },
          {
            title: "Automation and AI",
            items: [
              "OpenAI",
              "ChatGPT",
              "Power Automate",
              "Make",
              "n8n",
              "API integration",
              "Prompt engineering",
              "Business automation"
            ]
          },
          {
            title: "Analytics and coding",
            items: [
              "Python",
              "Data science basics",
              "Web scraping",
              "R",
              "Database management",
              "CV parsing",
              "Talent analytics"
            ]
          },
          {
            title: "Leadership signals",
            items: [
              "Strategic thinking",
              "Crisis management",
              "Creative problem solving",
              "Data-driven decisions",
              "Team leadership",
              "Scrum fundamentals"
            ]
          },
          {
            title: "Languages",
            items: ["Spanish native", "English C1", "French basic"]
          }
        ]
      },
      projects: {
        kicker: "GitHub projects",
        title: "Public builds with a talent-tech and analytics pulse.",
        intro:
          "Projects are based on the public repositories available in your GitHub profile. Visual thumbnails are custom placeholders so no external brand assets are copied.",
        items: [
          {
            name: "Pay Equity and Talent Attrition Risk",
            description:
              "An interactive people analytics visualization that combines pay equity signals, role complexity and attrition-risk indicators in a 3D Plotly experience.",
            repo: "https://github.com/jesubarba123/Pay-Equity-and-Talent-Attrition-Risk",
            demo: "https://jesubarba123.github.io/Pay-Equity-and-Talent-Attrition-Risk/",
            thumbnail: "/project-thumbnails/pay-equity-risk.svg",
            technologies: ["Python", "Plotly", "People Analytics", "Risk Modeling"],
            signal: "Public GitHub Pages visualization verified."
          },
          {
            name: "Open Resume Builder",
            description:
              "A static web app for uploading a CV, defining a target role, pasting a vacancy and generating an optimized editable resume.",
            repo: "https://github.com/jesubarba123/Open_Resume_Builder",
            demo: "https://jesubarba123.github.io/Open_Resume_Builder/",
            thumbnail: "/project-thumbnails/open-resume-builder.svg",
            technologies: ["HTML", "GitHub Pages", "CV automation", "Talent AI"],
            signal: "Public GitHub Pages demo verified."
          },
          {
            name: "Dashboard",
            description:
              "A dashboard example published as a static HTML experience, useful as a base for metrics, indicators and talent analytics views.",
            repo: "https://github.com/jesubarba123/Dashboard",
            demo: "https://jesubarba123.github.io/Dashboard/",
            thumbnail: "/project-thumbnails/dashboard.svg",
            technologies: ["HTML", "Dashboard UI", "GitHub Pages", "Analytics"],
            signal: "Public GitHub Pages demo verified."
          }
        ],
        buttons: {
          repo: "Repository",
          demo: "Live demo"
        }
      },
      education: {
        kicker: "Education",
        title: "Psychology foundation, data stack and AI-forward learning path.",
        items: [
          {
            title: "Master's Degree in Data Science, Machine Learning and AI",
            institution: "Universidad Científica del Sur",
            period: "Upcoming",
            note: "Provided by you as an upcoming academic step."
          },
          {
            title: "Bachelor in Psychology",
            institution: "Pontificia Universidad Católica del Perú",
            period: "Completed"
          },
          {
            title: "Python Programming and Database Management",
            institution: "Pacífico Business School",
            period: "Certification / coursework"
          },
          {
            title: "Python for Data Science",
            institution: "Pontificia Universidad Católica del Perú",
            period: "Certification / coursework"
          },
          {
            title: "R for Data Science",
            institution: "UNAM",
            period: "Certification / coursework"
          },
          {
            title: "Power BI and Excel for Analysis",
            institution: "Americar Academy",
            period: "Certification / coursework"
          },
          {
            title: "Business Process Automation",
            institution: "IA Masters Automation",
            period: "Certification / coursework"
          },
          {
            title: "HR and People Analytics",
            institution: "Humanos Reales",
            period: "Certification / coursework"
          },
          {
            title: "Intermediate Python",
            institution: "DataCamp",
            period: "Certification / coursework"
          },
          {
            title: "Scrum Fundamentals",
            institution: "LinkedIn Learning",
            period: "Certification / coursework"
          }
        ],
        volunteeringTitle: "Volunteering",
        volunteering: [
          "PUCP Faculty of Psychology - Python support for thesis research",
          "Yanapakuy - Academic and recreational support for children",
          "AESI - Workplace inclusion promotion and support"
        ]
      },
      contact: {
        kicker: "Contact",
        title: "Let's build a sharper talent engine.",
        body:
          "Open to conversations around AI recruiting, talent intelligence, people analytics, HR automation and data-driven hiring operations.",
        email: shared.email,
        phone: shared.phone,
        linkedin: shared.linkedin,
        github: shared.github,
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          submit: "Open email draft",
          success: "Your email draft is ready in your default mail app."
        }
      },
      footer: ""
    },
    es: {
      nav: [
        { label: "Perfil", href: "#about" },
        { label: "Experiencia", href: "#experience" },
        { label: "Habilidades", href: "#skills" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" }
      ],
      languageLabel: "EN",
      hero: {
        eyebrow: "AI recruiting / Talent intelligence / Business automation",
        name: "Jesús Gonzalo Barba García",
        roles: [
          "AI Recruiter",
          "IT Talent Acquisition Specialist",
          "Talent Data Analyst",
          "Talent Intelligence Builder"
        ],
        value: "Construyo motores de talento de alta precisión con IA, datos y automatización.",
        summary:
          "Profesional de RRHH basado en datos, enfocado en reclutamiento TI, experiencia del candidato, people analytics y automatización escalable para operaciones modernas de talento.",
        ctas: {
          projects: "Ver proyectos",
          cv: "Descargar CVs",
          contact: "Contactar"
        },
        status: "Próximo Master's Degree en Data Science, ML y AI",
        carouselHint: "Carrusel de retrato"
      },
      photos: photos.es,
      stats: [
        { value: "40h", label: "horas manuales ahorradas por persona en formato de CV" },
        { value: "35%", label: "reducción del tiempo de contratación con flujos automatizados" },
        { value: "370+", label: "colaboradores soportados en operaciones de talento" },
        { value: "50/mes", label: "procesos de selección gestionados en volumen máximo" }
      ],
      about: {
        kicker: "Perfil",
        title: "Adquisición de talento con ritmo de datos, automatización e impacto de negocio.",
        body: [
          "Me especializo en adquisición de talento end to end para roles tecnológicos de alta demanda en software, web, mobile, ciencia de datos, ingeniería de datos, MLOps, DevOps, soporte TI, blockchain, fintech y videojuegos.",
          "Mi diferencial combina criterio de reclutamiento, pensamiento analítico, automatización y diseño de flujos impulsados por IA. Uso indicadores, dashboards y procesos estructurados para mejorar velocidad, precisión y experiencia.",
          "Mi siguiente etapa profesional está enfocada en escalar talent intelligence, automatización de RRHH y ciencia de datos aplicada a decisiones de fuerza laboral."
        ],
        strengthsTitle: "Fortalezas clave",
        strengths: [
          "Reclutamiento TI de ciclo completo",
          "Análisis de KPIs de talento y dashboards",
          "Automatización de procesos con IA",
          "Experiencia del candidato y hiring manager",
          "Mejora de procesos y product ownership"
        ],
        opportunitiesTitle: "Oportunidades objetivo",
        opportunities:
          "AI Recruiting, IT Talent Acquisition, Talent Intelligence, People Analytics, automatización de RRHH y operaciones de talento basadas en datos."
      },
      experience: {
        kicker: "Trayectoria",
        title: "Potencia operativa en reclutamiento, analítica y automatización.",
        items: [
          {
            company: "10 Pearls LATAM",
            role: "Talent Acquisition Specialist",
            period: "2025 - Actualidad",
            bullets: [
              "Gestión end to end de adquisición de talento para roles tecnológicos de alta demanda en ingeniería, data, MLOps, DevOps, soporte, blockchain, fintech y videojuegos.",
              "Generación de longlists para hiring managers internos y externos y coordinación de procesos con clientes.",
              "Entrevistas basadas en competencias, elaboración de perfiles de puesto y manejo de indicadores en Excel y Power BI."
            ],
            highlights: [
              "Product Owner para una solución de recomendación de perfiles con Inteligencia Artificial.",
              "Liderazgo de automatización de formato de CVs que ahorró 40 horas manuales por persona y mejoró el tiempo de reclutamiento en 25%."
            ]
          },
          {
            company: "10 Pearls LATAM",
            role: "Bilingual IT Recruiter",
            period: "2024 - 2025",
            bullets: [
              "Gestión bilingüe de reclutamiento de ciclo completo para perfiles técnicos y colaboración con stakeholders internos y externos.",
              "Automatización de pasos rutinarios con Power Automate, incluyendo notificaciones, aprobaciones y recordatorios.",
              "Preparación de vistas en Power BI y trackers en Excel para monitorear onboarding, tiempos de respuesta y estado de tickets."
            ],
            highlights: [
              "Reducción del tiempo de contratación en 35% mediante flujos automatizados de selección e incorporación.",
              "Coordinación de sesiones de onboarding, capacitaciones y formularios de retroalimentación."
            ]
          },
          {
            company: "WIGO Motors - GACSA Perú",
            role: "Adquisición de Talento / Analista de RRHH",
            period: "2023 - 2024",
            bullets: [
              "Gestión end to end de adquisición de talento para más de 370 colaboradores en roles operativos y estratégicos.",
              "Mantenimiento de registros de RRHH/ATS, documentación de resoluciones y colaboración con liderazgo en planificación de fuerza laboral.",
              "Construcción de flujos en Power Automate, vistas en Power BI y trackers en Excel para onboarding, tiempos de respuesta y estado de procesos."
            ],
            highlights: [
              "Aumento de precisión de filtrado en 40% mediante modelos de puntuación de candidatos y reportes.",
              "Gestión de hasta 50 procesos de selección al mes.",
              "Desarrollo de modelo de Machine Learning en Python para reducir contrataciones de alta rotación."
            ]
          },
          {
            company: "WIGO Motors - GACSA Perú",
            role: "Practicante de Recursos Humanos",
            period: "2021 - 2023",
            bullets: [
              "Soporte a colaboradores y gerentes en servicios compartidos, herramientas de RRHH, FAQs documentadas y guías prácticas.",
              "Verificación de integridad de datos en hojas de cálculo y apoyo en preselección, entrevistas e incorporación.",
              "Redacción de comunicaciones internas, aplicación de pruebas psicométricas, verificaciones de referencias y documentación de contratación."
            ],
            highlights: [
              "Implementación de mejoras prácticas con plantillas, checklists y respuestas estandarizadas por correo."
            ]
          }
        ]
      },
      skills: {
        kicker: "Toolbox",
        title: "Una mezcla high-performance de talento, datos y automatización.",
        groups: [
          {
            title: "Adquisición de talento",
            items: [
              "Reclutamiento TI",
              "Entrevistas por competencias",
              "Perfiles de puesto",
              "LinkedIn Recruiter",
              "Bumeran",
              "Hiring Room",
              "Greenhouse",
              "Optimización ATS"
            ]
          },
          {
            title: "Datos y KPIs",
            items: [
              "Power BI",
              "Excel avanzado",
              "Embudos de reclutamiento",
              "Tiempo de contratación",
              "Tiempo de cobertura",
              "Calidad de contratación",
              "Rotación temprana",
              "Costo por contratación"
            ]
          },
          {
            title: "Automatización e IA",
            items: [
              "OpenAI",
              "ChatGPT",
              "Power Automate",
              "Make",
              "n8n",
              "Integración API",
              "Prompt engineering",
              "Automatización de negocio"
            ]
          },
          {
            title: "Analítica y código",
            items: [
              "Python",
              "Bases de ciencia de datos",
              "Web scraping",
              "R",
              "Gestión de bases de datos",
              "Análisis de CV",
              "Talent analytics"
            ]
          },
          {
            title: "Señales de liderazgo",
            items: [
              "Pensamiento estratégico",
              "Gestión de crisis",
              "Resolución creativa",
              "Decisiones basadas en datos",
              "Liderazgo de equipos",
              "Scrum fundamentals"
            ]
          },
          {
            title: "Idiomas",
            items: ["Español nativo", "Inglés C1", "Francés básico"]
          }
        ]
      },
      projects: {
        kicker: "Proyectos GitHub",
        title: "Builds públicos con pulso talent-tech y analytics.",
        intro:
          "Los proyectos se basan en los repositorios públicos disponibles en tu perfil de GitHub. Las miniaturas visuales son placeholders propios para no copiar assets de marcas externas.",
        items: [
          {
            name: "Pay Equity and Talent Attrition Risk",
            description:
              "Visualización interactiva de people analytics que combina señales de equidad salarial, complejidad del rol e indicadores de riesgo de fuga en una experiencia 3D con Plotly.",
            repo: "https://github.com/jesubarba123/Pay-Equity-and-Talent-Attrition-Risk",
            demo: "https://jesubarba123.github.io/Pay-Equity-and-Talent-Attrition-Risk/",
            thumbnail: "/project-thumbnails/pay-equity-risk.svg",
            technologies: ["Python", "Plotly", "People Analytics", "Modelo de riesgo"],
            signal: "Visualización pública en GitHub Pages verificada."
          },
          {
            name: "Open Resume Builder",
            description:
              "Aplicación web estática para subir un CV, definir un puesto objetivo, pegar una vacante y generar una versión optimizada y editable del CV.",
            repo: "https://github.com/jesubarba123/Open_Resume_Builder",
            demo: "https://jesubarba123.github.io/Open_Resume_Builder/",
            thumbnail: "/project-thumbnails/open-resume-builder.svg",
            technologies: ["HTML", "GitHub Pages", "Automatización CV", "Talent AI"],
            signal: "Demo pública en GitHub Pages verificada."
          },
          {
            name: "Dashboard",
            description:
              "Ejemplo de dashboard publicado como experiencia HTML estática, útil como base para métricas, indicadores y vistas de talent analytics.",
            repo: "https://github.com/jesubarba123/Dashboard",
            demo: "https://jesubarba123.github.io/Dashboard/",
            thumbnail: "/project-thumbnails/dashboard.svg",
            technologies: ["HTML", "Dashboard UI", "GitHub Pages", "Analytics"],
            signal: "Demo pública en GitHub Pages verificada."
          }
        ],
        buttons: {
          repo: "Repositorio",
          demo: "Demo"
        }
      },
      education: {
        kicker: "Educación",
        title: "Base en psicología, stack de datos y ruta de aprendizaje AI-forward.",
        items: [
          {
            title: "Master's Degree in Data Science, Machine Learning and AI",
            institution: "Universidad Científica del Sur",
            period: "Próximamente",
            note: "Dato proporcionado por ti como siguiente paso académico."
          },
          {
            title: "Bachiller en Psicología",
            institution: "Pontificia Universidad Católica del Perú",
            period: "Completado"
          },
          {
            title: "Programación Python y Gestión de Bases de Datos",
            institution: "Pacífico Business School",
            period: "Certificación / curso"
          },
          {
            title: "Python para la Ciencia de Datos",
            institution: "Pontificia Universidad Católica del Perú",
            period: "Certificación / curso"
          },
          {
            title: "R para Ciencia de Datos",
            institution: "UNAM",
            period: "Certificación / curso"
          },
          {
            title: "Power BI y Excel para análisis",
            institution: "Americar Academy",
            period: "Certificación / curso"
          },
          {
            title: "Automatización de Procesos de Negocio",
            institution: "IA Masters Automation",
            period: "Certificación / curso"
          },
          {
            title: "RRHH y People Analytics",
            institution: "Humanos Reales",
            period: "Certificación / curso"
          },
          {
            title: "Python intermedio",
            institution: "DataCamp",
            period: "Certificación / curso"
          },
          {
            title: "Scrum Fundamentals",
            institution: "LinkedIn Learning",
            period: "Certificación / curso"
          }
        ],
        volunteeringTitle: "Voluntariado",
        volunteering: [
          "Facultad de Psicología PUCP - Soporte en Python para investigación de tesis",
          "Yanapakuy - Apoyo académico y recreativo para niños",
          "AESI - Promoción y apoyo a la inclusión en el lugar de trabajo"
        ]
      },
      contact: {
        kicker: "Contacto",
        title: "Construyamos un motor de talento más preciso.",
        body:
          "Abierto a conversaciones sobre AI recruiting, talent intelligence, people analytics, automatización de RRHH y operaciones de selección basadas en datos.",
        email: shared.email,
        phone: shared.phone,
        linkedin: shared.linkedin,
        github: shared.github,
        form: {
          name: "Nombre",
          email: "Email",
          message: "Mensaje",
          submit: "Abrir correo",
          success: "Tu borrador de correo está listo en tu app de email."
        }
      },
      footer: ""
    }
  }
};
