<template>
    <div class="p-5 h-screen mt-20">
      <h2
        v-intersect
        class="relative text-7xl font-bold mb-4 text-white text-right mr-40 opacity-0 translate-y-10 transition duration-700 ease-out pt-5"
      >
        Una mica sobre mi
      </h2>
  
      <div class="flex pl-8 pr-15">
        <div
          v-intersect
          class="w-1/3 relative overflow-hidden bg-position-bottom opacity-0 translate-y-10 transition duration-700 ease-out delay-200"
        >
          <div class="relative rounded-xl">
            <div class="absolute inset-y-0 right-0 w-1/18 bg-gradient-to-l from-black to-transparent"></div>
            <div class="absolute inset-x-0 top-0 h-1/18 bg-gradient-to-b from-black to-transparent"></div>
            <img
              src="/assets/dani-soler-2.jpeg"
              alt="Dani Soler"
              class="object-cover bg-position-bottom object-bottom rounded-3xl"
            />
            <div class="absolute inset-y-0 left-0 w-1/18 bg-gradient-to-r from-black to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 h-1/18 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
  
        <div
          v-intersect
          class="w-2/3 overflow-hidden bg-position-bottom opacity-0 translate-y-10 transition duration-700 ease-out delay-500"
        >
          <div class="relative m-20">
            <p class="text-gray-300 mb-6 text-xl mt-5">
                <strong class="text-white-400">Hola món!</strong> Sóc el Dani, un apassionat de la programació i futur enginyer informàtic :) 
                    <br><br>
                Sóc un noi de 22 anys de Badalona, que desde ben petit ha mostrat sempre un gran interés per la tecnología, tot i que crec que tinc altres hobbies
                que penso que em definirien millor, com l'esport, la cuina o la música. Tot i així el que més m'agrada fer amb el meu temps lliure es invertir-lo 
                amb la gent que m'estimo i viure tot tipus d'experiencies amb amics i familia. <br><br>
                M'agraden que les coses siguin senzilles, no només em refereixo a la birreta del diumenge amb els amics o la peli de la nit amb la familia,
                sinó també al tracte amb les persones sigui sincer, constructiu i empatic. Considero que les bones relacions que he tingut a nivell personal i laboral
                s'han donat gràcies a aquest tracte que hi tinc amb la gent. 
                
                <br><br>
                Per acabar, m'agradaria explicar coses sobre mi que crec que em defineixen: M'agraden els bulldogs anglesos, les pel·lícules de por em fan riure, 
                no m'agrada la sindria però si el meló, tinc una col·lecció de  bufandes de futbol que m'intercanvio amb les aficions rivals quan venen a Barna, 
                el grup de música que més m'identifica és Manel i no suporto Melendi.

                <br><br>
                Si em vols coneixer més en l'àmbit professional, et convido a que visitis la següent secció del meu portafoli, on podràs llegir sobre els meus projectes,
                experiències laborals i com he arribat fins aquest punt.
                
              
            </p>
            <a
              href="/projectes"
              class="text-green-400 hover:text-green-300 transition duration-300 ease-in-out "
            >
              <strong class="text-3xl">Llegir Article</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
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
  