import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  public currentLang = signal<'en' | 'id'>('en');

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'en' ? 'id' : 'en');
  }

  // --- ENGLISH DATA ---
  private dataEn = {
    hero: {
      greeting: "Hello, I'm",
      name: 'Fida Muhamad Rifqi',
      title: 'Backend Engineer (Fullstack Experience)',
      summary: 'Passionate Backend Engineer with 5+ years of experience specializing in Java, Spring Boot, system integration, and API development. Proven track record of delivering secure and scalable enterprise solutions in the banking industry.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact Me'
    },
    about: {
      paragraphs: [
        'I am a performance-driven Backend Engineer with over 5 years of hands-on experience designing, developing, and optimizing enterprise-grade applications. Specializing in Java and Spring Boot, I have a deep understanding of system integrations, microservices, and database optimization.',
        'Throughout my career in the banking sector, I have successfully led backend initiatives, from building cutting-edge REST APIs to integrating complex workflows and robust security measures. I thrive in Agile environments, collaborating seamlessly with cross-functional teams to troubleshoot critical production issues and deliver scalable architectures.',
        'Always eager to tackle new technical challenges, I continually explore emerging deployment patterns and architectures to elevate system reliability and performance.'
      ]
    },
    skills: {
      backend: ['Java (8, 17, 21)', 'Spring Boot (2.x, 3.x)', 'Apache Kafka', 'JasperReports'],
      databases: ['PostgreSQL', 'SQL Server', 'Oracle Database', 'MySQL'],
      tools: ['Git', 'Docker', 'CI/CD', 'Elastic', 'WinSCP', 'LDAP', 'JWT', 'Liquibase', 'Jira'],
      frontend: ['Angular (14, 17, 21)', 'TypeScript', 'JavaScript']
    },
    experience: [
      {
        company: 'PT Bank SMBC Indonesia Tbk',
        role: 'Fullstack Developer (Backend-Focused)',
        period: 'March 2020 – Present',
        description: 'Designed and maintained server-side applications using Spring Boot, developed REST APIs, optimized database queries, and handled system integrations for enterprise banking systems.',
        highlights: [
          'Led R&D as Technical Owner, designing and implementing a Filebeat sidecar architecture for robust log shipping across containerized environments.',
          'Developed robust backend modules using Spring Boot 3.0, driving complex business logic and multi-level procurement workflows with concurrent access prevention.',
          'Built and optimized dynamic SQL Server and Oracle schemas, greatly enhancing data retrieval performance.',
          'Integrated event-driven architectures using Kafka to streamline asynchronous processing and system responsiveness.',
          'Maintained high code quality by leveraging modular architecture, standardized error handling, and achieving 80%+ unit test coverage with SonarQube.',
          'Executed major platform upgrades across Java (8 to 21), Spring Boot (2 to 3), and Angular (14 to 17).'
        ]
      },
      {
        company: 'PT Bank Mandiri Tbk',
        role: 'Backend Developer',
        period: 'December 2019 – March 2020',
        description: 'Contributed to secure backend services and API development within an Agile team.',
        highlights: [
          'Engineered authentication backend services and designed secure login flows using Spring Boot.',
          'Developed responsive CRUD-based REST APIs enriched with precise validation and error handling.',
          'Integrated LDAP protocols to establish a secure, centralized authentication system.',
          'Architected PostgreSQL database schemas aligned with business logic needs.'
        ]
      },
      {
        company: 'Pilgrims of Hajj and Umrah',
        role: 'Analyst and Tester Intern',
        period: 'January 2020 – February 2020',
        description: 'Focused on system analysis, initial database design, and ensuring UX clarity.',
        highlights: [
          'Crafted entity-relationship diagrams (ERD) to support and structure core data management requirements.',
          'Translated stakeholder requirements into concise functional documentation.',
          'Executed manual test cases to identify bugs and verified resolutions to guarantee system stability.'
        ]
      },
      {
        company: 'Poltekkes Kemenkes Tasikmalaya',
        role: 'Tester Intern',
        period: 'November 2017 – January 2018',
        description: 'Validated application functionality during the digitalization of medical classifications.',
        highlights: [
          'Authored and executed manual test strategies to validate usability and data accuracy for ICD-10 systems.',
          'Documented system inconsistencies and collaborated directly with developers for timely remediation.'
        ]
      }
    ],
    projects: [
      {
        name: 'BIZTRIPS',
        description: 'A comprehensive web-based platform engineered to streamline and manage corporate business trip operations and approvals.',
        techStack: ['Java', 'Spring Boot 3.0', 'Filebeat', 'JasperReports', 'Angular 20', 'SQL Server']
      },
      {
        name: 'Front End System (FES)',
        description: 'A centralized logging solution enabling efficient log shipping from containerized applications utilizing a Filebeat sidecar architecture.',
        techStack: ['Java', 'Spring Boot 3.0', 'Filebeat', 'JasperReports', 'Oracle Database', 'Angular 19']
      },
      {
        name: 'PRISMA Procurement Workflow',
        description: 'A multi-level procurement approval system featuring extensive database locking mechanisms to prevent concurrent access issues.',
        techStack: ['Spring Boot 3.0', 'SQL Server', 'JasperReports', 'Angular 17']
      },
      {
        name: 'Automated Queuing Sub-Application',
        description: 'A branch-level customer queuing system integrating robust backend generation logic and thermal printer communications.',
        techStack: ['Java 21', 'Spring Boot 3.0', 'Angular 17']
      },
      {
        name: 'Mandiri Single Sign-On (SSO)',
        description: 'A secure, centralized authentication system and single sign-on flow integrating LDAP protocols to manage corporate identities and access control.',
        techStack: ['Java', 'Spring Boot', 'LDAP', 'PostgreSQL', 'JWT']
      }
    ],
    education: [
      {
        degree: 'S1 — Computer Science',
        institution: 'Universitas Nasional Pasim',
        period: '2016 – 2020',
        details: 'GPA 3.73/4.00 (Cumlaude)'
      },
      {
        degree: 'D3 — Medical Record',
        institution: 'Poltekkes Kemenkes Tasikmalaya',
        period: '2016 – 2019',
        details: 'GPA 3.71/4.00 (Cumlaude)'
      }
    ],
    contact: {
      email: 'muhrifqifida@gmail.com',
      linkedin: 'https://www.linkedin.com/in/fidamuhrifqi/',
      github: 'https://github.com/fidamuhrifqi'
    }
  };

  // --- INDONESIAN DATA ---
  private dataId = {
    hero: {
      greeting: 'Halo, saya',
      name: 'Fida Muhamad Rifqi',
      title: 'Backend Engineer (Pengalaman Fullstack)',
      summary: 'Backend Engineer yang penuh semangat dengan lebih dari 5 tahun pengalaman, berspesialisasi dalam Java, Spring Boot, integrasi sistem, dan pengembangan API. Memiliki rekam jejak terbukti dalam membangun solusi skala perusahaan (Enterprise) yang aman di industri perbankan.',
      ctaPrimary: 'Lihat Project',
      ctaSecondary: 'Hubungi Saya'
    },
    about: {
      paragraphs: [
        'Saya adalah seorang Backend Engineer yang berorientasi pada kinerja tinggi dengan lebih dari 5 tahun pengalaman langsung dalam merancang, mengembangkan, dan mengoptimalkan aplikasi skala perusahaan. Berspesialisasi dalam Java dan Spring Boot, saya memiliki pemahaman mendalam tentang integrasi antarsistem, microservices, dan optimalisasi database.',
        'Sepanjang karir saya di sektor perbankan perbankan, saya sukses memimpin berbagai inisiatif pengembangan backend, mulai dari membangun REST API canggih hingga mengintegrasikan alur kerja berlapis yang kompleks dan sistem keamanan yang kuat. Saya terbiasa dan cepat beradaptasi dalam lingkungan kerja Agile.',
        'Selalu bersemangat untuk menghadapi tantangan teknis baru, saya terus mempelajari dan mengeksplorasi tren dan arsitektur penggelaran (deployment) terkini untuk terus meningkatkan performa dan stabilitas sistem yang saya tangani.'
      ]
    },
    skills: this.dataEn.skills, // Keterampilan teknis bahasa universal
    experience: [
      {
        company: 'PT Bank SMBC Indonesia Tbk',
        role: 'Fullstack Developer (Fokus Backend)',
        period: 'Maret 2020 – Saat ini',
        description: 'Merancang dan memelihara aplikasi sisi server menggunakan Spring Boot, mengembangkan REST API, mengoptimalkan kueri database, dan menangani integrasi sistem perbankan.',
        highlights: [
          'Memimpin riset dan pengembangan (R&D) sebagai Technical Owner untuk mendesain arsitektur pengiriman log mandiri (Filebeat sidecar) pada ekosistem container/Docker.',
          'Mengembangkan berbagai modul backend menggunakan Spring Boot 3.0 yang mengendalikan alur logika persetujuan berjenjang dan mekanisme pencegahan akses serentak (concurrent access).',
          'Membangun serta mengoptimalkan skema dan query pada SQL Server & Oracle yang sangat meningkatkan kecepatan akses data.',
          'Menerapkan arsitektur berbasis event (Event-Driven) memanfaatkan Kafka guna memperlancar pemrosesan asinkron dan responsibilitas sistem.',
          'Menjaga kualitas rilis aplikasi (kode) rata-rata 80%+ pada unit testing SonarQube dengan membakukan pola arsitektur modular yang solid.',
          'Melakukan peningkatan besar ke arsitektur/versi platform terbaru: Java (8 ke 21), Spring Boot (2 ke 3), dan Angular (14 ke 17).'
        ]
      },
      {
        company: 'PT Bank Mandiri Tbk',
        role: 'Backend Developer',
        period: 'Desember 2019 – Maret 2020',
        description: 'Berkontribusi pada layanan keamanan sisi server (backend) dalam struktur tim Agile.',
        highlights: [
          'Melakukan pengembangan arsitektur otentikasi (login) dan API menggunakan ekosistem Spring Boot.',
          'Membuat puluhan layanan CRUD REST API yang diiringi oleh validasi error dan peringatan sistem yang presisi.',
          'Mengintegrasikan sistem dengan protokol akses LDAP untuk memfasilitasi autentikasi terpusat (SSO/Portal) pegawai.',
          'Merancang bangun skema tabel dan relasi pada database PostgreSQL.'
        ]
      },
      {
        company: 'Biro Perjalanan Haji dan Umroh',
        role: 'Intern (Analis & Penguji Jaminan Mutu)',
        period: 'Januari 2020 – Februari 2020',
        description: 'Fokus pada tahap analisis kebutuhan pengguna, rancangan sistem database, serta memastikan kejelasan antar muka pengguna (UX).',
        highlights: [
          'Mengonsep diagram aliran/relasi data (ERD) guna menstruktur seluruh siklus pendataan utama proyek.',
          'Menerjemahkan poin kebutuhan operasional dari para stakeholder ke sebuah dokumen fungsional terpadu.',
          'Menjalankan ratusan tes fungsional (manual testing) untuk mendeteksi *bugs* dan memverifikasi agar sistem siap dipasarkan.'
        ]
      },
      {
        company: 'Poltekkes Kemenkes Tasikmalaya',
        role: 'Intern (Software Tester)',
        period: 'November 2017 – Januari 2018',
        description: 'Membantu tahap validasi program pada proses ditalisasi klasifikasi dunia medis.',
        highlights: [
          'Menyusun skenario kelayakan untuk tes kegunaan sekaligus mengecek keakurasian data bagi kodifikasi ICD-10.',
          'Mendokumentasikan semua inkonversi serta berinteraksi langsung secara intens dengan pihak pengembang perangkat lunak agar cepat tertangani.'
        ]
      }
    ],
    projects: [
      {
        name: 'BIZTRIPS',
        description: 'Platform operasional perjalanan bisnis pegawai berskala perusahaan yang serba lengkap untuk menjadwalkan dan mengelola pengajuan secara terstruktur.',
        techStack: ['Java', 'Spring Boot 3.0', 'Filebeat', 'JasperReports', 'Angular 20', 'SQL Server']
      },
      {
        name: 'Front End System (FES)',
        description: 'Aplikasi terpusat yang difokuskan untuk memudahkan pelacakan rekam log internal (log shipping) server menggunakan arsitektur sidecar Filebeat.',
        techStack: ['Java', 'Spring Boot 3.0', 'Filebeat', 'JasperReports', 'Oracle Database', 'Angular 19']
      },
      {
        name: 'Alur Kerja Pengadaan PRISMA',
        description: 'Sistem alur penunjukan persetujuan barang yang difasilitasi dengan mekanisme "database locking" untuk menghalau konflik kueri serentak.',
        techStack: ['Spring Boot 3.0', 'SQL Server', 'JasperReports', 'Angular 17']
      },
      {
        name: 'Sub-Aplikasi Antrean Otomatis',
        description: 'Sistem pembuatan tiket antrean otomatis tingkat cabang yang terhubung dengan layanan logis *backend* dan perintah ke pencetak suhu (Thermal Printer).',
        techStack: ['Java 21', 'Spring Boot 3.0', 'Angular 17']
      },
      {
        name: 'Mandiri Single Sign-On (SSO)',
        description: 'Sistem autentikasi rahasia terpusat untuk alur masuk internal menggunakan koneksi LDAP yang mensortir kontrol atas privilage para pengguna.',
        techStack: ['Java', 'Spring Boot', 'LDAP', 'PostgreSQL', 'JWT']
      }
    ],
    education: [
      {
        degree: 'S1 — Ilmu Komputer',
        institution: 'Universitas Nasional Pasim',
        period: '2016 – 2020',
        details: 'IPK 3.73/4.00 (Cumlaude)'
      },
      {
        degree: 'D3 — Rekam Medis',
        institution: 'Poltekkes Kemenkes Tasikmalaya',
        period: '2016 – 2019',
        details: 'IPK 3.71/4.00 (Cumlaude)'
      }
    ],
    contact: this.dataEn.contact
  };

  // UI Strings specific to components (Dynamic Signal for translations)
  private uiEn = {
    navAbout: 'About',
    navSkills: 'Skills',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    titleAbout: 'About Me',
    titleSkills: 'Technical Skills',
    titleExperience: 'Work Experience',
    titleProjects: 'Noteworthy Projects',
    titleEducation: 'Education',
    titleContact: 'Get In Touch',
    subtitleContact: 'I\'m currently looking for new opportunities. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
    btnEmail: 'Copy Email',
    btnCopied: 'Email Copied!',
    labelBackend: 'Backend',
    labelFrontend: 'Frontend',
    labelDatabase: 'Databases',
    labelTools: 'DevOps & Tools'
  };

  private uiId = {
    navAbout: 'Tentang',
    navSkills: 'Keahlian',
    navExperience: 'Pengalaman',
    navProjects: 'Proyek',
    navContact: 'Kontak',
    titleAbout: 'Tentang Saya',
    titleSkills: 'Keahlian Teknis',
    titleExperience: 'Pengalaman Kerja',
    titleProjects: 'Proyek Penting',
    titleEducation: 'Pendidikan',
    titleContact: 'Hubungi Saya',
    subtitleContact: 'Saya sedang terbuka untuk peluang baru. Apabila Anda memiliki pertanyaan, tawaran menarik, atau sekadar ingin menyapa, saya akan berusaha merespons secepatnya!',
    btnEmail: 'Salin Email',
    btnCopied: 'Tersalin!',
    labelBackend: 'Backend',
    labelFrontend: 'Frontend',
    labelDatabase: 'Database',
    labelTools: 'DevOps & Tools'
  };

  // Computed signals
  public data = computed(() => this.currentLang() === 'en' ? this.dataEn : this.dataId);
  public ui = computed(() => this.currentLang() === 'en' ? this.uiEn : this.uiId);
}
