// Single source of truth for the business facts the design handoff flagged as
// placeholders (see "Open items for the client" in ../../README.md). When the
// client confirms real details, update them here — every page reads from this
// file instead of hard-coding a phone number or WhatsApp link.

export const siteConfig = {
  businessName: 'N.D.I.',
  tagline: 'Custom cabinetry · Gauteng',

  // TODO(client): confirm these — currently the dummy values from the handoff.
  whatsappNumber: '27000000000',
  phoneDisplay: '+27 (0) 00 000 0000',
  phoneHref: 'tel:+27000000000',
  email: 'info@n-d-i.co.za',
  workshopLocation: 'Gauteng, South Africa',

  // TODO(client): confirm these business facts before launch. Bare numbers —
  // the red "+" is added by StatsSection.astro, not stored here, so it's
  // never duplicated.
  yearsAtBench: '25',
  clientsServed: '5000',
  established: 'Early 1990s',
};

/** Builds a `wa.me` deep link from the configured WhatsApp number. */
export function waHref() {
  return `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`;
}
