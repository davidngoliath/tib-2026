// Bilingual UI copy (EN/ES) for the home page. Non-string data (images, video
// ids, colors, hrefs, logos) stays in the other content/*.ts files; this holds
// only the translatable strings, keyed by locale. Use getCopy() in any server
// component to resolve the current locale's dictionary (no prop-drilling).
import { getLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import type { FeatureId } from "./features";
import type { BenefitId } from "./benefits";
import type { ActivityId } from "./activities";
import type { FaqId } from "./faq";

type Dict = {
  nav: {
    links: { label: string; href: string }[];
    register: string;
    donate: string;
  };
  hero: {
    line1: string;
    emphasis1: string;
    line2: string;
    emphasis2: string;
    line3: string;
    scroll: string;
  };
  braveCamp: { title: string; body: string; register: string; learnMore: string };
  ourAction: { eyebrow: string; title: string; subhead: string };
  theStories: { eyebrow: string; title: string };
  press: { title: string };
  partners: { title: string };
  cta: { heading: string; partner: string; donate: string };
  // Our Mission page.
  mission: {
    eyebrow: string;
    title: string;
    statement: string; // pink card (line break with \n)
    story: string[]; // long mission story, one entry per paragraph
  };
  // Brave Camp pages (About + For Parents).
  braveCampTabs: { about: string; forParents: string };
  braveCampAbout: {
    intro: string;
    features: Record<FeatureId, { title: string; body: string[] }>;
    connect: string; // line breaks with \n
    ctas: {
      parents: { kicker: string; title: string };
      partners: { kicker: string; title: string };
    };
  };
  braveCampForParents: {
    intro: string; // line breaks with \n
    scroll: string;
    reg: {
      title: string;
      body: string;
      chips: { dates: string; deposit: string; ages: string };
    };
    kids: { title: string; sub: string; tiles: Record<BenefitId, string> };
    activities: {
      title: string;
      intro: string;
      items: Record<ActivityId, { title: string; body: string }>;
    };
    schedule: { title: string; rows: { day: string; activities: string }[] };
    faq: { title: string; items: Record<FaqId, { q: string; a: string }> };
    ready: { title: string; body: string; cta: string };
    contact: { title: string; body: string; cta: string };
  };
  common: { watchNow: string; viewAll: string; learnMore: string };
  footer: { tel: string; fax: string; legal: string };
  // Keyed by the (untranslated) proper-noun field in the data arrays.
  storyRoles: Record<string, string>;
  pressBlurbs: Record<string, string>;
};

export const copy: Record<Locale, Dict> = {
  en: {
    nav: {
      links: [
        { label: "Our Mission", href: "/our-mission" },
        { label: "Brave Camp", href: "/brave-camp/about" },
        { label: "BraveU", href: "/braveu" },
        { label: "BraveWear", href: "/bravewear" },
      ],
      register: "Register for Brave Camp",
      donate: "Donate",
    },
    hero: {
      line1: " is a ",
      emphasis1: "global non-profit",
      line2:
        " dedicated to unlocking bravery in today's youth, so they can take on the ",
      emphasis2: "challenges",
      line3: " of tomorrow.",
      scroll: "Keep Scrolling",
    },
    braveCamp: {
      title: "Brave Camp\nReturns\nAug. 16 - 23 2026",
      body: "Brave Camp is a weeklong, customized camp experience that gets campers outside of their comfort zone, take part in something new while making new friends, and be inspired by Mother Nature!",
      register: "Register Today",
      learnMore: "Learn More",
    },
    ourAction: {
      eyebrow: "Our",
      title: "Action",
      subhead:
        "Real initiatives that turn courage into impact.\nFrom local communities to global relief, action drives change.",
    },
    theStories: { eyebrow: "The", title: "Stories" },
    press: { title: "Press" },
    partners: { title: "Partners" },
    cta: {
      heading:
        "Bravery isn't just a message—it's a movement. Partner with us or give today to help expand its reach and impact.",
      partner: "Partner",
      donate: "Donate",
    },
    mission: {
      eyebrow: "Our",
      title: "Mission",
      statement:
        "We help people build courage through\nprograms, community, and stories.",
      story: [
        "Our very first act was to send a simple but empowering message to 300 children in Sierra Leone who were left without hope or a school to go to in the wake of the Ebola crisis. What transpired after receiving our message of bravery was beyond anything we ever expected. Not only were the children uplifted by what we sent them, but the entire community was inspired. People's lives were changed and fear was replaced with strength.",
        "The realization that we could have that kind of effect on people 7000 miles away is what then inspired us to turn our brave message into a global movement that continues to grow every day.",
        "It's also what inspires us to continually seek out and create new initiatives and partnerships that benefit the greater good. Everything from our 100Roofs Project which put 100 roofs back over the heads of hurricane victims in Puerto Rico, to our ongoing Brave Speaker Series and Educational Workshops, to our Serving Support Project supporting essential workers fighting COVID-19, and to the Brave stories we share from people around the world, is done with the sole purpose of helping others overcome their greatest challenges— no matter how big or small.",
        "Because we believe that in the face of adversity, especially these days, that there's an opportunity for us to band together, to cross borders and overcome our differences so that we can make the world a better, braver place.",
      ],
    },
    braveCampTabs: { about: "About Brave Camp", forParents: "For Parents and Campers" },
    braveCampAbout: {
      intro:
        "Brave Camp is a free, weeklong sleepaway camp designed to help kids build the confidence needed to become a braver version of themselves. Through the power of nature, creativity, and community, every experience is intentionally created to support the camper journey.",
      features: {
        braveCamp: {
          title: "Brave Camp",
          body: [
            "Brave Camp is a weeklong experience designed to help kids step outside their comfort zones, try new things, build meaningful friendships, and grow through adventure in nature.",
            "Through outdoor experiences, creativity, mindfulness, and teamwork, campers build confidence, resilience, and a deeper connection to themselves and others.",
          ],
        },
        different: {
          title: "What Makes Brave Camp Different",
          body: [
            "Brave Camp blends adventure, mentorship, and personal growth into one immersive experience. Campers unplug from everyday distractions and take part in activities designed to encourage curiosity, self-expression, collaboration, and courage.",
            "Along the way, they're supported by mentors, inspired by nature, and challenged to discover what being brave means to them.",
          ],
        },
        aDay: {
          title: "A Day at\nBrave Camp",
          body: [
            "Each day at Brave Camp is built around a theme from our Brave Journey program. Through outdoor activities, creative workshops, mindfulness exercises, and team experiences, campers are encouraged to challenge themselves, support one another, and grow together.",
          ],
        },
      },
      connect:
        "Whether you're a parent exploring Brave Camp for your child\nor an organization interested\nin helping us grow the experience, we'd love to connect.",
      ctas: {
        parents: {
          kicker: "Looking for more details for campers and families?",
          title: "Learn More for\nParents & Campers",
        },
        partners: {
          kicker: "Interested in supporting or partnering with Brave Camp?",
          title: "Become a Brave\nCamp Partner",
        },
      },
    },
    braveCampForParents: {
      intro:
        "Everything you need to know\nabout Brave Camp — from what\ncampers can expect to how\nwe create a safe, supportive, and\nunforgettable experience.",
      scroll: "Scroll to Learn More",
      reg: {
        title: "Brave Camp 2026 registration\nis now open",
        body: "Join us for a week of adventure, creativity, connection, and growth designed to help campers step outside their comfort zones, build confidence, and discover what it means to be brave.",
        chips: { dates: "Aug 16-23, 2026", deposit: "$40 Refundable Deposit", ages: "Ages 8-13" },
      },
      kids: {
        title: "What Kids Get\nOut of Brave Camp",
        sub: "At Brave Camp, campers build more than memories — they build confidence, connection, and tools that stay with them long after the week ends.",
        tiles: {
          confidence: "Confidence-building activities and mentorship",
          community: "Community, connection, and belonging",
          outdoor: "Outdoor adventures and hands-on creative workshops",
          tools: "Tools to navigate stress and change",
          reset: "A reset week designed to inspire growth and joy",
        },
      },
      activities: {
        title: "Activities Designed to Build Brave",
        intro:
          "Brave Camp combines reflection, creativity, movement, and shared experiences to create an environment where campers can explore new perspectives, connect with others, and learn more about themselves along the way. Each activity is designed to encourage participation, curiosity, self-expression, and personal growth in a supportive setting.",
        items: {
          meditation: {
            title: "Meditation & Mindfulness",
            body: "Through guided meditation, reflection, and mindfulness practices, campers learn how to slow down, quiet fear, trust themselves, and build the inner courage to face challenges with confidence and clarity.",
          },
          art: {
            title: "Creative Art Forms",
            body: "Brave Camp uses dance, arts, storytelling, and creative expression as tools for bravery — encouraging campers to step outside their comfort zones, express themselves authentically, and embrace their unique voice without fear of judgment.",
          },
          growth: {
            title: "Growth & Bravery",
            body: "Through journaling, group discussions, reflection exercises, and bravery-based activities, campers are encouraged to overcome fear, build confidence, navigate challenges, take risks, and discover the strength and bravery already within them.",
          },
        },
      },
      schedule: {
        title: "What to expect",
        rows: [
          { day: "Day 1", activities: "Welcome Campers + Community Building" },
          { day: "Days 2–3", activities: "Uniqueness of Self + Empathy" },
          { day: "Days 4–5", activities: "Confidence + Adaptability" },
          { day: "Day 6", activities: "Commitment + Closing ceremony" },
        ],
      },
      faq: {
        title: "FAQ",
        items: {
          deposit: {
            q: "Is the $40 deposit refundable?",
            a: "Yes, the $40 deposit will be returned after camp ends. Please allow 2-3 days for deposits to be sent.",
          },
          eligible: {
            q: "Who is eligible?",
            a: "Campers between the ages of 8 to 13 years old are eligible to attend Brave Camp.",
          },
          bring: {
            q: "What should we bring?",
            a: "Please see the downloadable link to the packing list for detailed information.",
          },
          contact: {
            q: "How do I contact you?",
            a: "Send any questions or inquiries to the Brave Camp email: bravecamp@todayimbrave.org",
          },
          scholarship: {
            q: "Is there a scholarship available?",
            a: "For any questions regarding scholarships, please feel free to reach out to the Brave Camp email for more information.",
          },
        },
      },
      ready: {
        title: "Ready to Register for Brave Camp?",
        body: "Give your camper a week to unplug, explore new experiences, connect with others, and return home with memories and lessons that last far beyond summer.",
        cta: "Register Today",
      },
      contact: {
        title: "Contact Us",
        body: "Have questions about Brave Camp, registration, or what to expect? We're here to help and happy to connect with parents, campers, and partners.\n\nOur team will respond as soon as possible.",
        cta: "Contact Us",
      },
    },
    common: { watchNow: "Watch Now", viewAll: "View All", learnMore: "Learn More" },
    footer: {
      tel: "Tel",
      fax: "Fax",
      legal:
        "Today, I'm Brave® is a registered 501(c)(3) nonprofit organization | Tax ID number: 81-4843811  Contributions to Today, I'm Brave are tax-deductible to the extent permitted by law. CFC #10715.",
    },
    storyRoles: {
      "Ron Finley": "Gangsta Gardner",
      "Hannah Fraser": "Performance Artist",
      "Rosie Perez": "Actor & Activist",
      "Breana Schroeder": "Tandem Surfer",
    },
    pressBlurbs: {
      "NBC News":
        "Camp new to Saratoga County teaches bravery and coping skills to underserved youth.",
      Forbes:
        "Purpose at work: How Today, I'm Brave rallies advertising agencies to support BIPOC youth.",
      "LBB Online":
        "Camp new to Saratoga County teaches bravery and coping skills to underserved youth.",
      "CBS News":
        "Purpose at work: How Today, I'm Brave rallies advertising agencies to support BIPOC youth.",
    },
  },

  es: {
    nav: {
      links: [
        { label: "Nuestra Misión", href: "/our-mission" },
        { label: "Brave Camp", href: "/brave-camp/about" },
        { label: "BraveU", href: "/braveu" },
        { label: "BraveWear", href: "/bravewear" },
      ],
      register: "Regístrate para Brave Camp",
      donate: "Donar",
    },
    hero: {
      line1: " es una ",
      emphasis1: "organización sin fines de lucro global",
      line2:
        " dedicada a despertar la valentía en la juventud de hoy, para que puedan enfrentar los ",
      emphasis2: "desafíos",
      line3: " del mañana.",
      scroll: "Sigue desplazándote",
    },
    braveCamp: {
      title: "Brave Camp\nRegresa\n16 - 23 de Ago. 2026",
      body: "Brave Camp es una experiencia de campamento personalizada de una semana que saca a los campistas de su zona de confort, los anima a probar algo nuevo mientras hacen nuevos amigos y se inspiran en la Madre Naturaleza.",
      register: "Regístrate Hoy",
      learnMore: "Más Información",
    },
    ourAction: {
      eyebrow: "Nuestra",
      title: "Acción",
      subhead:
        "Iniciativas reales que convierten el coraje en impacto.\nDe las comunidades locales al alivio global, la acción genera cambio.",
    },
    theStories: { eyebrow: "Las", title: "Historias" },
    press: { title: "Prensa" },
    partners: { title: "Socios" },
    cta: {
      heading:
        "La valentía no es solo un mensaje: es un movimiento. Asóciate con nosotros o dona hoy para ayudar a ampliar su alcance e impacto.",
      partner: "Asociarse",
      donate: "Donar",
    },
    mission: {
      eyebrow: "Nuestra",
      title: "Misión",
      statement:
        "Ayudamos a las personas a desarrollar valentía a través de\nprogramas, comunidad e historias.",
      story: [
        "Nuestro primer acto fue enviar un mensaje simple pero empoderador a 300 niños en Sierra Leona que se habían quedado sin esperanza ni escuela a la que asistir tras la crisis del ébola. Lo que ocurrió después de recibir nuestro mensaje de valentía superó todo lo que jamás imaginamos. No solo los niños se sintieron inspirados por lo que les enviamos, sino que toda la comunidad se inspiró. Las vidas de las personas cambiaron y el miedo fue reemplazado por la fortaleza.",
        "Darnos cuenta de que podíamos tener ese tipo de impacto en personas a 7000 millas de distancia es lo que nos inspiró a convertir nuestro mensaje de valentía en un movimiento global que sigue creciendo cada día.",
        "También es lo que nos inspira a buscar y crear continuamente nuevas iniciativas y alianzas que beneficien el bien común. Desde nuestro 100Roofs Project, que devolvió 100 techos a las víctimas de huracanes en Puerto Rico, hasta nuestra Brave Speaker Series y talleres educativos, nuestro Serving Support Project que apoya a los trabajadores esenciales que combaten la COVID-19, y las historias de valentía que compartimos de personas de todo el mundo, todo se hace con el único propósito de ayudar a otros a superar sus mayores desafíos, sin importar cuán grandes o pequeños sean.",
        "Porque creemos que ante la adversidad, especialmente en estos días, hay una oportunidad para unirnos, cruzar fronteras y superar nuestras diferencias para que podamos hacer del mundo un lugar mejor y más valiente.",
      ],
    },
    braveCampTabs: { about: "Sobre Brave Camp", forParents: "Para Padres y Campistas" },
    braveCampAbout: {
      intro:
        "Brave Camp es un campamento gratuito de una semana, con estadía, diseñado para ayudar a los niños a desarrollar la confianza necesaria para convertirse en una versión más valiente de sí mismos. A través del poder de la naturaleza, la creatividad y la comunidad, cada experiencia está creada intencionalmente para apoyar el camino del campista.",
      features: {
        braveCamp: {
          title: "Brave Camp",
          body: [
            "Brave Camp es una experiencia de una semana diseñada para ayudar a los niños a salir de su zona de confort, probar cosas nuevas, construir amistades significativas y crecer a través de la aventura en la naturaleza.",
            "A través de experiencias al aire libre, creatividad, atención plena y trabajo en equipo, los campistas desarrollan confianza, resiliencia y una conexión más profunda consigo mismos y con los demás.",
          ],
        },
        different: {
          title: "Qué Hace Diferente a Brave Camp",
          body: [
            "Brave Camp combina aventura, mentoría y crecimiento personal en una experiencia inmersiva. Los campistas se desconectan de las distracciones cotidianas y participan en actividades diseñadas para fomentar la curiosidad, la autoexpresión, la colaboración y el coraje.",
            "En el camino, cuentan con el apoyo de mentores, se inspiran en la naturaleza y se les desafía a descubrir qué significa ser valiente para ellos.",
          ],
        },
        aDay: {
          title: "Un Día en\nBrave Camp",
          body: [
            "Cada día en Brave Camp gira en torno a un tema de nuestro programa Brave Journey. A través de actividades al aire libre, talleres creativos, ejercicios de atención plena y experiencias en equipo, se anima a los campistas a desafiarse a sí mismos, apoyarse mutuamente y crecer juntos.",
          ],
        },
      },
      connect:
        "Ya seas un padre explorando Brave Camp para tu hijo\no una organización interesada\nen ayudarnos a hacer crecer la experiencia, nos encantaría conectar.",
      ctas: {
        parents: {
          kicker: "¿Buscas más detalles para campistas y familias?",
          title: "Más Información para\nPadres y Campistas",
        },
        partners: {
          kicker: "¿Te interesa apoyar o asociarte con Brave Camp?",
          title: "Conviértete en Socio\nde Brave Camp",
        },
      },
    },
    braveCampForParents: {
      intro:
        "Todo lo que necesitas saber\nsobre Brave Camp — desde lo que\nlos campistas pueden esperar hasta cómo\ncreamos una experiencia segura,\nde apoyo e inolvidable.",
      scroll: "Desplázate para saber más",
      reg: {
        title: "La inscripción para Brave Camp 2026\nya está abierta",
        body: "Únete a una semana de aventura, creatividad, conexión y crecimiento diseñada para ayudar a los campistas a salir de su zona de confort, desarrollar confianza y descubrir qué significa ser valiente.",
        chips: { dates: "16-23 de Ago, 2026", deposit: "Depósito Reembolsable de $40", ages: "Edades 8-13" },
      },
      kids: {
        title: "Lo Que los Niños Obtienen\nde Brave Camp",
        sub: "En Brave Camp, los campistas construyen más que recuerdos: desarrollan confianza, conexión y herramientas que los acompañan mucho después de que termina la semana.",
        tiles: {
          confidence: "Actividades para desarrollar confianza y mentoría",
          community: "Comunidad, conexión y pertenencia",
          outdoor: "Aventuras al aire libre y talleres creativos prácticos",
          tools: "Herramientas para manejar el estrés y el cambio",
          reset: "Una semana de pausa diseñada para inspirar crecimiento y alegría",
        },
      },
      activities: {
        title: "Actividades Diseñadas para Construir Valentía",
        intro:
          "Brave Camp combina reflexión, creatividad, movimiento y experiencias compartidas para crear un entorno donde los campistas pueden explorar nuevas perspectivas, conectar con otros y aprender más sobre sí mismos en el camino. Cada actividad está diseñada para fomentar la participación, la curiosidad, la autoexpresión y el crecimiento personal en un entorno de apoyo.",
        items: {
          meditation: {
            title: "Meditación y Atención Plena",
            body: "A través de meditación guiada, reflexión y prácticas de atención plena, los campistas aprenden a desacelerar, calmar el miedo, confiar en sí mismos y construir el coraje interior para enfrentar desafíos con confianza y claridad.",
          },
          art: {
            title: "Formas de Arte Creativo",
            body: "Brave Camp usa la danza, las artes, la narración de historias y la expresión creativa como herramientas de valentía — animando a los campistas a salir de su zona de confort, expresarse auténticamente y abrazar su voz única sin miedo a ser juzgados.",
          },
          growth: {
            title: "Crecimiento y Valentía",
            body: "A través de diarios, discusiones grupales, ejercicios de reflexión y actividades basadas en la valentía, se anima a los campistas a superar el miedo, desarrollar confianza, enfrentar desafíos, tomar riesgos y descubrir la fuerza y la valentía que ya llevan dentro.",
          },
        },
      },
      schedule: {
        title: "Qué esperar",
        rows: [
          { day: "Día 1", activities: "Bienvenida a los campistas + Construcción de comunidad" },
          { day: "Días 2–3", activities: "Singularidad del ser + Empatía" },
          { day: "Días 4–5", activities: "Confianza + Adaptabilidad" },
          { day: "Día 6", activities: "Compromiso + Ceremonia de clausura" },
        ],
      },
      faq: {
        title: "FAQ",
        items: {
          deposit: {
            q: "¿El depósito de $40 es reembolsable?",
            a: "Sí, el depósito de $40 se devolverá después de que termine el campamento. Por favor, permite 2-3 días para que se envíen los depósitos.",
          },
          eligible: {
            q: "¿Quién puede participar?",
            a: "Los campistas entre 8 y 13 años de edad son elegibles para asistir a Brave Camp.",
          },
          bring: {
            q: "¿Qué debemos llevar?",
            a: "Consulta el enlace descargable de la lista de empaque para obtener información detallada.",
          },
          contact: {
            q: "¿Cómo los contacto?",
            a: "Envía cualquier pregunta o consulta al correo de Brave Camp: bravecamp@todayimbrave.org",
          },
          scholarship: {
            q: "¿Hay becas disponibles?",
            a: "Para cualquier pregunta sobre becas, no dudes en comunicarte al correo de Brave Camp para más información.",
          },
        },
      },
      ready: {
        title: "¿Listo para Inscribirte en Brave Camp?",
        body: "Dale a tu campista una semana para desconectarse, explorar nuevas experiencias, conectar con otros y regresar a casa con recuerdos y lecciones que duran mucho más allá del verano.",
        cta: "Regístrate Hoy",
      },
      contact: {
        title: "Contáctanos",
        body: "¿Tienes preguntas sobre Brave Camp, la inscripción o qué esperar? Estamos aquí para ayudar y nos encanta conectar con padres, campistas y socios.\n\nNuestro equipo responderá lo antes posible.",
        cta: "Contáctanos",
      },
    },
    common: { watchNow: "Ver Ahora", viewAll: "Ver Todo", learnMore: "Más Información" },
    footer: {
      tel: "Tel",
      fax: "Fax",
      legal:
        "Today, I'm Brave® es una organización sin fines de lucro registrada 501(c)(3) | Número de identificación fiscal: 81-4843811  Las contribuciones a Today, I'm Brave son deducibles de impuestos en la medida permitida por la ley. CFC #10715.",
    },
    storyRoles: {
      "Ron Finley": "Jardinero Gangsta",
      "Hannah Fraser": "Artista de Performance",
      "Rosie Perez": "Actriz y Activista",
      "Breana Schroeder": "Surfista en Tándem",
    },
    pressBlurbs: {
      "NBC News":
        "Un campamento nuevo en el condado de Saratoga enseña valentía y habilidades de afrontamiento a jóvenes desatendidos.",
      Forbes:
        "Propósito en el trabajo: cómo Today, I'm Brave moviliza a las agencias de publicidad para apoyar a la juventud BIPOC.",
      "LBB Online":
        "Un campamento nuevo en el condado de Saratoga enseña valentía y habilidades de afrontamiento a jóvenes desatendidos.",
      "CBS News":
        "Propósito en el trabajo: cómo Today, I'm Brave moviliza a las agencias de publicidad para apoyar a la juventud BIPOC.",
    },
  },
};

export async function getCopy(): Promise<Dict> {
  const locale = (await getLocale()) as Locale;
  return copy[locale] ?? copy[routing.defaultLocale];
}
