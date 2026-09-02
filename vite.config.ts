import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        experience: resolve(import.meta.dirname, 'experience.html'),
        now: resolve(import.meta.dirname, 'now.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
        writing: resolve(import.meta.dirname, 'writing.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
        olist: resolve(import.meta.dirname, 'projects/olist.html'),
        pharma: resolve(import.meta.dirname, 'projects/pharma.html'),
        vrinda: resolve(import.meta.dirname, 'projects/vrinda.html'),
        writingPost1: resolve(import.meta.dirname, 'writing/requirements-gathering-in-ba.html'),
        writingPost2: resolve(import.meta.dirname, 'writing/what-progress-actually-looks-like.html'),
        writingPost3: resolve(import.meta.dirname, 'writing/deciding-to-take-a-pause.html'),
        writingPost4: resolve(import.meta.dirname, 'writing/from-social-media-manager-to-ba.html'),
      },
    },
  },
});
