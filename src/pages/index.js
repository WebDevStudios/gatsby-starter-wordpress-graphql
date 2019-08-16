import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/hero';
import TeamMembers from '../components/team-members';

const Home = ({ data }) => {
  const sections = data.wordPress.pageBy.pageSectionFields.sections;
  
  return (
    <div>
      {sections.map(section => {
        const typeName = section.__typeName;
        
        switch (typeName) {
          case 'WordPress_Page_Pagesectionfields_Sections_Hero':
            return <Hero key={section.id} {...section} />
          
          case 'WordPress_Page_Pagesectionfields_Sections_TeamMembers':
            return <TeamMembers key={section.id} {...section} />
          
          default:
            return <p>You done busted it.</p>
        }
      })}
    </div>
  );
};

export default Home;

export const pageQuery = graphql`
  {
    wordPress {
      pageBy(uri: "home") {
        id
        title
        pageSectionFields {
          sections {
            __typename

            ... on WordPress_Page_Pagesectionfields_Sections_Hero {
              backgroundColor
              buttonLink
              buttonText
              description
              title
            }

            ... on WordPress_Page_Pagesectionfields_Sections_TeamMembers {
              teamMembers {
                teamMember {
                  ... on WordPress_TeamMember {
                    title
                    id
                    profileFields {
                      bio
                      github
                      website
                      twitter
                      title
                      photo {
                        altText
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;