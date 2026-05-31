// ╔══════════════════════════════════════════════════════╗
// ║              FILE UPLOAD PATHS                       ║
// ╠══════════════════════════════════════════════════════╣
// ║  📷  PROFILE PHOTO                                   ║
// ║      Place your photo at:                            ║
// ║      public/uploads/photos/profile.jpg               ║
// ║                                                      ║
// ║  📄  RESUME (PDF)                                    ║
// ║      Place your resume at:                           ║
// ║      public/uploads/resume/resume.pdf                ║
// ║                                                      ║
// ║  🏅  CERTIFICATIONS                                  ║
// ║      Place certificate PDFs at:                      ║
// ║      public/uploads/certifications/cert-name.pdf     ║
// ║      Then set the file path in certifications.js     ║
// ╚══════════════════════════════════════════════════════╝

export const uploads = {
  photos: {
    profile: '/uploads/photos/profile.jpg',
  },
  resume: '/uploads/resume/resume.pdf',
  certifications: '/uploads/certifications',
};
