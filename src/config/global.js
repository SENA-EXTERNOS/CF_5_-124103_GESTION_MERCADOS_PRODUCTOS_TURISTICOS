export default {
  global: {
    componenteFormativo: 'Diagnóstico del entorno turístico',
    descripcionCurso:
      'El diagnóstico del entorno turístico permite conocer los factores internos y externos de los establecimientos turísticos, con base en el marco estratégico de la organización, para el diseño de estrategias de gestión que permitan potenciar sus fortalezas, trabajar en sus debilidades, aprovechar las oportunidades y manejar las amenazas que puedan presentarse.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco estratégico ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acuerdos comerciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis estratégico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Valoración de información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco estratégico',
      referencia:
        'Obregón Zúñiga, D. L. (2021). <i>Misión, visión y valores.</i> Guadalajara, Jalisco, México: Universidad de Guadalajara, Sistema de Universidad Virtual.',
      tipo: 'Publicación digital',
      link:
        'http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/3984/4/Misi%c3%b3n_visi%c3%b3n_valores.pdf',
    },
    {
      tema: 'Matrices MEFE y MEEFI',
      referencia:
        'Min, Y. (18 de junio del 2018). <i>Matriz de evaluación de factores externos (Matriz EFE -MEFE).</i> Yi Min Shum Xie.',
      tipo: 'Publicación digital',
      link:
        'https://yiminshum.com/matriz-evaluacion-factores-externos-matriz-efe-mefe/',
    },
    {
      tema: 'Matriz DOFA',
      referencia: 'Torres Arriaga, M. G. (2019). Análisis FODA. ',
      tipo: 'Recurso educativo',
      link:
        'http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/3016/1/An%C3%A1lisis_FODA.pdf',
    },
    {
      tema: '<i>Balanced scorecard</i>',
      referencia:
        'SEFOET Fortalecimiento empresarial (2021). <i>BALANCED SCORECARD.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QCi09LlI7Hs',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdos comerciales',
      significado:
        'un acuerdo comercial es una alianza representada mediante un documento que se da entre dos o más empresas u organizaciones que se benefician entre sí, a través de sus actividades productivas y de los intercambios pactados en dicho documento.',
    },
    {
      termino: 'Amenazas',
      significado:
        'las amenazas son aquellas que identifican las situaciones en el entorno que pongan en riesgo a la organización.',
    },
    {
      termino: 'Debilidades',
      significado:
        'las debilidades son las barreras internas que impiden un buen desempeño de la organización.',
    },
    {
      termino: 'Estrategia',
      significado:
        'las estrategias son el CÓMO se logra lo que queremos, es decir, constituyen la manera en la que se elige llevar a cabo algo. También son las acciones que se emprenden para lograr un objetivo.',
    },
    {
      termino: 'Fortalezas',
      significado:
        'las fortalezas son los ámbitos que ofrecen una ventaja competitiva dentro de la empresa.',
    },
    {
      termino: 'Herramientas de diagnóstico del entorno',
      significado:
        'las herramientas de diagnóstico del entorno son aquellas que permiten la creación del diagnóstico estratégico, ya que facilitan el análisis interno y externo de la organización. Estas son las matrices DOFA, MEFI, MEFE y MOE.',
    },
    {
      termino: 'Marco estratégico',
      significado:
        'el marco estratégico es el proceso de direccionar el negocio según sea la visión que se tenga de él, orientarse hacia el futuro analizando los factores donde la organización desea incidir.',
    },
    {
      termino: 'Meta organizacionales',
      significado:
        'las metas organizacionales son un complemento del objetivo organizacional, toda vez que configuran la cantidad a lograr y la fecha, el plazo o el horizonte de tiempo en el que se estipula se debe alcanzar.',
    },
    {
      termino: 'Objetivos organizacionales',
      significado:
        'los objetivos organizacionales son los resultados deseados por la empresa, y se configuran a través de la expresión formulada en una frase que expresa lo que se quiere lograr, esta frase debe formularse iniciando con un verbo en infinitivo y un complemento que indique claramente qué se quiere lograr a través del verbo.',
    },
    {
      termino: 'Oportunidades',
      significado:
        'las oportunidades son aquellas que identifican los factores positivos en el entorno, los cuales ayudan a consolidar el negocio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Artículo revista digital | Aldean, V. F. O., Chacán, M. Y. S., & Moreta, E. R. M. 2019. <i>Direccionamiento Estratégico Con Cuadro De Mando Integral Para Firmas Auditoras - Strategic Direction with Balanced Scorecard for Audit Firms. Journal of Software Engineering and Simulation</i>, 5(1), 1-15.',
      link: '',
    },
    {
      referencia:
        'Arrieta, V., Cervantes,  Y., De la Cruz,  L.  & López, D.  (2021).  <i>La importancia del diagnóstico estratégico en las organizaciones</i>.  Económicas CUC, 42(2), 243–254. DOI:',
      link: 'https://doi.org/10.17981/econcuc.42.2.2021',
    },
    {
      referencia:
        'Avendaño Cárdenas, E., Henao Pérez, A., & Puente Pacheco, M. (2022). <i>Inteligencia de mercados: Una visión integral e interdisciplinaria para la internacionalización de las Pymes</i>. Universidad del Norte. ',
      link: 'https://www-digitaliapublishing-com.ezproxy.utp.edu.co/a/115401',
    },
    {
      referencia:
        'COTELCO. (2018). <i>Quiénes somos COTELCO</i>. Recuperado de:',
      link: 'https://www.cotelco.org/quienes-somos',
    },
    {
      referencia:
        'Delgado, J. E. (2020). <i>La integración vertical empresarial, una visión estratégica: Caso Apple Inc</i>. Tekhné, 23(3).',
      link: '',
    },
    {
      referencia:
        'Página web oficial. | DISNEY, D. L. A. (2017). Disney y el arte del servicio al cliente.',
      link: '',
    },
    {
      referencia:
        'Obregón Zúñiga, D. L. (2021). <i>Misión, visión y valores</i>. Guadalajara, Jalisco, México: Universidad de Guadalajara, Sistema de Universidad Virtual. 839. Misión, visión y valores_MGAAV_PDF (udg.mx)',
      link: '',
    },
    {
      referencia:
        'Pibaque-Pionce, M. S., Álvarez-Indacochea , A. A., & Soledispa- Reyes , S. G. (2020). <i>La importancia de la aplicación de matrices de la planificación estratégica en el sector microempresa de las bibliotecas-cafeterías</i>. Revista Científica FIPCAEC (Fomento De La investigación Y publicación En Ciencias Administrativas, Económicas Y Contables). ISSN: 2588-090X . Polo De Capacitación, Investigación Y Publicación (POCAIP), 5(5), 22-44.',
      link: 'https://doi.org/10.23857/fipcaec.v5i5.27',
    },
    {
      referencia:
        'Riverol, Vásquez. M., Parada, Salomón. A. y Rodríguez, Gómez. A. (2019). <i>GUÍA PARA LA ELABORACIÓN DEL ANÁLISIS DE FORTALEZAS, OPORTUNIDADES, DEBILIDADES Y AMENAZAS (FODA)</i>. Contraloría municipal de Puebla.  Art77_fI_GuiaAnalisisFODA_05.09.19.pdf (pueblacapital.gob.mx)',
      link: '',
    },
    {
      referencia:
        'Libro | Sánchez, D. (2020). <i>Análisis foda o dafo.</i> Bubok.',
      link: '',
    },
    {
      referencia:
        'Video | SEFOET Fortalecimiento empresarial (2021). <i>BALANCED SCORECARD.</i> [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=QCi09LlI7Hs',
    },
    {
      referencia:
        'Recurso educativo | Torres Arriaga, M. G. (2019). <i>Análisis FODA.</i> ',
      link:
        'http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/3016/1/An%C3%A1lisis_FODA.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
