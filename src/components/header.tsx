import { useStaticQuery, graphql, Link } from "gatsby";
import React, { useState } from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { GatsbyImage } from "gatsby-plugin-image";
import "twin.macro";
import tw, { css, styled } from "twin.macro";
import { Layout } from './__generated__/Layout';

// interface IPrismicLayout {
//   prismicLayout: {
//     data: {
//       site_tagline: {
//         raw: RichTextBlock[];
//       };
//       footer_text: {
//         raw: RichTextBlock[];
//       };
//       footer_links: {
//         link_label: {
//           raw: RichTextBlock[];
//         };
//       }[];
//     };
//   };
// }

const NavLink: React.FC<{ to: string }> = ({ to, children }) => (
  <Link
    to={to}
    tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm block text-gray-500 rounded-sm transition-all"
  >
    {children}
  </Link>
);
const Header: React.FC = () => {
  const data = useStaticQuery<Layout>(graphql`
    query Layout {
      prismicLayout {
        data {
          site_tagline {
            raw
          }
          footer_text {
            raw
          }
          footer_links {
            link_label {
              raw
            }
          }
          site_logo {
            gatsbyImageData
          }
        }
      }
    }
  `);
  const [open, setOpen] = useState(false);
  return (
    <header tw="sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center shadow">
      <div tw="flex items-center justify-between px-4 py-2 sm:p-0">
        <div tw="flex items-center">
          {/* <img src={LogoBible} tw="h-12 m-0 p-0 px-2" alt="bible logo" /> */}
          <GatsbyImage image={data.prismicLayout.data.site_logo.gatsbyImageData} tw="h-12 m-0 p-0 px-2" alt="bible logo" />
          <Link
            to="/"
            tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 px-4 py-2 block text-gray-900 rounded text-2xl font-semibold transition-all"
          >
            <h1>{RichText.asText(data.prismicLayout.data.site_tagline.raw)}</h1>
          </Link>
        </div>
        <div tw="sm:hidden">
          <button
            type="button"
            aria-label="expand menu"
            tw="block text-gray-400 hover:text-gray-900 focus:text-gray-900 transition-all focus:outline-none rounded focus:ring focus:ring-blue-300"
            onClick={() => setOpen(!open)}
          >
            <svg tw="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open && (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!open && (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        tw="px-4 pt-2 pb-4 sm:flex sm:p-0 transition-all"
        css={[open ? tw`block` : tw`hidden`]}
      >
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/articles/who-are-we">Who Are We?</NavLink>
        <NavLink to="/articles/gods-purpose-with-the-earth">
          Our Beliefs
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
