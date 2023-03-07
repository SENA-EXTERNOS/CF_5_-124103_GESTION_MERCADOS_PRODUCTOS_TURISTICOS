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
        p Es de gran importancia tener en cuenta, no solo los aspectos numéricos al momento de tomar decisiones, sino también los activos intangibles de la empresa como fuente principal en la ventaja competitiva.
        .cajon.color-acento-contenido.px-4.py-3.my-3
          p Considerando lo anterior, la información resultante de los análisis realizados al interior de la organización, a través de las diferentes matrices aplicadas (DOFA, MEFE, MEFI y MOE), permite llegar a una toma de decisiones importantes, con el propósito de comprender el estado en el que se encuentra la empresa, y posteriormente plantear un plan de desarrollo estratégico cuyo avance pueda ser medible y controlado. 
        p El <i>Balance scorecard</i> (BSC), instrumento anteriormente mencionado, hace posible valorar la información, ya que es un sistema de gestión estratégica que les permite clarificar la visión y la estrategia, comunicar y vincular los objetivos y los indicadores estratégicos, alinear las iniciativas estratégicas, y aumentar la retroalimentación y la formación estratégica.

      .col-lg-5.my-5(data-aos="fade-up-left")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt="alt")  

    .row.my-3.justify-content-center
      .col-lg-10
        .cajon.color-primario.px-4.py-3.my-3
          p Aprendiz, ha culminado de manera satisfactoria el estudio de los temas de este componente formativo, lo invitamos a revisar todos los recursos que se encuentran en el menú para que afiance sus conocimientos.



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
