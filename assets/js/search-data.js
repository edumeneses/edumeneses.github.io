// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-music",
          title: "music",
          description: "Compositions and comprovisation patches for chamber ensembles, classical guitar, and smartphone, from 2007 to 2021, including the GuitarAMI series.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/music/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications on digital musical instruments, embedded systems, gestural control, and sound spatialization, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research, research-creation, and instrument-design projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-puara",
          title: 'Puara',
          description: "Puara is a framework for building and deploy new media installations and New Interfaces for Music Expression",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Puara/";
            },},{id: "projects-freeze",
          title: 'Freeze!',
          description: "Augmented drum kit research-creation project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/freeze/";
            },},{id: "projects-guitarami",
          title: 'GuitarAMI',
          description: "The GuitarAMI is an Augmented Musical Instrument (AMI) using an acoustic guitar. The AMI is part of the Puara framework",
          section: "Projects",handler: () => {
              window.location.href = "/projects/guitarami/";
            },},{id: "projects-integration-of-new-interfaces-of-gestural-control-in-classical-music-performance",
          title: 'Integration of new interfaces of gestural control in classical music performance',
          description: "A series of projects exploring different ways to integrate new interfaces of gestural control in the creative work of classical musicians by exploiting performers’ sound-gesture expertise",
          section: "Projects",handler: () => {
              window.location.href = "/projects/integration/";
            },},{id: "projects-latency-and-communication-for-dmis",
          title: 'Latency and communication for DMIs',
          description: "Audio and data transmission benchmarks in DMIs and other artistic applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/latency/";
            },},{id: "projects-matchbox",
          title: 'Matchbox',
          description: "Android-based portable DMI to use in smartphones",
          section: "Projects",handler: () => {
              window.location.href = "/projects/matchbox/";
            },},{id: "projects-collaboration-sat-x-osm",
          title: 'Collaboration SAT x OSM',
          description: "New immersive experiences for music appreciation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/osm/";
            },},{id: "projects-probatio",
          title: 'Probatio',
          description: "Open-source toolkit for prototyping new digital musical instruments conceived by Filipe Calegário",
          section: "Projects",handler: () => {
              window.location.href = "/projects/probatio/";
            },},{id: "projects-satie",
          title: 'SATIE',
          description: "Spatial Audio Toolkit for Immersive Environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/satie/";
            },},{id: "projects-t-stick",
          title: 'T-Stick',
          description: "DMI conceived by Joseph Malloch and D. Andrew Stewart",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tstick/";
            },},{id: "projects-le-vivier-mobile-t-stick-insertion",
          title: 'Le Vivier Mobile (T-Stick insertion)',
          description: "A space for &quot;music and technology&quot; discovery through several interconnected experimental and informational devices, all housed on a mobile platform",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vivier/";
            },},{id: "projects-the-idmil-digital-audio-workbench",
          title: 'The IDMIL Digital Audio Workbench',
          description: "Accessible interactive platform for intuitively exploring key concepts in digital audio",
          section: "Projects",handler: () => {
              window.location.href = "/projects/workbench/";
            },},{
        id: 'social-academia_edu',
        title: 'Academia_edu',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%64%75%61%72%64%6F@%65%64%75%6D%65%6E%65%73%65%73.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/edumeneses", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/edumeneses", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/_edu_meneses_", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/edu-meneses", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3161-5078", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Eduardo-Meneses-3/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rgPfGAMAAAAJ", "_blank");
        },
      },{
        id: 'social-soundcloud_id',
        title: 'Soundcloud_id',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@EduMeneses", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
