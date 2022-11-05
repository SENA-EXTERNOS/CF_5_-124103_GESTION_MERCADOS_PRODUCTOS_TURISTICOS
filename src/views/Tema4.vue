<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Valoración de información

    .row.justify-content-center
      .col-lg-7(data-aos="fade-up-right")
        p Piattini y Ruiz (2020) mencionan la importancia de tener en cuenta no solo los aspectos numéricos al momento de tomar decisiones, sino también los activos intangibles de la empresa como fuente principal de ventaja competitiva. (p.44)      
        .cajon.color-acento-contenido.px-4.py-3.my-3
          p Considerando lo anterior, la información resultante de los análisis realizados al interior de la organización, a través de las diferentes matrices aplicadas (DOFA, MEFE, MEFI y MOE), permite llegar a una toma de decisiones importantes, con el propósito de comprender el estado en el que se encuentra la empresa, y posteriormente plantear un plan de desarrollo estratégico cuyo avance pueda ser medible y controlado. 
        p El Balance #[i scorecard] (BSC), instrumento anteriormente mencionado, hace posible valorar la información, ya que “es un sistema de gestión estratégica que les permite clarificar la visión y la estrategia, comunicar y vincular los objetivos y los indicadores estratégicos, alinear las iniciativas estratégicas, y aumentar la retroalimentación y la formación estratégica.” (Kaplan y Norton, 1992, citados en Piattini y Ruiz, 2020, p. 44).
 
      .col-lg-5.my-5(data-aos="fade-up-left")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt="alt")  

    .row.my-3
      p De acuerdo con lo anterior, a continuación se presenta la síntesis de este componente formativo.



</template>

<script>
export default {
  name: 'Tema4',
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
