
// Data 
import { useFonts } from "expo-font";
// Storage keys
export const COMPETENCE_STORAGE_KEY = '@competence_data'
export const COUNTER_STORAGE_KEY ='@counter_data';
export const TUVA_STORAGE_KEY ='@tuva_data';
export const APP_TROPHIES_STORAGE_KEY ='@main_trophies_data';
export const APP_WEEKS_STORAGE_KEY ='@main_weeks_data';

// Vibration patterns. Time unit is ms. Odd cells are pause and even cells are vibration duration.

export const NOTIFY_VIBRATE = [ 0, 200 ]; // 0 ms pause, 200 ms vibration
export const SHORT_VIBRATE = [ 0, 100 ]; // 0 ms pause, 100 ms vibration
export const LONG_VIBRATE = [ 0, 500 ]; // 0 ms pause, 500 ms vibration

import candyBlueSvg from '../assets/candy_blue.svg'
import candyGreenSvg from '../assets/candy_green.svg'
import backArrowSvg from '../assets/back_arrow.svg'
import uncheckedSvg from '../assets/unchecked_button.svg'
import checkedSvg from '../assets/checked_button.svg'
import uncheckedTuvaSvg from '../assets/unchecked_tuvabutton.svg'

// Icon resources
export const ICONS_SVG = {
  candyBlueSvg: candyBlueSvg,
  candyGreenSvg: candyGreenSvg,
  backArrowSvg: backArrowSvg,
  uncheckedSvg: uncheckedSvg,
  checkedSvg: checkedSvg,
  uncheckedTuvaSvg: uncheckedTuvaSvg,
};

// Numeric constants
export const NUMERIC = {
  opacityTouchFade: 0.6,
}

// Theme colors
export const THEME = {
  black: "#000",
  lightBackground: "#F3F2EC",
  darkBlue: "#023B5D",
  blue: "#0693E3",
  lightBlue: "#8ED1FC",
  brightRed: "#D3232E",
  gray: "#ABB8C3",
  lightGray: "#d9d9d9",
  white: "#FFFFFF",
};

