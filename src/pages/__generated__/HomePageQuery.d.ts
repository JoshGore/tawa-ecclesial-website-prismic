/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_prismicHomepage_data_title {
  raw: any | null;
}

export interface HomePageQuery_prismicHomepage_data_subtitle {
  raw: any | null;
}

export interface HomePageQuery_prismicHomepage_data_hero_image {
  gatsbyImageData: any | null;
}

export interface HomePageQuery_prismicHomepage_data {
  title: HomePageQuery_prismicHomepage_data_title | null;
  subtitle: HomePageQuery_prismicHomepage_data_subtitle | null;
  show_featured_post: boolean | null;
  show_events: boolean | null;
  hero_image: HomePageQuery_prismicHomepage_data_hero_image | null;
}

export interface HomePageQuery_prismicHomepage {
  data: HomePageQuery_prismicHomepage_data | null;
}

export interface HomePageQuery {
  prismicHomepage: HomePageQuery_prismicHomepage | null;
}
