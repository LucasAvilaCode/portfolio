export interface SkillCategory {
  icon: string;
  title: string;
  items: { icon: string; name: string }[];
  tags: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'fa-solid fa-code',
    title: 'Lenguajes de Programación',
    items: [
      { icon: 'fa-solid fa-code', name: 'C# (.NET Core)' },
      { icon: 'fa-brands fa-java', name: 'Java (Jakarta EE)' },
      { icon: 'fa-brands fa-python', name: 'Python' },
      { icon: 'fa-solid fa-bolt', name: 'Dart' },
    ],
    tags: ['C# .NET Core', 'Java Jakarta EE', 'Python', 'Dart'],
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Desarrollo Web & Frameworks',
    items: [
      { icon: 'fa-solid fa-server', name: 'ASP.NET Core Web API' },
      { icon: 'fa-brands fa-angular', name: 'Angular (Angular 19)' },
      { icon: 'fa-solid fa-mobile-screen-button', name: 'Flutter (Web & Mobile)' },
      { icon: 'fa-brands fa-html5', name: 'HTML5 & CSS3' },
    ],
    tags: ['ASP.NET Core', 'Angular 19', 'Flutter', 'HTML5/CSS3'],
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Bases de Datos & Cloud',
    items: [
      { icon: 'fa-solid fa-database', name: 'MySQL' },
      { icon: 'fa-solid fa-cloud', name: 'PostgreSQL (Supabase)' },
      { icon: 'fa-solid fa-leaf', name: 'MongoDB' },
      { icon: 'fa-solid fa-gears', name: 'Triggers & Stored Procedures' },
    ],
    tags: ['MySQL', 'PostgreSQL', 'Supabase', 'MongoDB'],
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Herramientas & Soporte',
    items: [
      { icon: 'fa-brands fa-github', name: 'Git & GitHub (LucasAvilaCode)' },
      { icon: 'fa-brands fa-figma', name: 'Figma (UI/UX)' },
      { icon: 'fa-solid fa-desktop', name: 'Mantenimiento Hardware & Software' },
      { icon: 'fa-brands fa-linux', name: 'Entornos Windows & Linux' },
    ],
    tags: ['Git / GitHub', 'Figma', 'Soporte Técnico', 'Windows/Linux'],
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'Competencias Clave',
    items: [
      { icon: 'fa-solid fa-layer-group', name: 'Arquitectura MVC & MVVM' },
      { icon: 'fa-solid fa-network-wired', name: 'APIs RESTful & SignalR' },
      { icon: 'fa-solid fa-shield-halved', name: 'Seguridad Informática (JWT)' },
      { icon: 'fa-solid fa-users', name: 'Liderazgo & Proactividad' },
    ],
    tags: ['MVC / MVVM', 'APIs RESTful', 'SignalR', 'JWT Security'],
  },
];
