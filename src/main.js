import { createApp } from 'vue/dist/vue.esm-bundler' 
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import { useI18n } from 'vue-i18n'


//import { createI18n } from 'vue-i18n'

/*const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      message: {
        fullstackdev: 'Fullstack Developer',
        enginyerInfo: 'Computer Engineer',
        intro1: 'with experience in languages such as ',
        and: ' and ',
        intro2: ' for backend application development, ',
        intro3: ' for web frontend development, with experience in different database environments such as ',
        or: ' or ',
        aboutme: 'A bit about me',
        me1: "I'm Dani, a passionate programmer and future computer engineer :)",
        me2: "I'm a 22-year-old from Badalona who has always been fascinated by technology, although I also enjoy sports, cooking, and music.",
        me3: "I like simple things — from having beers with friends to honest and empathetic relationships. I believe good personal and professional relationships come from that.",
        me4: "If you want to know me better professionally, check out the next section of my portfolio, where I talk about my projects and experiences.",
        readArticle: 'Read article',
        myStack: 'My Stack',
        contactMe: 'Contact me'
      }
    },

    cat: {
      message: {
        fullstackdev: 'Desenvolupador Fullstack',
        enginyerInfo: 'Enginyer informàtic',
        intro1: 'amb experiència en llenguatges com ',
        and: ' i ',
        intro2: ' per al desenvolupament d\'aplicacions backend, ',
        intro3: ' per al frontend d\'aplicacions web, amb experiència amb diferents entorns de bases de dades com ',
        or: ' o ',
        aboutme: 'Una mica sobre mi',
        me1: 'Sóc el Dani, un apassionat de la programació i futur enginyer informàtic :)',
        me2: 'Sóc un noi de 22 anys de Badalona, que des de ben petit ha mostrat un gran interès per la tecnologia, tot i que tinc altres hobbies com l’esport, la cuina o la música.',
        me3: 'M’agraden les coses senzilles — tant les birres amb els amics com el tracte humà i empàtic amb la gent. Crec que les bones relacions personals i laborals sorgeixen d’això.',
        me4: 'Si vols conèixer-me més professionalment, visita la següent secció del meu portafoli, on parlo dels meus projectes i experiències.',
        readArticle: 'Llegeix l\'article',
        myStack: 'El meu Stack',
        contactMe: 'Contacta amb mi'
      }
    },

    esp: {
      message: {
        fullstackdev: 'Desarrollador Fullstack',
        enginyerInfo: 'Ingeniero Informático',
        intro1: 'con experiencia en lenguajes como ',
        and: ' y ',
        intro2: ' para el desarrollo de aplicaciones backend, ',
        intro3: ' para el frontend de aplicaciones web, con experiencia en diferentes entornos de bases de datos como ',
        or: ' o ',
        aboutme: 'Un poco sobre mí',
        me1: 'Soy Dani, un apasionado de la programación y futuro ingeniero informático :)',
        me2: 'Soy un chico de 22 años de Badalona, que desde pequeño ha mostrado un gran interés por la tecnología, aunque también tengo otros hobbies como el deporte, la cocina o la música.',
        me3: 'Me gustan las cosas sencillas — tanto las cervezas con amigos como el trato humano y empático con la gente. Creo que las buenas relaciones personales y laborales surgen de eso.',
        me4: 'Si quieres conocerme mejor profesionalmente, visita la siguiente sección de mi portafolio, donde hablo de mis proyectos y experiencias.',
        readArticle: 'Leer artículo',
        myStack: 'Mi Stack',
        contactMe: 'Contáctame'
      }
    }
  }
});
*/
const app = createApp(App)
app.use(i18n)
app.mount('#app')