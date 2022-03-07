import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.module.upsert({
    where: { name: 'Clone da Netflix em ReactJS' },
    update: {},
    create: {
      name: 'Clone da Netflix em ReactJS',
      description: '',
      tech: 'ReactJS',
      classes: {
        create: [
          {
            name: 'Início projeto usando CRA',
            date: '14/05/22',
            durationInMinutes: 7,
          },
          {
            name: 'Página de login e cadastro',
            date: '14/05/22',
            durationInMinutes: 28,
          },
          {
            name: 'Card dos vídeos e outros componentes',
            date: '14/05/22',
            durationInMinutes: 19,
          },
          {
            name: 'Montagem da página de vídeos',
            date: '14/05/22',
            durationInMinutes: 31,
          },
          {
            name: 'Deploy usando Netlify',
            date: '14/05/22',
            durationInMinutes: 8,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'API REST usando Prisma e NestJS' },
    update: {},
    create: {
      name: 'API REST usando Prisma e NestJS',
      description: '',
      tech: 'NodeJS',
      classes: {
        create: [
          {
            name: 'Início projeto usando NestCLI',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Introdução ao ORM Prisma',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Criação das entidades',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'O que é arquitetura MVC?',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Criação dos controllers e services.',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'JWT token com PassportJS.',
            date: '14/05/22',
            durationInMinutes: 38,
          },
          {
            name: 'Postgres localmente usando Docker.',
            date: '14/05/22',
            durationInMinutes: 14,
          },
          {
            name: 'Deploy da API e do banco no Heroku.',
            date: '14/05/22',
            durationInMinutes: 11,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'API REST de rede social usando Django' },
    update: {},
    create: {
      name: 'API REST de rede social usando Django',
      description: '',
      tech: 'Django',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'Clone do Spotify usando Kotlin' },
    update: {},
    create: {
      name: 'Clone do Spotify usando Kotlin',
      description: '',
      tech: 'Kotlin',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'Clone do Spotify usando Kotlin' },
    update: {},
    create: {
      name: 'Clone do Spotify usando Kotlin',
      description: '',
      tech: 'Kotlin',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'Clone do Spotify usando Kotlin' },
    update: {},
    create: {
      name: 'Clone do Spotify usando Kotlin',
      description: '',
      tech: 'Kotlin',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'Iniciando em programação' },
    update: {},
    create: {
      name: 'Iniciando em programação',
      description: '',
      tech: 'Basico',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'API REST em .NET' },
    update: {},
    create: {
      name: 'Serviços em .NET',
      description: '',
      tech: '.NET',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'Clone do Banco Inter em React Native' },
    update: {},
    create: {
      name: 'Clone do Banco Inter em React Native',
      description: '',
      tech: 'React Native',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'Clone do Twitter em VueJS' },
    update: {},
    create: {
      name: 'Clone do Twitter em VueJS',
      description: '',
      tech: 'VueJS',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'API REST usando Gin' },
    update: {},
    create: {
      name: 'API REST usando Gin',
      description: '',
      tech: 'Go',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'API REST usando Gin' },
    update: {},
    create: {
      name: 'API REST usando Gin',
      description: '',
      tech: 'Go',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });

  await prisma.module.upsert({
    where: { name: 'Clone do Mercado Livre usando AngularJS' },
    update: {},
    create: {
      name: 'Clone do Mercado Livre usando AngularJS',
      description: '',
      tech: 'AngularJS',
      classes: {
        create: [
          {
            name: 'Aula 1',
            date: '14/05/22',
            durationInMinutes: 5,
          },
          {
            name: 'Aula 2',
            date: '14/05/22',
            durationInMinutes: 8,
          },
          {
            name: 'Aula 3',
            date: '14/05/22',
            durationInMinutes: 11,
          },
          {
            name: 'Aula 4',
            date: '14/05/22',
            durationInMinutes: 6,
          },
          {
            name: 'Aula 5',
            date: '14/05/22',
            durationInMinutes: 36,
          },
          {
            name: 'Aula 6',
            date: '14/05/22',
            durationInMinutes: 38,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
