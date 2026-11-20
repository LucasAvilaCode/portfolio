import type { ImageMetadata } from 'astro';
import chameleon from '../assets/images/chameleon.png';
import cinehub from '../assets/images/cinehub.png';

export interface Project {
  title: string;
  image: ImageMetadata;
  alt: string;
  desc: string;
  tech: string[];
  github: string;
  githubLabel: string;
}

export const projects: Project[] = [
  {
    title: 'Chameleon | SaaS para Gestión de Gimnasios',
    image: chameleon,
    alt: 'Chameleon - SaaS de Gestión de Gimnasios',
    desc: 'Desarrollo end-to-end de un SaaS escalable para la gestión de gimnasios (panel web administrativo + app móvil para socios). Arquitectura en Flutter acoplada a backend en Supabase (PostgreSQL) con Triggers, Stored Procedures y automatización de reservas. Despliegues mediante Firebase Hosting y Cloudflare.',
    tech: ['Flutter', 'Supabase', 'PostgreSQL', 'Triggers & SP', 'Firebase Hosting', 'Cloudflare'],
    github: 'https://chameleonfit.app',
    githubLabel: 'Sitio Oficial',
  },
  {
    title: 'CineHub | Plataforma Web de Gestión',
    image: cinehub,
    alt: 'CineHub - Plataforma Web de Gestión',
    desc: 'Solución de software con arquitectura orientada a servicios. Persistencia híbrida usando MySQL para integridad transaccional y MongoDB para chats. Comunicación bidireccional en tiempo real con SignalR y seguridad con Microsoft Identity y JWT.',
    tech: ['ASP.NET Core', 'Angular 19', 'SignalR', 'MySQL', 'MongoDB', 'JWT / Identity'],
    github: 'https://github.com/LucasAvilaCode/apiPelis',
    githubLabel: 'GitHub: apiPelis',
  },
];
