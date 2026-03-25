import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  public data = {
    hero: {
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
      frontend: ['Angular (14, 17)', 'TypeScript', 'JavaScript']
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
        techStack: ['Java', 'Spring Boot', 'LDAP', 'PostgreSQL']
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
}
