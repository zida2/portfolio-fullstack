const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Créer le document PDF
const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
});

// Chemin de sortie
const outputPath = path.join(__dirname, '../public/cv-desire-zida.pdf');
const stream = fs.createWriteStream(outputPath);

doc.pipe(stream);

// Couleurs
const primaryColor = '#8b5cf6'; // Violet
const secondaryColor = '#06b6d4'; // Cyan
const darkColor = '#1f2937'; // Gris foncé

// En-tête
doc.fontSize(24).font('Helvetica-Bold').text('DESIRE ASSOMPTION WENDLASIDA ZIDA', { align: 'center' });
doc.fontSize(14).font('Helvetica').fillColor(primaryColor).text('Développeur Full Stack Web & Mobile', { align: 'center' });
doc.fillColor(darkColor);

// Informations de contact
doc.fontSize(10).text('📍 Tampouy, Ouagadougou, Burkina Faso', { align: 'center' });
doc.text('📞 +226 06 13 90 16 / 62202877', { align: 'center' });
doc.text('📧 zidadesire20@gmail.com', { align: 'center' });
doc.text('🔗 GitHub: https://github.com/zida2', { align: 'center' });
doc.text('🚗 Permis C — Disponible immédiatement', { align: 'center' });

doc.moveDown(0.5);
doc.moveTo(40, doc.y).lineTo(555, doc.y).stroke(primaryColor);
doc.moveDown(0.5);

// PROFIL PROFESSIONNEL
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('PROFIL PROFESSIONNEL');
doc.fontSize(10).font('Helvetica').fillColor(darkColor);
doc.text('Développeur Full Stack passionné spécialisé dans la conception d\'applications web modernes, systèmes backend et automatisation de solutions numériques. Expérience dans le développement frontend responsive, la création d\'API, la gestion de bases de données, l\'intégration de systèmes et le déploiement de plateformes web complètes. Capable de transformer une idée en produit fonctionnel avec une forte capacité d\'adaptation et d\'apprentissage rapide.');

doc.moveDown(0.5);

// COMPÉTENCES
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('COMPÉTENCES TECHNIQUES');
doc.fontSize(10).font('Helvetica').fillColor(darkColor);

const skills = {
  'Langages Fondamentaux': 'Python, Java, C / C++',
  'Frontend': 'HTML5, CSS3, JavaScript ES6+, React, Next.js, TailwindCSS, Responsive Design, UI/UX, Web Animation',
  'Backend': 'PHP, Node.js, NestJS, MySQL, PostgreSQL, Architecture API REST, Authentification JWT, Socket.io',
  'Outils & DevOps': 'Git & GitHub, VS Code, Docker, XAMPP, Postman, Linux, CI/CD',
  'Maintenance & Réseau': 'Diagnostic informatique, Configuration réseau, Support technique, Dépannage matériel',
  'Spécialisations': 'Intelligence Artificielle, Cybersécurité, Architectures modernes, Temps réel, Web Analytics'
};

Object.entries(skills).forEach(([category, items]) => {
  doc.font('Helvetica-Bold').text(`${category}:`, { continued: true });
  doc.font('Helvetica').text(` ${items}`);
});

doc.moveDown(0.5);

// PROJETS RÉCENTS
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('PROJETS RÉCENTS');
doc.fontSize(10).font('Helvetica').fillColor(darkColor);

const projects = [
  {
    title: 'CashFlow Pro',
    type: 'Plateforme d\'automatisation financière',
    tech: 'PHP, JavaScript, HTML5, CSS3, MySQL, Docker',
    desc: 'Backend API complet, Interface responsive, Architecture optimisée, Gestion automatisée des flux de données'
  },
  {
    title: 'Système de Gestion Web Dynamique',
    type: 'Système de gestion complet',
    tech: 'PHP, MySQL, JavaScript, HTML5, CSS3',
    desc: 'Interfaces administratives, Gestion utilisateurs, Modules CRUD, Authentification robuste'
  },
  {
    title: 'Portfolio 3D & Interfaces Interactives',
    type: 'Portfolio interactif moderne',
    tech: 'JavaScript, CSS3, Web Animation, Frontend Modern UI',
    desc: 'Éléments visuels interactifs, Optimisation UI/UX, Responsive mobile & desktop'
  }
];

projects.forEach((project, index) => {
  doc.font('Helvetica-Bold').text(`${index + 1}. ${project.title}`, { continued: true });
  doc.font('Helvetica').text(` — ${project.type}`);
  doc.font('Helvetica-Bold').text('Technologies: ', { continued: true });
  doc.font('Helvetica').text(project.tech);
  doc.text(project.desc);
  doc.moveDown(0.3);
});

doc.moveDown(0.5);

// EXPÉRIENCE PROFESSIONNELLE
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('EXPÉRIENCE PROFESSIONNELLE');
doc.fontSize(10).font('Helvetica').fillColor(darkColor);

const experiences = [
  {
    title: 'Freelance — Développeur Full Stack',
    org: 'Ouagadougou',
    period: 'En cours',
    desc: 'Développement frontend et backend, intégration de bases de données, création d\'interfaces modernes'
  },
  {
    title: 'Agent de recouvrement',
    org: 'Intégrale Service & Recouvreur Optimal',
    period: 'Oct 2025 - Mars 2026',
    desc: 'Gestion des dossiers clients, suivi administratif, traitement des créances'
  },
  {
    title: 'Stagiaire',
    org: 'Moov Africa',
    period: 'Août 2025 - Oct 2025',
    desc: 'Mise à jour de bases de données, support web, assistance technique'
  },
  {
    title: 'Technicien maintenance',
    org: 'Rock Techno',
    period: 'Août 2025 - Sept 2025',
    desc: 'Maintenance informatique, configuration réseau, diagnostic matériel et logiciel'
  },
  {
    title: 'Stagiaire',
    org: 'SONABEL',
    period: 'Sept 2022 - Juillet 2024',
    desc: 'Maintenance et dépannage informatique, support utilisateurs, assistance réseau'
  }
];

experiences.forEach((exp) => {
  doc.font('Helvetica-Bold').text(exp.title);
  doc.font('Helvetica').text(`${exp.org} | ${exp.period}`);
  doc.text(exp.desc);
  doc.moveDown(0.3);
});

doc.moveDown(0.5);

// FORMATION
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('FORMATION');
doc.fontSize(10).font('Helvetica').fillColor(darkColor);
doc.font('Helvetica-Bold').text('Ingénieur en Génie Logiciel', { continued: true });
doc.font('Helvetica').text(' — Burkina Institute of Technology (2021 - Présent)');

doc.moveDown(0.5);

// LANGUES
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('LANGUES');
doc.fontSize(10).font('Helvetica').fillColor(darkColor);
doc.text('Français: Courant');
doc.text('Anglais: Intermédiaire');

doc.moveDown(0.5);

// CENTRES D'INTÉRÊT
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('CENTRES D\'INTÉRÊT');
doc.fontSize(10).font('Helvetica').fillColor(darkColor);
doc.text('Développement logiciel, Intelligence Artificielle, Cybersécurité, Technologies web modernes, Architecture logicielle');

// Pied de page
doc.fontSize(8).fillColor('#999999').text('CV généré automatiquement — DESIRE ZIDA', { align: 'center' }, doc.page.height - 30);

// Finaliser le PDF
doc.end();

stream.on('finish', () => {
  console.log('✅ CV généré avec succès: ' + outputPath);
});

stream.on('error', (err) => {
  console.error('❌ Erreur lors de la génération du CV:', err);
});