export const COMPETENCE_DATA = [
  {
    buttonText: 'Hyvinvointi -osaaminen',
    detailsTitle: 'Minä osaan: Hyvinvointiosaaminen',
    description: 'Opiskelija ymmärtää terveyden ja terveellisten elämäntapojen merkityksen. Hän vaalii fyysistä, psyykkistä ja sosiaalista toimintakykyään ja hyvinvointiaan. Opiskelija omaksuu hyvinvointiaan tukevia toimintatapoja sekä tunnistaa niitä edistäviä yhteisöjä. Hän osaa suunnitella omaa ajankäyttöään siten, että opiskelu ja vapaa-aika vuorottelevat tarkoituksenmukaisesti. Opiskelija osaa hakea tietoa, apua ja tukea oman hyvinvointinsa ylläpitämiseen sekä hakeutua tarvittaessa hyvinvoinnin ja terveydenhuollon palveluiden pariin.',
    tasks: [
      {
        title: 'Tunnistan terveyttä ja hyvinvointia edistäviä ja haittaavia tekijöitä.',
      },
      {
        title: 'Ymmärrän omien valintojen merkityksen hyvinvoinnilleni.',
      },
      {
        title: 'Pidän huolta omasta fyysisestä, psyykkisestä ja sosiaalisesta hyvinvoinnistani.',
      },
      {
        title: 'Ymmärrän opiskelun, levon ja vapaa-ajan vuorottelun merkityksen hyvinvoinnille.',
      },
      {
        title: 'Pidän yllä opintoja tukevaa vuorokausirytmiä.',
      },
      {
        title: 'Osaan käyttää alueen sosiaali- ja terveydenhuollon palveluita.',
      },
      {
        title: 'Osallistun omaa hyvinvointia edistäviin liikunta- ja kulttuurimuotoihin.',
      },
    ]
  },
  {
    buttonText: 'Monilukutaito',
    detailsTitle: 'Minä osaan: Monilukutaito',
    description: 'Opiskelija kehittyy viestien tulkitsijana ja tuottajana sekä harjaantuu toimimaan erilaisten tekstien kanssa. Opiskelija osaa tarkastella ja tulkita kriittisesti erilaisia tekstejä. Tekstillä tarkoitetaan laajasti sekä puhuttuja että kirjoitettuja tekstejä, jotka sisältävät erilaisia kielimuotoja arkikielestä opiskelun kieleen ja eri tiedonalojen käsitteelliseen kieleen. Luku- ja kirjoitustaidon ohella opiskelija kehittää kuvanlukutaitoaan, medialukutaitoaan ja numeerista lukutaitoaan opiskelusuunnitelmansa mukaisesti.',
    tasks: [
      {
        title: 'Osaan toimia erilaisissa vuorovaikutustilanteissa.',
      },
      {
        title: 'Kirjoitan eri tilanteisiin soveltuvaa tekstiä.',
      },
      {
        title: 'Hankin opinnoissani tarvittavia matematiikan taitoja.',
      },
      {
        title: 'Haen tietoa eri lähteistä.',
      },
      {
        title: 'Osaan arvioida tiedon luotettavuutta.',
      },
      {
        title: 'Osaan käyttää eri viestintätapoja.',
      },
      {
        title: 'Ymmärrän tekijänoikeudet.',
      }
    ]
  },
  {
    buttonText: 'Digiosaaminen',
    detailsTitle: 'Minä osaan: Digiosaaminen',
    description: 'Opiskelija osaa käyttää digitaalisia palveluita osana oppimista ja ongelmanratkaisua. Opiskelija osaa toimia vastuullisesti sosiaalisessa mediassa sekä käyttää digitaalisia palveluita asioidessaan viranomaisten ja muiden sähköisiä asiointia edellyttävien palveluntarjoajien kanssa.',
    tasks: [
      {
        title: 'Kehitän ja päivitän digiosaamistani.',
      },
      {
        title: 'Käytän sähköisiä välineitä ja sovelluksia.',
      },
      {
        title: 'Toimin sähköisissä oppimisympäristöissä asiallisesti.',
      },
      {
        title: 'Toimin vastuullisesti sosiaalisessa mediassa.',
      },
      {
        title: 'Käytän digitaalisia palveluita.',
      },
    ]
  },
  {
    buttonText: 'Ympäristö- osaaminen',
    detailsTitle: 'Minä osaan: Ympäristöosaaminen',
    description: 'Opiskelija ymmärtää kestävän kehityksen merkityksen yhteiskunnalle ja maapallolle ja osaa toimia kestävän kehityksen mukaisesti. Opiskelija tunnistaa ja ymmärtää keskeisiä ympäristön muutoksia  ja ihmisen toiminnan merkityksen niihin. Hän tuntee kestävän kehityksen tavoitteet ja ymmärtää ilmiöiden vaikutuksen toisiinsa, mukaan lukien kulttuurisen, sosiaalisen ja taloudellisen näkökulman. Opiskelijaa osaa toimia kestävää elämäntapaa tukien ja ottaa vastuuta ympäristöstä yhteistyössä muiden kanssa.',
    tasks: [
      {
        title: 'Pohdin kestävän tulevaisuuden periaatteiden toteutumista omassa ja yhteisöni toiminnassa.',
      },
      {
        title: 'Toimin kestävän tulevaisuuden periaatteiden mukaisesti.',
      },
      {
        title: 'Ymmärrän, millaisia vaikutuksia omalla ja muiden toiminnalla on.',
      },
      {
        title: 'Kannustan muita toimimaan kestävän tulevaisuuden periaatteiden mukaan.',
      },
    ]
  },
  {
    buttonText: 'Kulttuuri- osaaminen',
    detailsTitle: 'Minä osaan: Kulttuuriosaaminen',
    description: 'Opiskelija syventää tietojaan ja ymmärrystään omasta identiteetistään sekä opiskeluyhteisön ja yhteiskunnan moninaisuudesta, jossa erilaiset identiteetit, kielet, uskonnot ja katsomukset elävät rinnakkain ja vuorovaikutuksessa keskenään. Opiskelija saa kokemuksia kansainvälisyydestä omassa arjessaan ja opiskeluympäristössään sekä esimerkiksi vierailujen, kulttuuritapahtumien, verkostoyhteistyön tai muun yhteistön kautta. Mahdollinen kieliprofiilin laatiminen tukee osaltaan opiskelijan ymmärrystä kielellisestä identiteetistään sekä hänen kasvuaan kielenoppijana ja -käyttäjänä.',
    tasks: [
      {
        title: 'Tutustun itseeni.',
      },
      {
        title: 'Hyväksyn itseni ja yhteisöni jäsenet omana itsenään.',
      },
      {
        title: 'Ymmärrän erilaisia tapoja elää.',
      },
      {
        title: 'Pohdin omaa kulttuuriani.',
      },
      {
        title: 'Osaan toimia monikulttuurisessa maailmassa.',
      },
      {
        title: 'Hankin kokemuksia kansainvälisyydestä.',
      }
    ]
  },

  {
    buttonText: 'Yhteiskunta- osaaminen',
    detailsTitle: 'Minä osaan: Yhteiskuntaosaaminen',
    description: 'Opiskelija ymmärtää demokraattisen, oikeudenmukaisen sekä tasa-arvoon ja yhdenvertaisuuteen perustuvan yhteiskunnan toimintaperiaatteita ja rakenteita. Hän osaa vaikuttaa oman ryhmänsä ja oppilaitoksensa asioihin sekä ymmärtää, miten yhteiskunnallisiin kysymyksiin voi ottaa kantaa.  Opiskelija omaksuu aktiivisen kansalaisuuden ja toimijuuden taitoja. Opiskelija ymmärtää työn merkityksen yksilön elämässä ja yhteiskunnassa.',
    tasks: [
      {
        title: 'Tähtään työelämään.',
      },
      {
        title: 'Osallistun oman yhteisöni päätöksentekoon.',
      },
      {
        title: 'Toimin tasa-arvoisesti ja oikeudenmukaisesti.',
      },
      {
        title: 'Tunnen demokratian periaatteet.',
      },
      {
        title: 'Tutustun yhteiskunnan toimintaan ja vaikuttamisen eri tapoihin.',
      },

    ]
  },
  {
    buttonText: 'Vuorovaikutus- osaaminen',
    detailsTitle: 'Minä osaan: Vuorovaikutusosaaminen',
    description: 'Opiskelija pyrkii toimimaan tilanteen vaatimalla tavalla erilaisissa vuorovaikutustilanteissa sekä ilmaisee erilaisia näkökantoja rakentavasti. Hän oppii kuuntelemaan ja kunnioittamaan toisten näkemyksiä ja tuomaan omia näkökulmiaan esille yksilönä ja ryhmän jäsenenä sekä kehittää empatiakykyään. Opiskelija osaa käyttää viestinnässä eri kieliä asianmukaisesti ja toimivasti. Opiskelija osaa viestiä asianmukaisesti myös erilaisilla sosiaalisen median alustoilla.',
    tasks: [
      {
        title: 'Osaan kuunnella ja keskustella huomioiden toiset.',
      },
      {
        title: 'Tunnistan roolit erilaisissa yhteisöissä ja vuorovaikutustilanteissa.',
      },
      {
        title: 'Osallistun turvallisen ilmapiirin rakentamiseen yhdessä muun opiskelijayhteisön kanssa.',
      },
      {
        title: 'Kunnioitan eri yhteisöjen tapoja toimia.',
      },
      {
        title: 'Harjoittelen tunnetaitoja.',
      },
    ]
  },
  {
    buttonText: 'Oppimaan oppiminen',
    detailsTitle: 'Minä osaan: Oppimaan oppiminen',
    description: 'Opiskelija osaa hankkia tietoa sekä jäsentää, arvioida ja soveltaa sitä. Hän osaa ottaa vastuuta opinnoistaan ja suunnitella niitä tavoitteellisesti. Hän tunnistaa ja osaa käyttää tarkoituksenmukaisia ja monipuolisia oppimistapoja ja -strategioita ja ymmärtää vertaisryhmän ja muun lähipiirin merkityksen oppimisen ja opiskelun tukena. Opiskelija kehittää opiskelukielen taitoaan tavoitteellisesti siten, että pystyy käyttämään puhuttua ja kirjoittua kieltä erilaisissa oppimisympäristöissä.',
    tasks: [
      {
        title: "Tunnistan omia vahvuuksiani.",
      },
      {
        title: "Tunnistan, mihin tarvitsen apua ja ohjausta.",
      },
      {
        title: "Suunnittelen omia tavoitteitani ja opintojani.",
      },
      {
        title: 'Etsin aktiivisesti tietoa.',
      },
      {
        title: 'Tiedän miten opin parhaiten.',
      },
      {
        title: 'Osaan toimia erilaisissa oppimisympäristöissä.',
      },
      {
        title: 'Vahvistan suomen kielen taitoani.',
      },
      {
        title: 'Otan vastuun opinnoistani.',
      },
      {
        title: 'Osaan toimia itsenäisesti ja ryhmässä.',
      },
    ]
  }
]

