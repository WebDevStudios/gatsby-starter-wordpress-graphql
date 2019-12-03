import React from 'react';
import { action } from '@storybook/addon-actions';
import Byline from '../components/byline';

const props = {
  date: 'March 10',
  slug: 'the-slug',
  author: {
    name: 'Alfredo',
    slug: 'author-alfredo'
  }
}

export default {
  title: 'Byline',
};

export const byline = () => <Byline props={props}  />;

