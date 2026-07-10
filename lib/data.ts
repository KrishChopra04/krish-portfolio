export type EssayType = 'Essay' | 'Short Article' | 'Personal'

export interface Essay {
  date: string
  title: string
  type: EssayType
  url: string
  featured?: boolean
}

export const essays: Essay[] = [
  
  {
    date: 'May 2026',
    title: 'Making the Unknowable, Knowable: The Femme Fatale’s Collapse in The Grifters and Jackie Brown',
    type: 'Short Article',
    url: '/essays/grifters.pdf',
    featured: true,
  },

  {
    date: 'May 2026',
    title: 'Modalities of Noir Blackness: Whiteness, Form, and the Racial Floor of the Genre in Deep Cover, Clockers, and Devil in a Blue Dress',
    type: 'Short Article',
    url: '/essays/devil.pdf',
    featured: true,
  },

  {
    date: 'May 2026',
    title: 'Queer Time and Space: Heteronormativity Refused in Bound and The Doom Generation',
    type: 'Short Article',
    url: 'essays/bound.pdf',
    featured: true,
  },
  
  {
    date: 'Dec 2025',
    title: 'Sketch Comedy and the Deconstructive Work of Dialogism',
    type: 'Essay',
    url: '/essays/dialogism.pdf',
    featured: true,
  },
  {
    date: 'Dec 2025',
    title: 'Against Spectacle: Duration & Anti-Pleasure in Structural Film',
    type: 'Essay',
    url: '/essays/against_spectacle.pdf',
    featured: true,
  },
  {
    date: 'Dec 2025',
    title: "Beyond the Solo: Apparatus, Ethics, and Undoing Individualist Mythology in \u2018Free Solo\u2019",
    type: 'Essay',
    url: '/essays/free_solo.pdf',
    featured: true,
  },
  {
    date: 'Nov 2025',
    title: "Adaptation & Transnational Remediation: Remix in \u2018Bride & Prejudice\u2019",
    type: 'Essay',
    url: '/essays/bride.pdf',
  },
  {
    date: 'Oct 2025',
    title: 'Erotic Power: \u201cScorpio Rising\u201d and the Spectacle of Impurity',
    type: 'Essay',
    url: '/essays/erotic_power.pdf',
  },
  {
    date: 'Oct 2025',
    title: 'Sketch Comedy, Bakhtin, and Hypertextuality',
    type: 'Short Article',
    url: '/essays/sketch.pdf',
  },
  {
    date: 'May 2025',
    title: "Reassessing Noir in \u2018Mona Lisa\u2019: Race, Masculinity, and Noir\u2019s Affective Turn",
    type: 'Essay',
    url: '/essays/noir.pdf',
    featured: true,
  },
  {
    date: 'Apr 2025',
    title: "Susanne Langer\u2019s Theory of Art \u2014 Form Out of Emotion: \u2018Under the Skin\u2019 (2013) and \u201cSemblance\u201d",
    type: 'Essay',
    url: '/essays/langer.pdf',
  },
  {
    date: 'Mar 2025',
    title: "Contextualizing Kant\u2019s Concept of Genius & Aesthetic Ideas",
    type: 'Essay',
    url: '/essays/kant.pdf',
  },
  {
    date: 'Dec 2024',
    title: 'Subverting Genre: The Coen Brothers, Film Noir, and Genre Theory',
    type: 'Essay',
    url: '/essays/coen.pdf',
  },
  {
    date: 'Dec 2024',
    title: "Diegesis and Perception: Narrative Uncertainty in \u2018Inside Llewyn Davis\u2019 (2013)",
    type: 'Essay',
    url: '/essays/llewyn.pdf',
  },
  {
    date: 'May 2024',
    title: "\u2018Suspiria\u2019 (1977) \u2014 Color and Space",
    type: 'Short Article',
    url: '/essays/suspiria.pdf',
  },
  {
    date: 'May 2024',
    title: 'Lost Moments: Nostalgia, Physical Media, and the Past',
    type: 'Essay',
    url: '/essays/nostalgia.pdf',
  },
  {
    date: 'March 2024',
    title: "The Legacies of Jazz Musicians on Film + Jazz, Gender, and Identity",
    type: 'Essay',
    url: '/essays/jazz.pdf'
  },
  {date: 'March 2024',
   title: "David Fincher - \u201cIt Won't Be Cinematic\u201d",
   type: 'Essay',
   url: '/essays/fincher.pdf',
  },
  {
    date: 'January 2024',
    title: "What/Why Horror?",
    type: 'Essay',
    url: '/essays/whyhorror.pdf',
  },
  {
    date: 'December 2023',
    title: "Film Theory Thesis: Post-Human Relationships in Film",
    type: 'Essay',
    url: '/essays/theory.pdf',
  },
  {
    date: 'December 2023',
    title: "Representations of Rebellion and Youth in the \u2018banlieue\u2019",
    type: 'Essay',
    url: '/essays/french.pdf',
  },
  {
    date: 'December 2023',
    title: "Cognitive Film Theory -- A Bordwell-ian Analysis of \u2018Banshees of Inisherin\u2019",
    type: 'Short Article',
    url: '/essays/banshees.pdf',
  },
  {
    date: 'October 2023',
    title: "Formalism/Realism Debates -- Fantasy-Adventure Films in the Modern Age",
    type: 'Short Article',
    url: '/essays/debates.pdf',
  },
  {
    date: 'October 2023',
    title: "\u2018A New Ciniphilia\u2019: Girish Shambu and the Need for Fresh Discourse",
    type: 'Short Article',
    url: '/essays/girish.pdf',
  },
  {
    date: 'May 2023',
    title: "Is it TV or Social Media?",
    type: 'Essay',
    url: '/essays/tiktok.pdf',
  },
  {
    date: 'March 2023',
    title: "Guy Ritchie and the Impact of the French New Wave",
    type: 'Essay',
    url: '/essays/ritchie.pdf',
  },
  {
    date: 'December 2022',
    title: "First Reformed: Contextual Analysis",
    type: 'Essay',
    url: '/essays/toller.pdf',
  },
  
]

export interface Short {
  year: string
  title: string
  url: string
  youtubeId: string
  description: string
}

export const shorts: Short[] = [
  {
    year: 'Dec 2025',
    title: 'Surface / Skin \u2014 Textural City Symphony',
    url: 'https://youtu.be/ub78wXHPmF8',
    youtubeId: 'ub78wXHPmF8',
    description: 'A visual exploration of texture and urban surface.',
  },
  {
    year: 'Jun 2023',
    title: 'The Heartbeat of Manhattan',
    url: 'https://youtu.be/RZE31ll-V6c',
    youtubeId: 'RZE31ll-V6c',
    description: 'City symphony. New York as rhythm and motion.',
  },
  {
    year: 'Jan 2022',
    title: 'Drudge',
    url: 'https://youtu.be/wOam4DWoLRU',
    youtubeId: 'wOam4DWoLRU',
    description: 'Short film.',
  },
]
