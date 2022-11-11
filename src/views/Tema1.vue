<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco estratégico 

    .row.my-5
      p Para ampliar la información descrita anteriormente, lo invitamos a ver la siguiente información.

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
          )(data-aos="fade-left")
          .bloque-texto-g1__texto.p-4(data-aos="fade-right")
            p.mb-0 Para las empresas, en la actualidad es imprescindible orientarse hacia el futuro. Para ello, es preciso analizar dónde la organización desea incidir, haciendo hincapié en el despliegue de la misión, visión, objetivos estratégicos, principios, valores y propósitos. Esto se refleja en planes, programas y proyectos, lo que se logra a través de estructurar la ruta para la consecución de objetivos y metas con pensamiento estratégico, base fundamental para lograr posicionamiento en el mercado (Aldean #[i et al]., 2019, p. 6).

    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row
            .col-md-7.mb-4.mb-md-0
              p El mundo organizacional está viviendo un cambio profundo entre lo que significa pasar los días solucionando los problemas que surgen de la operación propia del negocio, y proyectar el futuro de la organización a través de las acciones estratégicas de cada día. Y es que para nadie es un secreto que “a quien no sabe a dónde ir, cualquier bus le sirve”. Por lo tanto, lo primero es direccionar el negocio según sea la visión que se tenga de él en un futuro concreto; y para lograrlo es necesario construir un marco estratégico, también llamado por algunos autores direccionamiento o planeación estratégicos.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')(data-aos="fade-left")

          .row
            .col-md-7.mb-4.mb-md-0
              p ¿Y cuáles son los beneficios de tener un marco estratégico?
              ul.lista-ul
                li
                  i.fas.fa-check
                  |      Saber hacia dónde se quiere ir. 
                li
                  i.fas.fa-check
                  | Enfocar los esfuerzos de todos los equipos de trabajo hacia el mismo lado.
                li
                  i.fas.fa-check
                  | Trabajar sobre planes, programas y proyectos estructurados.
                li
                  i.fas.fa-check
                  | Tener la trazabilidad de las estrategias implementadas y su efectividad en el mercado de la organización. 
                li
                  i.fas.fa-check
                  | Garantizar la supervivencia, consolidación y crecimiento de la organización. 
                li
                  i.fas.fa-check
                  | Fluir con los cambios que impone el entorno organizacional, permitiendo que la flexibilidad y la adaptabilidad sean virtudes de la empresa actual.          

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')(data-aos="fade-left")

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Es importante tener en cuenta también que el marco estratégico está conformado por algunos componentes fundamentales, los cuales se presentan a continuación.

    .row.justify-content-center.my-5
      .col-6.col-lg-3.mb-3
        figure
          img(src="@/assets/curso/temas/tema1/img4.png", alt="alt")(data-aos="fade-right")        
      .col-lg-9
        p #[strong El marco estratégico está conformado por cinco (5) componentes fundamentales, que al unirlos permiten direccionar a su vez cada departamento o sección de la organización, visualizando el aporte que cada uno puede generar a los objetivos generales de la empresa desde su área de trabajo. En las siguientes pestañas se indican cada uno de los componentes del marco estratégico.]
        
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Misión:")
            p La misión es la declaración de la razón de ser de la empresa, es decir, el propósito con el que se creó. Se expresa en un párrafo o enunciado que responde las siguientes preguntas: ¿Quiénes somos?, ¿a qué nos dedicamos?, ¿Cómo lo hacemos?, ¿en qué somos distintos de nuestra competencia? (Obregón Zúñiga, 2021, p. 1). 
            p Un referente importante en el mundo turístico tiene como misión “conducir el negocio de manera ética y fomentar la felicidad y el bienestar de los niños y las familias, inspirándolos a unirse a la compañía en la labor de forjar un futuro mejor.” (Disney, 2017). 

          .row(titulo="Visión:")
            p “La visión describe la posición futura deseada de la empresa, expresa las aspiraciones, en lo que se quiere convertir” (Obregón Zúñiga, 2021, p. 1).  La visión constituye el corazón del marco estratégico, toda vez que señala el #[i hacia dónde ir], por lo tanto, cada palabra de este texto tiene influencia directa dentro de las acciones a realizar en un periodo de tiempo determinado. Es radicalmente importante comprender la utilidad de la formulación de una visión que represente el sentir y querer profundo de los fundadores y propietarios de la organización.  La visión se puede formular respondiendo las siguientes preguntas: ¿cómo nos queremos ver en el futuro?, ¿en qué nos queremos convertir como empresa?, y ¿en cuánto tiempo podremos lograrlo?
            p A modo de ejemplo, se tiene que la visión de la asociación hotelera más grande en Colombia es: “Para el año 2022, la Asociación Hotelera y Turística de Colombia, articulada a través de una política nacional, seguirá siendo el gremio más representativo de la industria turística del país, reconocido por desarrollar estrategias efectivas que habrán fortalecido la productividad, competitividad e internacionalización de la industria hotelera, y por su liderazgo nacional y regional en el análisis sectorial e incidencia en políticas públicas que contribuyan al posicionamiento del turismo como uno de los sectores más importantes de la economía nacional.” (COTELCO, 2018).
          
          .row(titulo="Valores corporativos:")
            p “Los valores son cualidades, virtudes y principios que guían a la empresa u organización para tomar decisiones, realizar acciones, crear y mantener el ambiente interno. Pueden generar o propiciar identidad y pertenencia del grupo de trabajo con la organización.” (Obregón Zúñiga, 2021, p. 1). En otras palabras, los valores corporativos son los que durante la formulación del marco estratégico se seleccionan como aquellos que perfeccionan a la organización, y que rigen el comportamiento diario de sus directivos y colaboradores, manteniéndolos cerca de la filosofía original sobre la cual se fundamentó la empresa. 
            p Retomando el ejemplo anterior, una empresa que se dedica al turismo de un público mayoritariamente infantil tiene cinco valores corporativos: 
            ul.lista-ul
              li
                i.fas.fa-square
                p #[strong Creatividad e innovación:] generamos contenidos y herramientas para padres, niños y educadores para promover la seguridad online de niños, y el uso positivo de la tecnología.   
              li
                i.fas.fa-square
                p #[strong Vida saludable:] inspiramos hábitos de vida saludable en niños, promoviendo la actividad física, una alimentación sana, la higiene personal y el descanso a través de historias, experiencias de entretenimiento, programas de inversión social y políticas responsables de negocios. 
              li
                i.fas.fa-square
                p #[strong Naturaleza:] incentivamos a niños y familias a cuidar la naturaleza, adoptar hábitos sustentables, a reconectarse con la naturaleza y ayudar a conservar las especies en peligro y los recursos naturales.   
              li
                i.fas.fa-square
                p #[strong Comunidad:] promovemos el compromiso activo en la comunidad a través del voluntariado y trabajando junto a entidades sin fines de lucro para apoyar proyectos sociales que promueven los derechos de los niños, su bienestar, el desarrollo de habilidades y el fortalecimiento de comunidades.  
              li
                i.fas.fa-square
                p #[strong #[i Marketing], publicidad y contenido responsable:] promovemos prácticas de #[i marketing] responsable y, el desarrollo de contenidos y experiencias de entretenimiento apropiadas y seguras para niños y jóvenes, y consistentes con valores de diversidad e inclusión y con las áreas de foco de Ciudadanía Corporativa. (Disney, 2017).

          .row(titulo="Objetivos organizacionales:")
            p Los objetivos organizacionales son los resultados deseados por la empresa, y se configuran a través de la expresión formulada en una frase, la cual expresa lo que se quiere lograr. Esta frase debe formularse iniciando con un verbo en infinitivo y un complemento que indique claramente qué se quiere lograr a través del verbo. Los verbos normalmente utilizados en la formulación de objetivos organizacionales son alcanzar, incrementar, ofrecer, mantener, satisfacer y optimizar, seguidos de complementos que se relacionan con la rentabilidad del negocio, la productividad, el servicio al cliente, el bienestar de los colaboradores, el posicionamiento de la marca, entre otros. 
            p Para lograr una efectiva formulación de objetivos organizacionales es importante hacerlo con base en la visión de la empresa y a través de un objetivo general que represente el gran paso o salto que se debe dar para llegar hasta donde indica la visión, y un conjunto de objetivos específicos que son los pasos para llegar hasta el objetivo general.
            p Un método para hacer seguimiento a los objetivos organizacionales es, por ejemplo, una escala, la cual puede contener los siguientes ítems: (i) incrementar la productividad de la sucursal del centro, (ii) ofrecer un buen servicio al cliente, (iii) atraer y retener a los colaboradores con mejor desempeño, (iv) llegar al mercado objetivo, (v) mantener los valores fundamentales de la empresa y (vi) tener un crecimiento sostenible.

          .row(titulo="Meta organizacionales:")
            p Por último, las metas organizacionales son un complemento del objetivo organizacional, toda vez que configuran la cantidad a lograr y la fecha, el plazo o el horizonte de tiempo en el que se estipula se deben alcanzar.        

    .row.my-5
      p Estos cinco (5) componentes fundamentales configuran el marco estratégico de la organización. Para llevarlos a la acción, se puede hacer uso de diferentes herramientas que aterricen la información de cada componente en las actividades diarias y en las decisiones cotidianas, orientando el rumbo de la empresa. Una de las herramientas más utilizadas es el #[i balance scorecard] o cuadro de mando integrado, que logra hacer dialogar a la mayoría de los componentes del marco estratégico en un solo documento. 

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-botones.p-3
          .row.justify-content-center
            .col-6.col-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")(data-aos="fade-right")
            .col-lg-10
              p.mt-3 #[i El balance scorecard] es una herramienta que permite organizar las actividades a realizar, exponiendo una estrategia en grupo de métricas de realización. En las organizaciones competitivas es imperioso diseñar un sistema de control de gestión a medida, identificado como un cuadro de mando integral que ha evolucionado para convertirse en un sistema de gestión estratégico.

    .row.justify-content-center.my-5
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/tema1/img6.png", alt="alt")(data-aos="fade-down")       

    .row.justify-content-center.my-5
      .col-lg-10
        .row
          .col-lg-10
            .cajon.tarjeta--rosa1.p-4
              .row
                .col-5.col-lg-2.my-2
                  figure
                    img(src='@/assets/curso/temas/tema1/img7.png', alt="alt")(data-aos="fade-right")  
                .col-lg-7
                  p “Se sustenta en cuatro perspectivas, englobando los objetivos para un correcto funcionamiento con indicadores financieros y no financieros articulados con la visión y la estrategia.” (Aldean #[i et al]., 2019, p. 10)

            .cajon.tarjeta--rosa2.p-4
              .row
                .col-5.col-lg-2.my-5
                  figure
                    img(src='@/assets/curso/temas/tema1/img8.png', alt="alt")(data-aos="fade-right")  
                .col-lg-7
                  p Es una herramienta para movilizar a la gente, expone la estrategia en un grupo de métricas de realización, suministrando información valiosa a la organización para un proceso de gestión y medición. Exterioriza los resultados y comprende la razón de esos logros, congregados en cuatro categorías: financiera, clientes, procesos internos y formación y crecimiento o aprendizaje. No es imprescindible que estén todas ellas, estas perspectivas son las más generales y pueden adecuarse a la mayoría de las empresas, toda vez que no constituye una condición indispensable para construir un modelo de negocio (Guerrero,  2010, citado en Aldean #[i et al]., 2019, p. 10).

            .cajon.tarjeta--rosa1.p-4
              .row
                .col-5.col-lg-2.my-3
                  figure
                    img(src='@/assets/curso/temas/tema1/img9.png', alt="alt")(data-aos="fade-right")  
                .col-lg-7
                  p En el balance scorecard convergen todos los componentes del marco estratégico, y el alcance de este comprende las actividades relacionadas con la formulación del plan estratégico de la organización, que involucra a todas las áreas o divisiones al interior de la empresa. Esto define los procesos que contribuyen al logro de las metas establecidas en el plan estratégico. 

          .col-lg-2(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt="alt").img10-t1

    .row.my-5
      p Ahora que se conoce el marco estratégico del entorno turístico, es necesario ampliar la información sobre los acuerdos comerciales.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