export const TUVA_DATA = [
  {
    id: 1,
    title: "Opiskelu- ja urasuunnittelutaidot",
    scope: "2-10 viikkoa",
    url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698963",
    initValue: 2,
    maxValue: 10,
    checked: false,
  },
  {
    id: 2,
    title: "Perustaitojen vahvistaminen",
    scope: "1-30 viikkoa",
    url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698964",
    initValue: 1,
    maxValue: 30,
    checked: false,
  },
  {
    id: 3,
    title: "Lukiokoulutuksen opinnot ja niihin valmentautuminen",
    scope: "1-30 viikkoa",
    url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698965",
    initValue: 1,
    maxValue: 30,
    checked: false,
  },
  {
    id: 4,
    title: "Ammatillisen koulutuksen opinnot ja niihin valmentautuminen",
    scope: "1-30 viikkoa",
    url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698966",
    initValue: 1,
    maxValue: 30,
    checked: false,
  },
  {
    id: 5,
    title: "Työelämätaidot ja työelämässä tapahtuva oppiminen",
    scope: "1-20 viikkoa",
    url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698967",
    initValue: 1,
    maxValue: 20,
    checked: false,
  },
  {
    id: 6,
    title: "Arjen taidot ja yhteiskunnallinen osallisuus",
    scope: "1-20 viikkoa",
    url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698968",
    initValue: 1,
    maxValue: 20,
    checked: false,
  },
  {
    id: 7,
    title: "Valinnaiset opinnot",
    scope: "1-10 viikkoa",
    url: "https://eperusteet.opintopolku.fi/#/_Toc408831087/toteutussuunnitelma/2689216/tutkintoonvalmentava/sisalto/2698969",
    initValue: 1,
    maxValue: 10,
    checked: false,
  },
];
export const STRINGS = [
  {
    tuvaHeading: "TUVA-koulutuksen osat",
    tuvaInstructions:
      "Sijoita opintoviikot laatikoihin valintojesi mukaan, yhteensä 38 viikkoa. Pakolliset viikot ovat merkittynä valmiiksi.",
      tuvaInstructionsForCourseComplete: "Suoritettuasi opintoviikon, klikkaa palloa."
  },
];

