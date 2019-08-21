import React, { Component } from "react";
import { graphql } from "gatsby";

class Paragraph extends Component {
  render() {
    const data = this.props.block.attributes;
    return (
      <>
        <p
          className={data.className}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </>
    );
  }
}

export default Paragraph;

export const query = graphql`
  fragment ParagraphInfo on WordPress_CoreParagraphBlockAttributesV3 {
    align
    backgroundColor
    content
    className
    customBackgroundColor
    customFontSize
    customTextColor
    direction
    dropCap
    fontSize
    placeholder
    textColor
  }
`;
