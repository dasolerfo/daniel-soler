<template>
  <div class="flex h-screen bg-black text-white p-10 items-center">
    <!-- Columna esquerra: Fotografia (1/3) -->
    <div
      v-intersect
      class="w-1/3 h-full relative overflow-hidden opacity-0 translate-y-10 transition duration-700 ease-out delay-200 rounded-3xl"
    >
      <img
        src="/assets/dani-soler-2.jpeg"
        alt="Dani Soler"
        class="object-cover w-full h-full rounded-3xl"
      />

      <!-- Gradients decoratius (opcionals) -->
      <div class="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black/70 to-transparent"></div>
      <div class="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>

    <!-- Columna dreta: Títol + Descripció (2/3) -->
    <div class="w-2/3 pl-16 flex flex-col justify-center">
      <h2
        v-intersect
        class="text-6xl font-bold mb-8 text-green-400 opacity-0 translate-y-10 transition duration-700 ease-out"
      >
        Una mica sobre mi
      </h2>

      <p
        v-intersect
        class="text-gray-300 mb-8 text-lg leading-relaxed opacity-0 translate-y-10 transition duration-700 ease-out delay-200"
      >
        <strong class="text-white">Hola món!</strong> Sóc el Dani, un apassionat de la programació i futur enginyer informàtic :) 
        <br /><br />
        Sóc un noi de 22 anys de Badalona, que des de ben petit ha mostrat un gran interès per la tecnologia, 
        tot i que tinc altres hobbies com l’esport, la cuina o la música. 
        <br /><br />
        M’agraden les coses senzilles — tant les birres amb els amics com el tracte humà i empàtic amb la gent. 
        Crec que les bones relacions personals i laborals sorgeixen d’això.
        <br /><br />
        Si vols conèixer-me més professionalment, visita la següent secció del meu portafoli, 
        on parlo dels meus projectes i experiències.
      </p>

      <a
        href="/projectes"
        class="text-green-400 hover:text-green-300 transition duration-300 ease-in-out text-2xl font-semibold"
      >
        Llegir Article →
      </a>
    </div>
  </div>
</template>


  
  
  <script lang="ts">
  export default {
    directives: {
      intersect: {
        mounted(el) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                el.classList.remove('opacity-0', 'translate-y-10', '-translate-y-10')
                //observer.unobserve(el)
              } else {
                // Detect scroll direction
                const currentScroll = window.scrollY
                el._lastScroll = el._lastScroll || 0
                const goingDown = currentScroll > el._lastScroll
                el._lastScroll = currentScroll

                if (!goingDown) {
                  el.classList.add('translate-y-10')
                  el.classList.remove('-translate-y-10')
                } else {
                  el.classList.add('-translate-y-10')
                  el.classList.remove('translate-y-10')
                }
                el.classList.add('opacity-0')
              }
            },
            {
              threshold: 0.4,
            }
          )
          observer.observe(el)
        },
      },
    },
  }
  </script>
  