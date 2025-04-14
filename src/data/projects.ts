import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Vagas Aggregator",
    description: {
      'pt-BR': "📝🏢 Agregador de vagas para desenvolvedores baseado em mais de 50 contas do GitHub para oportunidades e alguns outros sites.",
      'en-US': "📝🏢 Aggregates open vacancies for developers based on more than 50 GitHub accounts for opportunities and some other sites.",
      'es-ES': "📝🏢 Agregador de vacantes para desarrolladores basado en más de 50 cuentas de GitHub para oportunidades y algunos otros sitios."
    },
    slug: "vagas",
    apiVersion: 2,
    githubUrl: "https://github.com/ApiBR/vagas-aggregator-ui"
  },
  {
    title: "Sports Agenda",
    description: {
      'pt-BR': "📆 ⚽ Agenda esportiva com ligas, times, partidas e resultados das ligas de futebol mais famosas.",
      'en-US': "📆 ⚽ Sports Agenda with leagues, teams, matches, and results of most famous football leagues.",
      'es-ES': "📆 ⚽ Agenda deportiva con ligas, equipos, partidos y resultados de las ligas de fútbol más famosas."
    },
    slug: "sports-agenda",
    apiVersion: 1,
    githubUrl: "https://github.com/ApiBR/sports-agenda-ui"
  }
];
