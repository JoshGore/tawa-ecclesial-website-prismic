/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Layout
// ====================================================

export interface Layout_prismicLayout_data_site_tagline {
  raw: any | null;
}

export interface Layout_prismicLayout_data_footer_text {
  raw: any | null;
}

export interface Layout_prismicLayout_data_footer_links_link_label {
  raw: any | null;
}

export interface Layout_prismicLayout_data_footer_links {
  link_label: Layout_prismicLayout_data_footer_links_link_label | null;
}

export interface Layout_prismicLayout_data_site_logo {
  gatsbyImageData: any | null;
}

export interface Layout_prismicLayout_data {
  site_tagline: Layout_prismicLayout_data_site_tagline | null;
  footer_text: Layout_prismicLayout_data_footer_text | null;
  footer_links: (Layout_prismicLayout_data_footer_links | null)[] | null;
  site_logo: Layout_prismicLayout_data_site_logo | null;
}

export interface Layout_prismicLayout {
  data: Layout_prismicLayout_data | null;
}

export interface Layout {
  prismicLayout: Layout_prismicLayout | null;
}
