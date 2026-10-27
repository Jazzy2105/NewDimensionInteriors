// Single source of truth for the business facts and contact details (all
// confirmed by the client). Every page reads from this file instead of
// hard-coding a phone number or WhatsApp link.

export const siteConfig = {
  businessName: 'N.D.I.',
  tagline: 'Kitchens, BIC’s, Vanities, Home Décor',

  whatsappNumber: '27727867144',
  phoneDisplay: '+27 72 786 7144',
  phoneHref: 'tel:+27727867144',
  email: 'info@n-d-i.co.za',
  workshopLocation: 'Gauteng, South Africa',

  // Served from public/docs/ — pass through withBase() before linking.
  termsPdfPath: '/docs/ndi-terms-and-conditions-2025.pdf',
  termsPdfFilename: 'New Dimension Interiors (NDI) - Terms and Conditions 2025.pdf',

  // Bare numbers — the red "+" is added by StatsSection.astro, not stored
  // here, so it's never duplicated.
  yearsAtBench: '25',
  clientsServed: '5000',
  established: 'Early 2000s',
};

/** Builds a `wa.me` deep link from the configured WhatsApp number. */
export function waHref() {
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`;
}
