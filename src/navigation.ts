import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink(),
    },
    {
      text: 'About Us',
      href: getPermalink('/about'),
    },
    {
      text: 'Products',
      href: getPermalink('/products'),
    },
    {
      text: 'Our Team',
      href: getPermalink('/team'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blogs'),
    },
    {
      text: 'Careers',
      href: getPermalink('/careers'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'Who We Are', href: '/about#who' },
        { text: 'Our Values', href: '/about#values' },
        { text: 'Why Choose Us', href: '/about#why' },
        { text: 'Our Vision', href: '/about#vision' },
        { text: 'Our Mission', href: '/about#mission' },

      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'ERP Software', href: '#' },
        { text: 'Books', href: '#' },
        { text: 'Stationery', href: '#' },
        { text: 'Website', href: '#' },
        { text: 'Uniforms', href: '#' },
        { text: 'Consultany', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: '/contact#contactForm'},
        { text: 'Phone', href: 'tel:+918919650382' },
        { text: 'Email', href: 'mailto:support@unifinity.com' },
        { text: 'Office', href: '/contact#office' },
        { text: 'Maps', href: '#' },
        
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: getPermalink('/blogs') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `All rights reserved.`,
};