export const dataPublicTransport = [
    {
      id: 1,
      city: "Helsinki",
      url: "https://www.hsl.fi/"
    },
    {
      id: 2,
      city: "Imatra",
      url: "https://www.imatra.fi/asuminen-ja-ymparisto/joukkoliikenne/"
    },
    {
      id: 3,
      city: "Joensuu",
      url: "https://jojo.joensuu.fi/"
    },
    {
      id: 4,
      city: "Kajaani",
      url: "https://www.kajaaninjoukkoliikenne.fi/"
    },
    {
      id: 5,
      city: "Kokkola",
      url: "https://pohjolanmatka.fi/linjaliikenne/kokkolan-paikallisliikenne/"
    },
    {
      id: 6,
      city: "Kuopio",
      url: "https://vilkku.kuopio.fi/"
    },
    {
      id: 7,
      city: "Lappeenranta",
      url: "https://www.lappeenranta.fi/fi/Kartat-ja-liikenne/Paikallisliikenne/Aikataulut/"
    },
    {
      id: 8,
      city: "Oulu",
      url: "https://www.oulunjoukkoliikenne.fi/reitit-ja-aikataulut/"
    },
    {
      id: 9,
      city: "Pori",
      url: "https://www.pori.fi/joukkoliikenne"
    },
    {
      id: 10,
      city: "Rovaniemi",
      url: "https://www.linkkari.fi/"
    },
    {
      id: 11,
      city: "Seinäjoki",
      url: "https://harmanliikenne.fi/seinajoen-paikallisliikenne/"
    },
    {
      id: 12,
      city: "Tampere",
      url: "https://www.nysse.fi/"
    },
    {
      id: 13,
      city: "Vaasa",
      url: "https://www.vaasa.fi/asu-ja-ela/liikenne-ja-kadut/joukkoliikenne/bussiaikataulut-ja-reitit/"
    }
  ]

export const dataLinks = [
  {
    id: 1,
    title: "Luovin ruokalistat",
    url: "https://luovi.fi/opiskelen-luovissa/ruokalistat/"
  },
  {
    id: 2,
    title: "Opiskelijaintra Masto",
    url: "http://masto.luovi.fi/"
  },
  {
    id: 3,
    title: "Tapahtumakalenteri",
    url: "https://luovi.fi/tutustu-ja-hae-luoviin/tapahtumakalenteri/"
  },
  {
    id: 4,
    title: "Wilma",
    url: "https://luovi.inschool.fi/"
  }
]