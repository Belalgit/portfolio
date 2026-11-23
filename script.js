const capabilities = [
  ['Executive Technology Leadership','Technology strategy · Engineering governance · Vendor & stakeholder management · Team leadership'],
  ['Cloud & Platform Engineering','AWS · OCI · Azure · Terraform · CloudFormation · High availability'],
  ['DevSecOps & Delivery','GitHub Actions · Jenkins · GitLab CI · CircleCI · AWS CodePipeline · Secure SDLC'],
  ['Containers & Orchestration','Docker · Kubernetes · GitOps · Harbor · Cloud-native architecture'],
  ['Cybersecurity & Assurance','IAM · VAPT · Wazuh · SIEM · Application security · API security'],
  ['Observability & Reliability','Prometheus · Grafana · ELK · Incident response · BCP/DR · Capacity planning'],
  ['FinTech & Compliance','Bangladesh Bank readiness · PCI DSS · ISO/IEC 27001 · Audit evidence · Risk management']
];

const experience = [
  [
    'Chief Technology Officer (CTO)',
    'PalmPay Fintech Ltd',
    'https://www.palmpay.com/',
    '2026 — Present',
    'Leading local technology strategy, engineering operations, cloud and infrastructure, cybersecurity, regulatory readiness, resilience, and cross-functional technology governance for a FinTech environment.'
  ],
  [
    'DevOps Engineering Manager',
    'Jatri',
    'https://jatri.co/',
    'Saafir',
    'https://saafir.co/',
    '2024 — 2026',
    'Managed 20+ DevOps projects, optimized infrastructure budgets, maintained 99.9% uptime and improved delivery speed by 25%.'
  ],
  [
    'System Engineer (Lead)',
    'ShopUp',
    'https://shopup.org/',
    '2023 — 2024',
    'Managed infrastructure across 13 projects supporting 400+ employees and business-critical services.'
  ],
  [
    'Senior System Engineer',
    'PayWell',
    'https://www.paywellonline.com/',
    '2022 — 2023',
    'Improved security compliance and reduced transaction errors while supporting payment technology operations.'
  ],
  [
    'Instructor',
    'CENTeR',
    'https://cisco.uiu.ac.bd/',
    '2018 — 2024',
    'Taught CCNA networking to 400+ students and conducted 30+ technical workshops covering networking, cybersecurity and Linux.'
  ]
];

const projects = [
  [
    'Cloud Infrastructure Modernization',
    'Cloud · Reliability',
    'Migrated applications and databases to cloud platforms with minimal downtime, reduced infrastructure cost and strengthened resilience.',
    'assets/diagrams/aws-infra-architecture.webp'
  ],
  [
    'Enterprise DevSecOps Pipeline',
    'Security · CI/CD',
    'Designed secure delivery pipelines integrating SAST, dependency analysis, secrets scanning, container scanning and DAST into engineering workflows.',
    'assets/diagrams/Enterprise-DevSecOps-pipeline.webp'
  ],
  [
    'FinTech Security & Regulatory Readiness',
    'Governance · FinTech',
    'Built evidence-driven security and compliance practices across cloud, infrastructure, application security, audit, BCP/DR and operational controls.',
    'assets/diagrams/Fintech-security-compliance.webp'
  ],
  [
    'Enterprise Data Lake Implementation',
    'AWS · Data Engineering',
    'Implemented a cloud data platform integrating MongoDB Atlas and Amazon RDS through AWS DMS, Amazon S3 and AWS Glue, enabling centralized analytics and data warehousing in Amazon Redshift.',
    'assets/diagrams/Datalake-infra-architecture.webp'
  ],
  [
    'Infrastructure as Code',
    'Terraform · Automation',
    'Automated cloud infrastructure provisioning with IaC, reducing deployment time by 40% and improving operational efficiency.',
    'assets/diagrams/Infrastructure-as-code.webp'
  ],
  [
    'OCI Resilient Architecture',
    'OCI · Architecture',
    'Architected resilient OCI infrastructure with availability-domain design, IAM controls and observability aligned to security requirements.',
    'assets/diagrams/OCI-infra-architecture.webp'
  ],
  [
    'Observability & Security Visibility',
    'SIEM · SRE',
    'Implemented monitoring and security visibility with Prometheus, Grafana, ELK and Wazuh to improve incident detection and operational response.',
    'assets/diagrams/cloud-infrastructure-modernization.webp'
  ]
];


