<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En la siguiente imagen verá la manera en la que se relacionan todos los temas del presente componente formativo. Es de resaltar que el marco estratégico cuenta con cinco componentes (misión, visión, valores corporativos, objetivos organizacionales, metas organizacionales), y que traza la ruta estratégica construida a partir de las estrategias en el BSC (#[i Balance scorecard]), las cuales, a su vez, se derivan del diagnóstico que se realiza con el apoyo de instrumentos o matrices (COFA, MEFE, MEFI, MOE). Además, las estrategias también permiten tener en cuenta en la ruta estratégica los acuerdos comerciales de integración que los prestadores de servicios turísticos o entes gubernamentales pueden llegar a formar para beneficio de la empresa. 

    .row.justify-content-center.my-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
