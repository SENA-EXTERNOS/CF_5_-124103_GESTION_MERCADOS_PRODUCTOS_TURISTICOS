<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido.mt-5
      .titulo-principal__numero
        span 
          i.fas.fa-puzzle-piece
      h1 Actividad didáctica  
    

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar2.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Diagnóstico del entorno turístico
        p A continuación, se validarán los conceptos relacionados con los fundamentos generales del marco o direccionamiento estratégico. Esta actividad le permitirá determinar el grado de apropiación de los contenidos del componente formativo.
        p Complete los espacios en blanco de cada una de las frases y luego haga clic en el botón “verificar respuesta”. Este ejercicio es de repaso, no constituye una actividad evaluativa.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar la frase
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
