export interface TimelineItem {
  role: string;
  org: string;
  period: string;
  desc: string;
}

export const jobs: TimelineItem[] = [
  {
    role: 'Lead Full Stack Developer',
    org: 'Chameleon (SaaS)',
    period: '2025 – Actualidad',
    desc: 'Diseño de arquitectura y desarrollo end-to-end de una plataforma para gimnasios (App móvil y panel web administrativo). Implementación en Flutter y Supabase (PostgreSQL), gestionando reservas, control de acceso y planes híbridos. Actualmente en fase de pruebas de usuario (Lanzamiento: Q1 2027).',
  },
  {
    role: 'Becario FCEFyN',
    org: 'Universidad Nacional de San Juan',
    period: '2024',
    desc: 'Apoyo en prácticas profesionalizantes de estudiantes de secundaria. Guiar y supervisar a los alumnos en el desarrollo de actividades y aprendizaje inicial en carreras informáticas. Mantenimiento de Laboratorio.',
  },
  {
    role: 'Liderazgo & Gestión de Equipos',
    org: 'Gimnasio',
    period: '2023 – Actualidad',
    desc: 'Liderazgo de equipos y gestión de grupos, aplicando comunicación efectiva, metodologías de organización y resolución de problemas para el cumplimiento de objetivos.',
  },
  {
    role: 'Asistencia Operativa y Soporte',
    org: 'Congreso Latinoamericano de Ciencia y Tecnología',
    period: '2023',
    desc: 'Asistencia operativa y soporte organizativo en evento tecnológico de gran escala, demostrando adaptabilidad, trabajo bajo presión y vocación de servicio.',
  },
];

export const education: TimelineItem[] = [
  {
    role: 'Tecnicatura Universitaria en Programación Web',
    org: 'Universidad Nacional de San Juan (UNSJ)',
    period: 'Finalizado, Dic 2025',
    desc: 'Formación académica integral en programación backend (.NET, Java), frontend (HTML5, CSS3, JavaScript, Angular), redes de datos y gestión avanzada de bases de datos relacionales y no relacionales (SQL Server, MySQL, PostgreSQL, MongoDB).',
  },
  {
    role: 'Profesor de Educación Física',
    org: 'Instituto Superior de Educación Física',
    period: 'Finalizado, Sep 2019',
    desc: 'Formación pedagógica enfocada en liderazgo, dinámica de grupos, planificación, disciplina y comunicación interpersonal efectiva.',
  },
];
