/**
# Simple Resume (& notes)

## Contact Info

- aus.g.patterson@gmail.com
- https://linkedin.com/in/austin-g-patterson/
- https://github.com/austin-patterson

## Education

- BSSE from MSOE
  - Math minor
  - 25+ hrs/wk, worked every year at school
  - Expected May 23

## Intern Experience
*/

const projects = [
  {
    tech: [
      '',
    ],
    name: 'Dashboard Frontend Refresh',
    objective: '',
    employers: [
      {
      name: 'Leonardo DRS - NPS MKE',
      websiteURL: 'https://www.leonardodrs.com/locations/naval-power-systems-milwaukee-wi',
      },
    ],
    startDate: 'July 2020',
    endDate: 'Nov 2020',
    role: 'Senior Technical Intern',
    blurb: 'DRS had a legacy web app, with no frameworks, for the Human Machine Interfaces (HMI) on their power electronics monitoring (PMS) equipment that was difficult to adapt for each new NAVY program. I investigated modern technology candidates for their stack  maintainability, and overall user experience.',
    pictureIdeas: [
      'Figma stuff? Maybe the dashboard I whipped up for Magana\'s class',
      'Navy boats',
      'Maybe an arrow from Dashboard stock image on the left to the boats on the right? Or reversed order?'
    ],
  },{
    tech: [
      '',
    ],
    name: 'Limited Access Kiosk OS Image for HMI',
    objective: 'Create a secure operating systems that opens the Dashboard webpage for a Power Electronics Monitoring cabinet (PEM).',
    // HAS CONSTRAINTS
    constraints: [
      'Touchscreen is the only supported interface for regular users. Only Maintenance users may have access to USB peripherals.',
      'There should be no way to access anything but the web app with only the touchscreen.',
      'Must pass a security analysis and risk assessment.',
      'Must include a software breakout to a terminal so that maintenance users can login for elevated privileges.',
      'Operating System must be sharable as in .ISO file (to give to the HMI vendor for preloading hardware).',
    ],
    employers: [
      {
      name: 'Leonardo DRS - NPS MKE',
      websiteURL: 'https://www.leonardodrs.com/locations/naval-power-systems-milwaukee-wi',
      },
    ],
    startDate: 'May 2020',
    endDate: 'July 2020',
    role: 'Senior Technical Intern',
    blurb: 'TODO: how did you accomplish the project objective?', //basically a short summary
    pictureIdeas: [
      'More boats?',
      'Ubuntu stuff, maybe a linux penguin'
    ],
  },{
    tech: [
      '',
    ],
    name: 'Upcycle Network',
    objective: 'Create a secure operating systems that opens the Dashboard webpage on startup.',
    employers: [
      {
        name: 'LearnDeepMKE',
        websiteURL: 'https://learndeep.org/',
      },{
        name: 'MSOE',
        websiteURL: 'https://www.msoe.edu/'
      },{
        name: 'Bonfire Networks',
        websiteURL: 'https://bonfirenetworks.org/'
      },{
        name: 'Valueflows',
        websiteURL: 'https://www.valueflo.ws/'
      },
    ],
    startDate: 'Sep 2021',
    endDate: 'Feb 2022',
    role: 'Senior Technical Intern',
    blurb: 'Businesses often have leftover tools or material they do not need, and school tech classes, clubs, and community makerspaces need extra material. This project will provide a network to allow organizations to track, discuss, and arrange exchange of material, tools, files, time, and knowledge among each other.',
    pictureIdeas: [
      'logos for partners and tech used',
    ],
  },
  
]
