import React from 'react';
import styled from 'styled-components';

export default function Lesson({ data }) {
  const { lesson } = data;
  return (
    <div dangerouslySetInnerHTML={{ __html: lesson.html }} />
  );
}

export const pageQuery = graphql`
  query LessonBySlugQuery($slug: String!) {
    lesson:markdownRemark(fields:{slug:{eq:$slug}}) {
      ...LessonFragment
    }
  }
`;