interface NavItem {
    title: string;
    path: string;
}
export const navbar: NavItem[] = [
    { title: 'Home',path: '/'},
    { title: 'Topics', path: '/topics'},
    { title: 'My Health', path: '/my-health'},
    { title: 'Resources', path: '/resources'},
    { title: 'About',path: '/about'},
    { title: 'Contact', path: '/contact'},
  /*   { title: 'SUBSCRIBE', path: '/subscribe'} */
   
];

interface FooterLink {
    path: string;
    source: string;
    alt: string;

}

export const footerLinks: FooterLink[] = [
    {
        path: 'https://www.facebook.com/',
        source: 'https://img.icons8.com/color/48/000000/facebook.png',
        alt: 'facebook'
    },
    {
        path: 'https://www.twitter.com/',
        source: 'https://img.icons8.com/color/48/000000/twitter.png',
        alt: 'twitter'
    },
    {
        path: 'https://www.instagram.com/',
        source: 'https://img.icons8.com/color/48/000000/instagram-new.png',
        alt: 'instagram'
    },
    {
        path: 'https://www.linkedin.com/',
        source: 'https://img.icons8.com/color/48/000000/linkedin.png',
        alt: 'linkedin'
    }
];

export const articles = [
    { title: '10 Tips for a Healthier Lifestyle', link: 'https://www.healthline.com/nutrition/27-health-and-nutrition-tips' },
    { title: 'The Benefits of Regular Exercise', link: 'https://www.medicalnewstoday.com/articles/153390' },
    { title: 'How to Manage Stress Effectively', link: 'https://www.helpguide.org/articles/stress/stress-management.htm' },
  ];

  export const videos = [
    { title: 'Yoga for Beginners', link: 'https://www.youtube.com/watch?v=v7AYKMP6rOE' },
    { title: 'Meditation Techniques', link: 'https://www.youtube.com/watch?v=inpok4MKVLM' },
    { title: 'Healthy Cooking Recipes', link: 'https://www.youtube.com/watch?v=5rHZgR8pJmw' },
  ];

  export const ebooks = [
    { title: 'The Ultimate Guide to Wellness', link: 'https://www.wellnessmama.com/ebooks/' },
    { title: 'Healthy Eating Habits', link: 'https://www.eatright.org/food/nutrition/healthy-eating' },
    { title: 'Mental Health Awareness', link: 'https://www.mentalhealth.gov/basics/what-is-mental-health' },
  ];

  export const externalLinks = [
    { title: 'World Health Organization', link: 'https://www.who.int' },
    { title: 'Centers for Disease Control and Prevention', link: 'https://www.cdc.gov' },
    { title: 'National Institutes of Health', link: 'https://www.nih.gov' },
  ];