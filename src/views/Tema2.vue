<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Acuerdos comerciales

    .row.justify-content-center.my-5
      .col-6.col-lg-2
        figure
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")(data-aos="fade-rigt")          
      .col-lg-10.my-3
        p Un acuerdo comercial es una alianza representada mediante un documento que se da entre dos o más empresas u organizaciones que se benefician entre sí, a través de sus actividades productivas y de los intercambios pactados en dicho documento. 

    .row.justify-content-center.my-5(data-aos="fade-down")
      TabsC.color-acento-contenido.p-5
        .py-3.py-md-4(titulo="Tipos")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/tema2/img2.png", alt="alt") 
            .col-md-7
              p.mt-5 Existen diferentes tipos de acuerdos comerciales según las estrategias de integración, estas no solo surgen como una respuesta para contribuir con la disminución de las amenazas que puedan presentarse dentro de este contexto globalizado, sino también como medio para que las empresas puedan obtener un mayor control sobre sus operaciones y disminuir el poder negociador que pueden llegar a tener distribuidores, proveedores e incluso, competidores. (Delgado, 2020, p. 2).  En este componente se abordarán dos estrategias de integración comercial.

        .py-3.py-md-4(titulo="Acuerdo comercial de integración horizontal")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/tema2/img3.png", alt="alt") 
            .col-md-7
              p.mt-5 La integración horizontal es una estrategia en la cual dos o más empresas que hacen parte de la misma línea de productos y servicios, es decir, que son competencia directa o sustituta, llegan a consensos comerciales para aunar esfuerzos y así mejorar su capacidad competitiva. 

        .py-3.py-md-4(titulo="Acuerdo comercial de integración vertical")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/tema2/img4.png", alt="alt") 
            .col-md-7
              p.mt-3 La integración vertical es una estrategia empresarial a la que recurren las grandes corporaciones, donde estas se involucran en cada uno de los eslabones de su cadena de valor: desde la obtención de materias primas y su transformación, hasta la distribución al consumidor final. (Delgado, 2020, p. 1).
              p Una empresa turística que aplica la estrategia vertical es, por ejemplo, una agencia de viajes, la cual se asegura de estar presente en toda la cadena de valor turística de la que hace parte, comprando todas las habitaciones de un hotel, todos los asientos de un vuelo, adquiriendo los alquileres de diferentes medios de transporte lúdicos para el viajero, además de entradas a parques temáticos, atracciones y diferentes atractivos. Con esto, dichas agencias logran que el viajero, al adquirir un plan vacacional con ellos, pueda hacer la compra directamente con la agencia, generando entradas a la organización y facilidad al viajero. 

    .row.my-5
      p Profundice más sobre esta teoría con el análisis estratégico.



</template>

<script>
export default {
  name: 'Tema2',
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
