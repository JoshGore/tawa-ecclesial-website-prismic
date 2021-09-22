import React from "react";
import tw, { styled } from "twin.macro";
import Layout from "../components/layout";
import Header from "../components/header";
import { graphql } from "gatsby";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { HomePageQuery } from "./__generated__/HomePageQuery";
import Heading from "../components/heading";

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`;
// or use the shorthand version
// const Button = tw.button`
//   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
// `

// type PageProps<TData> = {
//   data: TData;
//  } & MatchRenderProps<{}>;
type PageProps<TData> = {
  data: TData;
};
type HomePageProps = PageProps<HomePageQuery>;

const IndexPage: React.FC<HomePageProps> = ({ data }) => (
  <Layout>
    <Header />
    <Heading
      type="full bleed"
      title={RichText.asText(data.prismicHomepage.data.title.raw)}
      subtitle={RichText.asText(data.prismicHomepage.data.subtitle.raw)}
      image={data.prismicHomepage.data.hero_image.gatsbyImageData}
    />
  </Layout>
);
export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    prismicHomepage {
      data {
        title {
          raw
        }
        subtitle {
          raw
        }
        show_featured_post
        show_events
        hero_image {
          gatsbyImageData(
            width: 1920
            layout: FULL_WIDTH
            imgixParams: { fit: "fill" }
          )
        }
      }
    }
  }
`;
