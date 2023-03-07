<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis estratégico

    .row.justify-content-center.my-5
      .col-lg-7(data-aos="fade-right")
        p El análisis estratégico es un proceso que busca reconocer las dinámicas del entorno (macro y micro) de la organización.  En este proceso es necesario obtener una fotografía o radiografía de la situación actual de la empresa, en cuanto a lo que sucede interna y externamente. Toda la información del entorno es un insumo valioso para la generación de estrategias en pro de los objetivos organizacionales. Este análisis requiere de un diagnóstico estratégico, el cual: 
        .bloque-texto-b.color-verde
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p "Se realiza en las empresas, para saber evaluar la situación de la organización, lo cual incluye el análisis dentro y fuera de ella, es decir interno y externo. El éxito de las organizaciones resulta de la ejecución de estrategias adecuadas y así evitar gastar tiempo, recursos en estrategias innecesarias para su sector de mercado.” (Arrieta et al., 2021, p. 1).
            i.fas.fa-quote-right
            
           
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/img1.png", alt="alt")(data-aos="fade-left")     

    .row.my-5
      p Para la realización de un diagnóstico estratégico se pueden utilizar diferentes herramientas, a continuación, se desarrollarán las matrices que facilitan el análisis interno y externo de la organización, y los cuatro tipos de matrices: Matriz DOFA, Matriz MEFI, Matriz MEFE y Matriz MOE.

    .row.mt-5
      h3 Matriz DOFA 

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g2.color-secundario.p-4
          .bloque-texto-g2__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
          )
          .bloque-texto-g2__texto.p-3(data-aos="fade-up")
            p La matriz DOFA o FODA es una herramienta clave para hacer una evaluación pormenorizada de la situación actual de una organización o persona sobre la base de sus debilidades y fortalezas, y en las oportunidades y amenazas que ofrece su entorno. Es también una metodología de trabajo que facilita la toma de decisiones. (Sánchez, 2020. p. 10).

    .row.my-5
      p Como se puede apreciar en la imagen, es una herramienta de análisis en la que se tienen en cuenta los aspectos que juegan a favor y en contra de la organización. En el caso de los factores externos, se involucran las amenazas y las oportunidades, y en los factores externos se involucran las fortalezas y debilidades.

    .row.justify-content-center
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/tema3/img3.png", alt="alt")(data-aos="fade-up")         


    .row.justify-content-center.my-5
      .tarjeta.slyderA_bg_01.p-5
        SlyderA(tipo="b")
          .row
            .col-md-7.mb-4.mb-md-0
              ol.color-negro
                li 
                  span.text-bold 1. 
                  | Disponer de los materiales necesarios para la participación del equipo de trabajo (espacio iluminado y silencioso, cartelera con la matriz DOFA en blanco y en tamaño grande que todos puedan verla, post-its de colores, marcadores y lapiceros).
                li 
                  span.text-bold 2. 
                  | Reunir al equipo de trabajo con el que se quiere realizar el diagnóstico. En muchas organizaciones esta labor es realizada por el comité directivo, que normalmente está compuesto por la junta directiva, el gerente y los ejecutivos líderes de los diferentes departamentos.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt="alt")

          .row
            .col-md-7.mb-4.mb-md-0
              ol.color-negro
                li 
                  span.text-bold 3. 
                  | Elaborar con la ayuda de todos los asistentes un listado con las fortalezas de la organización. Para esto se sugiere tener en cuenta lo siguiente: 
              ul.lista-ul.ps-3
                li
                  i.fas.fa-square
                  | Son factores o aspectos que la empresa está desarrollando de manera eficaz y la hacen diferenciarse de sus competidores.
                li
                  i.fas.fa-square
                  | También son los elementos en los que la empresa es buena por naturaleza, y que le permiten destacar en un mercado.
                li
                  i.fas.fa-square
                  | Tienen todo que ver con la empresa y lo que ella es y hace, por lo tanto, una manera de verificar si lo que hemos pensado es realmente una fortaleza es considerar la siguiente pregunta: ¿el desarrollo de este elemento depende del trabajo interno en la empresa u organización? Si la respuesta es positiva, estamos ante una verdadera fortaleza, pero si la respuesta es negativa, probablemente estamos frente a una posible oportunidad. 
                li
                  i.fas.fa-square
                  | Algunos ejemplos de fortalezas son:
                ul.lista-ul.ps-4.mt-2
                  li
                    i.fas.fa-check
                    | Profesionalismo del equipo de trabajo. 
                  li
                    i.fas.fa-check
                    | Ubicación estratégica.
                  li
                    i.fas.fa-check
                    | Reconocimiento nacional del producto o servicio.
                  li
                    i.fas.fa-check
                    | Agilidad en la labor comercial.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt="alt")

          .row
            .col-md-7.mb-4.mb-md-0
              ol.color-negro
                li 
                  span.text-bold 4. 
                  | Desarrollar con la ayuda de todos los asistentes un listado de las debilidades de la empresa. Para esto se sugiere tener en cuenta lo siguiente:
              ul.lista-ul.ps-3
                li
                  i.fas.fa-square
                  | Son factores o aspectos que la organización no está desarrollando o que tiene falencias durante el proceso.
                li
                  i.fas.fa-square
                  | Son aquellos problemas y dificultades cuya responsabilidad de mejora recae sobre la empresa.
                li
                  i.fas.fa-square
                  | Las debilidades tienen que ver con la empresa, con lo que ella es y hace, por lo tanto, una manera de verificar si lo que hemos pensado sí es realmente una debilidad, es responder la siguiente pregunta: ¿el desarrollo y solución de este problema o factor negativo depende del trabajo interno de la organización? Si la respuesta es positiva, estamos ante una verdadera debilidad, pero si la respuesta es negativa, probablemente estamos frente a una posible amenaza.
                li
                  i.fas.fa-square
                  | Algunos ejemplos de debilidades son:
                ul.lista-ul.ps-4.mt-2
                  li
                    i.fas.fa-check
                    | Fallos en la comunicación entre el equipo de trabajo. 
                  li
                    i.fas.fa-check
                    | Problemas en el proceso de prestación del servicio.
                  li
                    i.fas.fa-check
                    | Falta de capacitaciones en actualización de temas para el personal.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img6.png', alt="alt")

          .row
            .col-md-7.mb-4.mb-md-0
              ol.color-negro
                li 
                  span.text-bold 5. 
                  | Redactar con la ayuda de todos los asistentes un listado de las oportunidades para la empresa. Para esto se sugiere tener en cuenta lo siguiente:
              ul.lista-ul.ps-3
                li
                  i.fas.fa-square
                  | Son factores o aspectos externos a la organización que pueden impactar de manera positiva la empresa.
                li
                  i.fas.fa-square
                  | Se encuentran fuera del control de la empresa, pero a veces, estas se convierten en fortalezas cuando la empresa adopta medidas para aprovecharlas.
                li
                  i.fas.fa-square
                  | No tienen que ver con la empresa, por lo tanto, una manera de verificar si lo que hemos pensado sí es una oportunidad es responder la siguiente pregunta: ¿el desarrollo de este factor depende del trabajo interno de la organización? Si la respuesta es negativa, estamos ante una verdadera oportunidad, pero si la respuesta es positiva, probablemente estamos frente a una fortaleza.
                li
                  i.fas.fa-square
                  | Algunos ejemplos de oportunidades son:
                ul.lista-ul.ps-4.mt-2
                  li
                    i.fas.fa-check
                    | Ofertas de capacitaciones por parte de instituciones de educación superior.
                  li
                    i.fas.fa-check
                    | Declaratorias o reconocimientos otorgados al territorio.
                  li
                    i.fas.fa-check
                    | Festividades del destino o territorio en donde pertenece la empresa.
                  li
                    i.fas.fa-check
                    | Licitaciones.
                  li
                    i.fas.fa-check
                    | Convocatorias para la asignación de recursos por parte de empresas privadas, gremios o fondos de inversión.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img7.png', alt="alt")

          .row
            .col-md-7.mb-4.mb-md-0
              ol.color-negro
                li 
                  span.text-bold 6. 
                  | Realizar con la ayuda de todos los asistentes un listado de las amenazas para la empresa. Para esto se sugiere tener en cuenta lo siguiente:
              ul.lista-ul.ps-3
                li
                  i.fas.fa-square
                  | Son factores o aspectos externos a la organización que pueden impactar de manera negativa la empresa.
                li
                  i.fas.fa-square
                  | Se encuentran fuera del control de la empresa, pero la manera en que se trata de mitigar el impacto que estas generan puede llegar a convertirse en una debilidad o fortaleza.
                li
                  i.fas.fa-square
                  | Son externas a la empresa, por lo tanto, una manera de verificar si lo que hemos pensado sí es una amenaza es responder la siguiente pregunta: ¿el desarrollo de este factor depende del trabajo interno de la organización? Si la respuesta es negativa, estamos ante una verdadera amenaza, pero si la respuesta es positiva, probablemente estamos frente a una debilidad.
                li
                  i.fas.fa-square
                  | Algunos ejemplos de amenazas son:
                ul.lista-ul.ps-4.mt-2
                  li
                    i.fas.fa-check
                    | Desastres naturales.
                  li
                    i.fas.fa-check
                    | Percepción negativa del destino o territorio general.
                  li
                    i.fas.fa-check
                    | Falta de políticas públicas para regular aspectos importantes en el territorio.
                  li
                    i.fas.fa-check
                    | La condición económica actual del país.
                  li
                    i.fas.fa-check
                    | Vandalismo o problemas de orden público.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img8.png', alt="alt")

          .row
            .col-md-7.mb-4.mb-md-0
              ol.color-negro
                li 
                  span.text-bold 7. 
                  | una vez se han terminado de listar todas las fortalezas, debilidades, oportunidades y amenazas de la empresa, se procede a formular o proponer las estrategias que permitan optimizar los aspectos positivos para la organización, y que mitiguen o corrijan los factores negativos, para hacerlo es importante tener en cuenta lo siguiente:
              ul.lista-ul.ps-3
                li
                  i.fas.fa-square
                  | Cómo se logra lo que queremos, es decir, la manera en la que se elige llevar a cabo el progreso.
                li
                  i.fas.fa-square
                  | Las acciones que se emprenden para lograr un objetivo. En este caso los objetivos son: 
                  
                ul.lista-ul.ps-4.mt-2
                  li
                    i.fas.fa-check
                    | FO (fortaleza y oportunidad): aprovechar las oportunidades a través de las fortalezas de la organización.
                  li
                    i.fas.fa-check
                    | DO (debilidad y oportunidad): aprovechar las oportunidades que se presentan para mitigar las debilidades con las que se cuenta.
                  li
                    i.fas.fa-check
                    | FA (fortaleza y amenaza): hacer uso de las fortalezas para darle manejo a las amenazas que se presentan.
                  li
                    i.fas.fa-check
                    | DA (Debilidad y amenaza): trabajar en las debilidades de la organización al mismo tiempo en que se manejan las amenazas que se presentan.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/img9.png', alt="alt")

    .row.my-5
      p A través del siguiente cuadro se explican los cuatro tipos de estrategias que se derivan de la matriz DOFA. Con esta estrategia se obtiene un conjunto de estrategias claras que permiten contar con una ruta de navegación para la empresa.

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt="alt")        

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4
          p La matriz DOFA da paso a las siguientes matrices: la MEFE y la MEFI, que se realizan con base en las estrategias planteadas en la DOFA, permitiendo analizar la efectividad de estas y su impacto.

    .row.mt-5
      h3 Matriz MEFE 

    .row.justify-content-center.my-5
      .col-lg-7(data-aos="fade-right")
        .cajon.color-primario.p-4
          p En el siguiente video se ampliará la información de la matriz de Evaluación de Factores Externos (MEFE), la cual es una herramienta de diagnóstico que permite identificar y evaluar los factores externos a través de las oportunidades y amenazas más importantes de la dependencia o entidad, las cuales puedan influir en su crecimiento y expansión. Dicha evaluación se realiza a través de un sistema de ponderaciones, comparando la información y situaciones que influyen en las metas y objetivos. 
      .col-lg-5.my-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img11.png', alt="alt")

    .row.mt-5(data-aos="zoom-in")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.my-5
      p Vea ahora la información sobre la Matriz de Evaluación de Factores Internos (MEFI), que constituye un instrumento que nos permite realizar una evaluación interna de la empresa para facilitar el análisis de la efectividad de las estrategias aplicadas, y conocer con detalle su impacto, evaluando las fortalezas y debilidades más relevantes para formular estrategias capaces de solventar, optimizar y reforzar los procesos internos ejecutados.

    .row.mt-5
      h3 Matriz MEFI

    .row.my-5
      p Para realizar la MEFI es necesario ser objetivos con la autoevaluación que se está realizando, identificar los factores importantes, teniendo en cuenta la actividad operativa que se desarrolla a diario, y asumir una posición crítica que realmente permita reconocer las debilidades para buscar un equilibrio interno. (Riverol #[i et al]., 2019, p.15).

    .row.justify-content-center.my-5
      .col-lg-10(data-aos="zoom-in")
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img12.png', alt="alt")

          div(x="23%" y="70%" numero="+")
            h4 Identificar los factores internos
            p Identificar los factores internos más importantes que puedan impactar en el éxito de la empresa. Para esto podemos seleccionar las fortalezas y debilidades más importantes identificadas en la DOFA.

          div(x="24%" y="34%" numero="+")
            h4 Asignar valores a cada factor
            p Asignar valores a cada factor, que vayan entre 0.0 (menor importancia) a 1.0 (más importante). Es relevante que la suma de los valores dé como resultado 1.0 %, lo que significa que se deben asignar los valores, distribuyendo el 1.0 entre las debilidades y fortalezas que se hayan identificado. 

          div(x="54%" y="47%" numero="+")
            h4 Asignar calificaciones
            p Asignar calificaciones en el apartado ‘Clasificación’ según el factor que represente: 
            ul.lista-ul.ps-3
              li
                i.fas.fa-square
                | Debilidad mayor (calificación 1).
              li
                i.fas.fa-square
                | Debilidad menor (calificación 2). 
              li
                i.fas.fa-square
                | Fortaleza menor (calificación 3).
              li
                i.fas.fa-square
                | Fortaleza mayor (calificación 4).

          div(x="79%" y="7%" numero="+")
            h4 Los valores y las clasificaciones se multiplican
            p Los valores y las clasificaciones se multiplican para que, de esta manera, se pueda conocer el resultado ponderado de cada fortaleza y debilidad, que será ubicado en la columna ‘Puntuación’.

          div(x="78%" y="47%" numero="+")
            h4 Se suman los valores resultantes
            p Se suman los valores resultantes de la multiplicación anterior y este es el resultado total de la matriz. Al finalizar de diligenciar la matriz se procede a realizar un análisis, teniendo en cuenta que el valor ponderado promedio es de 2.5 y que los puntajes con valor muy por debajo del promedio caracterizan a las empresas que son débiles internamente, mientras que los puntajes más altos indican una posición interna fuerte  (Pibaque-Pionce #[i et al]., 2020, p. 21).


    .row.mt-5
      h3 Matriz MOE 

    .row.justify-content-center
      .col-lg-10(data-aos="flip-down")
        .bloque-texto-g.color-acento-contenido.p-4
          .bloque-texto-g3__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img13.png')})`}"
          )
          .bloque-texto-g3__texto.p-3
            p En cuanto a la matriz MOE, también conocida como matriz de la planificación estratégica, es aquella que a partir de las estrategias planteadas en la matriz DOFA, ayuda a establecer la prioridad de ejecución de estas, asignándoles valores a cada una de las diversas estrategias. Para ilustrarse, observe la siguiente infografía.
            

    .row.my-5
      p Con base en el análisis derivado de la matriz MOE se establecen e identifican las estrategias en orden de importancia y prioridad.

    .row.justify-content-center
      .col-lg-10(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema3/img14.png', alt="alt")        

    .row.justify-content-center.my-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Por último, es importante definir cuáles son los criterios técnicos para analizar la información y el avance de lo planteado, por eso lo invitamos a ver la valoración de la información.


</template>

<script>
export default {
  name: 'Tema3',
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
