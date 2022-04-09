const topMenuBarItems = [
  {
    /**
     * Pour changer l'indexage vers la page d'accueil dans les autres pages, j'ai modifie la ligne 6 en pointant vers la landing page3
     */
    href: '/landing-page3',
    title: 'Home  ',
    isCurrent: true,
    /*submenu: [
      {
        href: '/landing-page1',
        title: 'Home One'
      },
      {
        href: '/landing-page2',
        title: 'Home Two'
      },
      {
        href: '/landing-page3',
        title: 'Home Three'
      },
      {
        href: '/landing-page4',
        title: 'User Anaytics'
      },
      {
        href: '/landing-page5',
        title: 'Business Intelligence'
      },
      {
        href: '/landing-page6',
        title: 'Predective Analytics'
      },
      {
        href: '/landing-page7',
        title: 'Sentiment Analysis'
      },
      {
        href: '/landing-page8',
        title: 'User Behaviour Analysis'
      },
      {
        href: '/landing-page9',
        title: 'Data Scientist Profile'
      },
      {
        href: '/landing-page10',
        title: 'Data Visualization Service'
      },
      {
        href: '/landing-page11',
        title: 'Analytics In Marketing'
      }
    ]*/
  },
  {
    href: '/about-us',
    title: 'About Us ',
    /*submenu: [
      {
        href: '/about-us',
        title: 'About Us One'
      },
      {
        href: '/about-us/about-us-two',
        title: 'About Us Two'
      }
    ]*/
  },
  {
    href: '/services',
    title: 'Service',
    submenu : [
      {
        href: '/services/data-analytics',
        title: 'Data Science'
      },
      {
        href: '/services/managed-analytics',
        title: 'Cloud Computing'
      },
      {
        href: '/services/big-data-services',
        title: 'Machine Learning'
      },
      {
        href: '/services/data-science-consulting',
        title: 'Web Development'
      },
      {
        href: '/services/business-intelligence',
        title: 'Strategic Consulting'
      },
      {
        href: '/services/data-visualization-services',
        title: 'User training'
      }/* ,
      {
        href: '/services/data-management',
        title: 'Data Management'
      },
      {
        href: '/services/artificial-intelligence',
        title: 'Artificial Intelligence'
      } */
    ]
  },
  {
    href: '/our-cases/portfolio-2-columns',
    title: 'Uses Cases',
    submenu: [
      /* {
        href: '#portfolio',
        title: 'Portfolio',
        submenu:[
          {
            href: '/our-cases/portfolio-2-columns',
            title: 'Portfolio 2 Columns'
          },
          {
            href: '/our-cases/portfolio-3-columns',
            title: 'Portfolio 3 Columns'
          },
          {
            href: '/our-cases/portfolio-4-columns',
            title: 'Portfolio 4 Columns'
          },
          {
            href: '/our-cases/portfolio-5-columns',
            title: 'Portfolio 5 Columns'
          },
          {
            href: '/our-cases/portfolio-no-space',
            title: 'Portfolio No Space'
          }
        ]
      }, */
      {
        href: '/our-cases/masonry-2-portfolio',
        title: 'Use Case 1'
      },
      {
        href: '/our-cases/masonry-3-portfolio',
        title: 'Use Case 2'
      },
      {
        href: '/our-cases/masonry-no-space',
        title: 'Use Case 3'
      },
      {
        href: '/our-cases/portfolio-details',
        title: 'USe Case 4'
      }
    ]
  },
  {
    href: '/blog',
    title: 'Blog',
    submenu: [
      /* {
        href: '/blog',
        title: 'Blog'
      }, */
      /* {
        href: '#blog-grid',
        title: 'Blog Grid',
        submenu: [
          {
            href: '/blog/blog-one-column-grid',
            title: 'Blog 1'
          },
          {
            href: '/blog/blog-two-column-grid',
            title: 'Blog 2'
          },
          {
            href: '/blog/blog-three-column-grid',
            title: 'Blog 3',
          }
        ]
      },
      {
        href: '/blog/blog-right-sidebar-grid-one',
        title: 'Right SideBar Grid',
        submenu: [
          {
            href: '/blog/blog-right-sidebar-grid-one',
            title: 'Right Sidebar Grid 1'
          },
          {
            href: '/blog/blog-right-sidebar-grid-two',
            title: 'Right Sidebar Grid 2'
          }
        ]
      },
      {
        href: '/blog/blog-left-sidebar-grid-one',
        title: 'Left SideBar Grid',
        submenu: [
          {
            href: '/blog/blog-left-sidebar-grid-one',
            title: 'Left Sidebar Grid 1'
          },
          {
            href: '/blog/blog-left-sidebar-grid-two',
            title: 'Left Sidebar Grid 1'
          }
        ]
      }, */
      {
        href: '/blog/blog-details',
        title: 'Blog 1'
      },
      {
        href: '/blog/blog-one-column-grid',
        title: 'Blog 2'
      },
      {
        href: '/blog/blog-two-column-grid',
        title: 'Blog 3'
      }
    ]
  },
  {
    href: '/pages/our-team',
    title: 'Pages',
    submenu: [
      {
        href: '/pages/our-team',
        title: 'Our Team'
      },
      {
        href: '/pages/client',
        title: 'Clients'
      },
      /* {
        href: '/pages/career',
        title: 'Careers',
      }, */
      {
        href: '/pages/contact-us',
        title: 'Contact Us',
      }
    ]
  }
];

const servicesMenu =  [
  {
    href: '/services/data-analytics',
    title: 'Data Analytics'
  },
  {
    href: '/services/managed-analytics',
    title: 'Managed Analytics'
  },
  {
    href: '/services/big-data-services',
    title: 'Big Data Services'
  },
  {
    href: '/services/data-science-consulting',
    title: 'Data Science Consulting'
  },
  {
    href: '/services/business-intelligence',
    title: 'Business Intelligence'
  },
  {
    href: '/services/data-visualization-services',
    title: 'Data Visualization'
  },
  {
    href: '/services/data-management',
    title: 'Data Management'
  },
  {
    href: '/services/artificial-intelligence',
    title: 'Artificial Intelligence'
  }
];

export { servicesMenu, topMenuBarItems };
