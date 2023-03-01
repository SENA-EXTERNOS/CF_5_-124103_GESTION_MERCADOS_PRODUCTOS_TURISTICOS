<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col-lg-7.mb-3
        p En este recurso educativo profundizará sobre el diagnóstico del entorno turístico. Al finalizar, esperamos que logre diagnosticar el entorno turístico, de acuerdo con las metodologías y la estructura del mercado, con el fin de que a futuro pueda proyectarse en este, según segmentos y métodos de pronóstico. Con estos recursos podrá conocer los factores internos y externos de los establecimientos turísticos, con base en el marco estratégico de la organización, para el diseño de estrategias de gestión que le permitan potenciar sus fortalezas, trabajar en sus debilidades, aprovechar las oportunidades y manejar las amenazas que puedan presentarse.
        p En el siguiente video conocerá de forma general, la temática que estudiará a lo largo del componente formativo.
        
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")

    .row.mt-5(data-aos="fade-zoom")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