const certifications = [
  ['CISA — ISACA', 'https://www.credly.com/badges/d5ba7e33-8f42-45cc-bfcc-ef9b29e96e78/public_url'],
  ['PECB Certified ISO/IEC 27001 Lead Auditor', 'YOUR_PECB_CERTIFICATE_URL'],
  ['AWS Certified Solutions Architect — Professional', 'https://www.credly.com/badges/40603554-a9db-4252-8211-883d6122ae59/public_url'],
  ['AWS Certified DevOps Engineer — Professional', 'https://www.credly.com/badges/c4d54baf-ef12-40dd-97f8-47a73eb78420/public_url'],
  ['AWS Certified SysOps Administrator — Associate', 'https://www.credly.com/badges/f5c88560-bf34-4b4f-9a54-8e860163b344/public_url'],
  ['AWS Certified Solutions Architect - Associate', 'https://www.credly.com/badges/ddae03b9-b6f7-4603-8e2b-fbaedd6b45e2/public_url'],
  ['Certified Kubernetes Administrator (CKA)', 'https://www.credly.com/badges/c36be3c2-ad29-472c-8373-8c6cb2053bd7/public_url'],
  ['Certified Calico Operator — AWS Expert', 'https://www.credly.com/badges/0436a951-3d7f-49b9-ae01-e187d8eba81c/public_url'],
  ['CCNA: Enterprise Networking, Security & Automation', 'https://www.credly.com/badges/6d5d8523-ee1f-46fa-8950-a5823b72c00e/public_url'],
  ['OCI 2025 Certified Architect Associate', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4EE37F1490DE62B506C3B1E8C51FF398E6592EC8461011A1FEE59576A023BAA4'],
  ['OCI 2025 Certified DevOps Professional', 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=B76EC8C34F52A1EBDE96F0C2658434F8BF046875BCB7A9EF0892D0C0A5BE9D96'],
  ['OCI 2025 Certified Multicloud Architect', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=761930ECEB6E43320BB6417E43D16054E631D10EBC6A97D8D3DE1DB3E8BB526D'],
  ['OCI 2025 Migration Architect Certified', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=81BF048648D9AFF5D0B0982DF5E2B070EFBDF3CED61CC81B9CE74A3D67F321D1'],
  ['OCI 2025 Certified Networking Professional', 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E804A52EE31C99F39150B2F750F69C6F49565896EAA93F3FABFD9B92B1DD2CFE'],
  ['OCI 2025 Certified Data Science Professional', 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=F6E7D6F68D71B0F79991003D523C51BA5371956EB34981622548034A3A9E44E1'],
  ['OCI 2025 Certified Observability Professional', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=F6693ECD26E6A1638A389890D47DA9F33D6D36D52DB94CBA143A8618BAED4A82'],
  ['OCI 2025 Certified Generative AI Professional', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=08CD6D874222CF313BBAF1A63BB1044CB282AF37185683F50B1C8288EDBEF8AA'],
  ['OCI 2024 Certified AI Foundations Associate', 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4D55CF40C94485A306DBC7886E3293EDD76526FE515763891EE8AE879543A6CC'],
  ['Microsoft Certified: Azure Administrator Associate', 'https://learn.microsoft.com/en-us/users/mdbelalislam-1073/credentials/99bad7bab5a1611e?ref=https%3A%2F%2Fwww.linkedin.com%2F'],
  ['Certified AppSec Practitioner (CAP)', 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXTVi7xsQ5eYNWHPNF1yIQ7kHqAz3erUV7wVBgrjUg8nwoNt5jTUw6V6FeOOLmoWWa+9DqFKUDzenNpdkk6CFUpE='],
  ['MikroTik Certified Network Associate', 'https://mikrotik.com/training/certificates/c305835c67f209fa5f92'],
  ['MikroTik Certified Routing Engineer', 'https://mikrotik.com/training/certificates/c308911caea9fbffed4f'],
  ['MikroTik Certified Security Engineer', 'https://mikrotik.com/training/certificates/c312949cfd535e9ec9d4']
];


/* =========================
   CAPABILITIES
========================= */

document.querySelector('#capabilities').innerHTML = capabilities.map((c, i) => `
  <article class="capability-card reveal">
    <span class="cap-number">${String(i + 1).padStart(2, '0')}</span>
    <h3>${c[0]}</h3>
    <p>${c[1]}</p>
  </article>
`).join('');


/* =========================
   EXPERIENCE
========================= */

document.querySelector('#timeline').innerHTML = experience.map((e, i) => {

  // Special format for Jatri + Saafir
  if (e[1] === 'Jatri') {
    return `
      <article class="timeline-item reveal">

        <div class="timeline-index">
          ${String(i + 1).padStart(2, '0')}
        </div>

        <div class="timeline-period">
          ${e[5]}
        </div>

        <div class="timeline-content">

          <h3>${e[0]}</h3>

          <h4 class="company-group">
            <a href="${e[2]}"
               target="_blank"
               rel="noopener noreferrer"
               class="company-link">
              ${e[1]} <span class="external-arrow">↗</span>
            </a>

            <span class="company-separator">|</span>

            <a href="${e[4]}"
               target="_blank"
               rel="noopener noreferrer"
               class="company-link">
              ${e[3]} <span class="external-arrow">↗</span>
            </a>
          </h4>

          <p>${e[6]}</p>

        </div>

      </article>
    `;
  }

  // All other companies
  return `
    <article class="timeline-item reveal">

      <div class="timeline-index">
        ${String(i + 1).padStart(2, '0')}
      </div>

      <div class="timeline-period">
        ${e[3]}
      </div>

      <div class="timeline-content">

        <h3>${e[0]}</h3>

        <h4>
          ${
            e[2]
              ? `<a href="${e[2]}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="company-link">
                    ${e[1]} <span class="external-arrow">↗</span>
                 </a>`
              : e[1]
          }
        </h4>

        <p>${e[4]}</p>

      </div>

    </article>
  `;

}).join('');

/* =========================
   PROJECTS
========================= */

document.querySelector('#projectsGrid').innerHTML = projects.map((p, i) => `
  <article class="project-card reveal">

    <div class="project-icon">
      ${i % 2 === 0 ? '⌘' : '✓'}
    </div>

    <span>${p[1]}</span>

    <h3>${p[0]}</h3>

    <p>${p[2]}</p>

    <a
      href="${p[3]}"
      target="_blank"
      rel="noopener noreferrer"
      class="diagram-btn"
      title="View ${p[0]} diagram"
    >
      View Diagram <span>↗</span>
    </a>

    <div class="project-line"></div>

  </article>
`).join('');


/* =========================
   CERTIFICATIONS
========================= */

document.querySelector('#certList').innerHTML = certifications.map((c, i) => `
  <div class="cert-row reveal">

    <span>${String(i + 1).padStart(2, '0')}</span>

    <p>
      ${
        c[1]
          ? `<a href="${c[1]}"
                target="_blank"
                rel="noopener noreferrer"
                class="certificate-link"
                title="View ${c[0]} credential">
                ${c[0]}
                <span class="cert-arrow">↗</span>
             </a>`
          : c[0]
      }
    </p>

  </div>
`).join('');


/* =========================
   CURRENT YEAR
========================= */

document.querySelector('#year').textContent = new Date().getFullYear();


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  (entries) => entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }

  }),
  {
    threshold: 0.14
  }
);

document
  .querySelectorAll('.reveal:not(.visible)')
  .forEach(el => observer.observe(el));


/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener(
  'scroll',
  () => {

    const h = document.documentElement;

    const pct =
      (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;

    document.querySelector('#progress').style.width = `${pct}%`;

  },
  {
    passive: true
  }
);


/* =========================
   EXECUTIVE CARD TILT
========================= */

const tilt = document.querySelector('.tilt-card');

if (
  tilt &&
  window.matchMedia('(pointer:fine)').matches
) {

  tilt.addEventListener('mousemove', e => {

    const r = tilt.getBoundingClientRect();

    const x =
      (e.clientX - r.left) / r.width - 0.5;

    const y =
      (e.clientY - r.top) / r.height - 0.5;

    tilt.style.transform =
      `perspective(900px)
       rotateX(${-y * 6}deg)
       rotateY(${x * 8}deg)
       rotateZ(1deg)`;

  });

  tilt.addEventListener('mouseleave', () => {

    tilt.style.transform =
      'perspective(900px) rotateX(0) rotateY(0) rotateZ(1deg)';

  });

}
