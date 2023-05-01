import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import mainPage from '~/assets/images/mainpage.png';
import gasImg from '~/assets/images/newuser.png';
import pythonLogo from '~/assets/images/python-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tensorflowlogo from '~/assets/images/tensorflow.png';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 13 using the new app directory »',
    href: 'https://beta.nextjs.org/docs/app-directory-roadmap',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    // {
    //   label: 'Pages',
    //   icon: IconChevronDown,
    //   links: [
    //     {
    //       label: 'Pricing',
    //       href: '/pricing',
    //     },
    //     {
    //       label: 'Contact',
    //       href: '/contact',
    //     },
    //     {
    //       label: 'FAQs',
    //       href: '/faqs',
    //     },
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/terms',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/privacy',
    //     },
    //   ],
    // },
    {
      label: 'Introduction',
      href: '/introduction',
    },
    {
      label: 'Methodology',
      href: '/methodology',
    },
    {
      label: 'Evaluation',
      href: '/evaluation',
    },
    {
      label: 'Conclusion',
      href: '/conclusion',
    },
    {
      label: 'Team',
      href: '/team',
    }
  ],
  actions: [
    {
      label: 'Visit Travelix',
      href: 'https://travelix2.herokuapp.com/',
      type: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'center',
};

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Personalized Recommendation System - One stop solution for travel needs.
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          Travelix
        </span>{' '}
        is a personalized travel recommendation system that provides recommendations to users based on their <em>preferences</em> and <em>travel history</em>.
      </span>{' '}
      The tool will analyze user preferences and destination data (granular to State level) to recommend Restaurents, Hotels and Nightlife that match the user's preferences.
    </>
  ),
  callToAction: {
    text: 'Visit Travelix',
    href: 'https://travelix2.herokuapp.com/'
  },
  callToAction2: {
    text: 'Learn more',
    href: '/introduction',
  },
  image: {
    src: mainPage,
    alt: 'Main Page',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      src: pythonLogo,
      alt: 'Python Logo',
    },
    {
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      src: tensorflowlogo,
      alt: 'Tensorflow Logo',
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What is Travelix?',
      description: `Travelix is a personalized travel recommendation system that provides
      recommendations to users based on their preferences, budget, and travel history. The
      tool will analyze user preferences and destination data to
      recommend destinations and hotels that match the user's preferences.`,
    },
    {
      title: 'Why is it needed?',
      description: `Recommendation systems in the field of travel and tourism domain are very less
      compared to other domains. By using Travelix, users can save time and effort in
      researching and planning their travel itinerary`,
    },
    {
      title: "Which dataset has been used?",
      description: `Yelp dataset containing 150K businesses and 1.9 million users with 7 million reviews has been used to train the model.`,
    },
    {
      title: "What are the core algorithms used?",
      description: `NPR, Matrix Factorization along with Auto Encoder with Colloborative Filtering has been used to build the model`,
    }
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  link: {
    label: 'Contact us',
    href: '/contact',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What do I need to start?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'How to install the NextJS + Tailwind CSS template?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: "What's something that you completely don't understand?",
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: "What's an example of when you changed your mind?",
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'What is something that you would really like to try again?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'If you could only ask one question to each person you meet, what would that question be?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};



// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Travelix</span>
      </>
    ),
    subtitle:
      '',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Personalised Recommendations',
      description:
        'Recommendations based on travel history and user preferences, which uses Matrix Factorization, combination of Auto Encoder and colloborative filtering techniques',
      icon: IconBrandTailwind
    },
    {
      title: 'Data-driven recommendations',
      description:
        'Uses Yelp Dataset to provide trustworthy recommendations that are accurate and reliable',
      icon: IconComponents
    },
    {
      title: 'Complete Itinerary',
      description:
        'Provides a complete travel itinerary, including hotels, travel, restaurants and events to save users time and effort in researching and planning their trip',
      icon: IconListCheck
    },
    {
      title: 'User-friendly interface',
      description:
        'Boasts an intuitive user interface inspired by Netflix, enabling a seamless user experience alon with live fetching of business logos from Google to enhance the visual appeal of our recommendations',
      icon: IconRocket
    },
    {
      title: 'Trending Recommendations',
      description:
        'Recommend trending places to visit right now, which will attract users who are looking for popular and trendy destinations',
      icon: IconArrowsRightLeft
    },
    {
      title: 'Collaborative filtering & Auto Encoder',
      description:
        'Tool uses advanced technqiues of Auto Encoder and Collaborative Filtering techniques to offer the most relevant recommendations to our users',
      icon: IconBulb
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Motivation Behind Travelix',
    subtitle: ' Need for Personalized Travel Recommendation Systems plus no existing solutions as of now gives rise to Travelix. Travelix would be useful for people who are looking for personalized travel recommendations that match their interests and budget and could be used by travel enthusiasts, families, couples, and anyone else who wants to plan a trip. Moreover, personalized recommendations help travelers discover new places and activities that they might have otherwise missed. By taking into account a user\'s travel history, Travelix can suggest destinations that the user may not have considered before, opening up new possibilities for travel experiences. Overall, the motivation behind Travelix is to create a tool that simplifies travel planning, saves time and effort, and provides personalized recommendations that help travelers make the most of their trips. Travelix aims to solve this problem by using advanced recommendation algorithms that analyze user preferences, travel history, and destination data to provide personalized travel recommendations. ',
    highlight: 'Introduction',
  },
  content:
    ' ',
  items: [
    {
      title: 'Personalized Recommendation System',
      description:
        ' In today\'s time of destination weddings and annual vacationt rips, there is utmost need for Travelix.  Recommendation systems in the field of travel and tourism domain are very less compared to other domains.',
    },
    {
      title: 'No Existing Solutions',
      description:
        ' Traditional travel planning involves a lot of research and effort to find destinations, accommodations, and activities that match the traveler preferences and budget. Some tools such as TripAdvisor and Expedia do not offer any level of personalization for users. Infact they are just search based web engines.',
    },
    {
      title: 'Travelix',
      description:
        ' By offering a one-stop solution for all travel needs, including flights, accommodations, restaurants, events, and attractions, Travelix makes it easy for travelers to plan their trips without the need for extensive research.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  header: {
    title: 'Introduction',
    subtitle: ' Travelix is a personalized travel recommendation system designed to provide customized recommendations to users based on their preferences, budget, and travel history. Overall, the Travelix tool aims to simplify the process of planning a trip, providing users with personalized travel recommendations based on their interests and budget. It is a novel tool that fills a gap in the market by offering a personalized approach to travel recommendations. In this report, we will present the details of the Travelix Product, including its features, target users, the challenges encountered during development, and the methodology used to build the tool. Additionally, we will discuss the data sources used for the development of the tool and finally, we will demonstrate the usefulness of Travelix by evaluating our system and conducting user testing and providing feedback on the results obtained from the system.',
    
  },
  content:
    '',
  items: [
    {
      title: 'A User Interface similar to Netflix for Travel Needs. Live loading of Images of hotels and places along with seamless smooth User Expereince.'
    },
    {
      title: 'Travelix 3 Fold Recommender System : Non-personalized recommendations,  Personalized recommendations, Using Matrix Factorization, AutoEncoder + Collaborative Filtering.',
    },
    {
      title: 'One stop solution for user’s travel needs. Using Yelp Dataset for establishing the user business ratings matrix, covering 2M users and around 150K businesses.',
    },


  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

export const content3Data: ContentProps = {
  header: {
    title: 'Introduction',
    subtitle: ' Travelix is a personalized travel recommendation system designed to provide customized recommendations to users based on their preferences, budget, and travel history. The tool is developed by Dream Team of 4  of the Information Storage and Retrieval course at Texas A&M University, under the guidance of Professor James Caverlee. The project aims to create a one-stop solution for travelers, allowing them to plan their itinerary efficiently and save time in researching and planning their travel arrangements. In this report, we will present the details of the Travelix tool, including its functions, target users, the challenges encountered during development, and the methodology used to build the tool. Additionally, we will discuss the data sources used for the development of the tool and provide a timeline of our project plan. Finally, we will demonstrate the usefulness of Travelix by conducting user testing and providing feedback on the results obtained from the system.',
    
  },
  content:
    '',
  items: [
    {
      title: 'The tool will analyze user preferences and destination data (granular to City level) to recommend destinations and hotels that match the user\'s preferences along with complete possible itinerary such as flights, restaurants, events and attractions.. The Travelix tool analyzes user preferences and destination data, down to the city level, to provide recommendations for hotels, flights, restaurants, events, and attractions that match the user\'s interests and budget. The recommendations are generated using various recommendation techniques such as Content-Based Filtering and User-User Collaborative Filtering algorithms.',
    },
    {
      title: 'Overall, the Travelix tool aims to simplify the process of planning a trip, providing users with personalized travel recommendations based on their interests and budget. It is a novel tool that fills a gap in the market by offering a personalized approach to travel recommendations.',
    },
    {
      title: 'Due to the sparsity of the data available which includes reviews and ratings from travelers it is difficult to build personalized recommendations for the above use case.. It can be challenging to build such a tool because it requires a large amount of data and a complex algorithm.',
    },
    {
      title: 'A User Interface similar to Netflix for Travel Needs.'
    },
    {
      title: 'Travelix provides three different kinds of recommendations as follows : Non-personalized recommendations : Recommend trending places to visit right now, Personalized recommendations, Using Matrix Factorization, AutoEncoder (Addressing the sparsity of data) + Collaborative Filtering ',
    },
    {
      title: 'Hence, Travelix will be a one stop solution for user’s travel needs. We are using the Yelp data set for establishing the user business ratings matrix, covering 2M users and around 150K businesses.       ',
    },


  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Get Started',
  items: [
    {
      title: 'Step 1',
      description:
        'New users should choose the states and categories for which they\'re interested in. Click on submit ',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'NPR Results based on the new user is shown which includes recommendations for accommodations, restaurants etc.. The user can navigate to different states and categories using the dropdown.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Existing users can navigate to different states and categories using the dropdown and are shown recommendations based on their travel history and preferences.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  }
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'The tool is developed by Dream Team RADS of 4 of the Information Storage and Retrieval course at Texas A&M University, under the guidance of Professor James Caverlee.',
    // highlight: 'Team',
  },
  
  teams: [
    {
      name: 'Sankalp Chapalgaonkar',
      occupation: 'Technical Architect',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sankalp Chapalgaonkar',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/sankalpchap1',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/sankalp-chapalgaonkar/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:sankalpchap1@gmail.com',
        },
      ],
    },
    {
      name: 'Divyansh Bokadia',
      occupation: 'SEO Specialist',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Divyansh Bokadia',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/Divyanshbokadia',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/divyansh-bokadia/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:dbokadia@gmail.com',
        },
      ],
    },
    {
      name: 'Rishabh Bassi',
      occupation: 'Chief Everything Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Rishabh Bassi',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/bassi_rishabh',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/rishabh-bassi/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:bassirishabh@gmail.com',
        },
      ],
    },
    {
      name: 'Anshul Sharma',
      occupation: 'Machine Learning Specialist',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Anshul Sharma',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: 'https://twitter.com/sharma_anshul18',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: 'https://www.linkedin.com/in/anshulsharma18/',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: 'mailto:ianshulvsharma.96@gmail.com',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: 'What our customers say about us'
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Dylan Nguyen',
      occupation: 'Travel enthusiast',
      comment:
        'Appealing tool and highly personalized using user preferences and destination data. Quite excited!!',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Shurui Hui ',
      occupation: 'Student',
      comment:
        'Game changer! Go-to resource for travelers worlwide! Stands out from the competition! Highly recommend!',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Prof Caverlee',
      occupation: 'Project Guide',
      comment:
        'Interesting project. Make sure to preprocess the data to improve the quality of your recommendations',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for each plan',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      value: 29,
      period: 'per month',
      texts: [
      ],
      link: {
        label: 'Free 7-day trial',
        href: '#',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      value: 69,
      period: 'per month',
      link: {
        label: 'Free 15-day trial',
        href: '#',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      value: 199,
      period: 'per month',

      link: {
        label: 'Free 30-day trial',
        href: '#',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      link: {
        label: 'Get started',
        href: '#',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      link: {
        label: 'Get started',
        href: '#',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      link: {
        label: 'Get started',
        href: '#',
      },
    },
  ],
};

// Contact data
export const evaluationData: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    description:
      'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Texas A&M University', 'College Station, TX 77802'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +1 123 4567', 'Office: +1 123 4567'],
    },
    {
      title: 'Email',
      texts: ['Office: bassirishabh@gmail.com', 'Site: https://travelix2.herokuapp.com/'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://twitter.com/bassi_rishabh' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.linkedin.com/in/rishabh-bassi/' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.linkedin.com/in/rishabh-bassi/' },
    { label: 'RSS', icon: IconRss, href: 'https://twitter.com/bassi_rishabh' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/sankalpchap1/travelix-website.github.io' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/sankalpchap1/travelix-website.github.io">
        {' '}
        RADS 
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};
