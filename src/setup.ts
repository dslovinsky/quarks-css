import { setup } from 'goober';
import { prefix } from 'goober/prefixer';
import { shouldForwardProp } from 'goober/should-forward-prop';
import { createElement } from 'react';

import useTheme from './theme';

import type { StyleProps } from './types/quarkProps';

const stylePropPrefix = '$';
export const validateProp = (string: string): string is keyof StyleProps =>
  typeof string === 'string' && string.startsWith(stylePropPrefix);

const setupQuarks = () =>
  setup(
    createElement,
    prefix,
    useTheme,
    shouldForwardProp(prop => !validateProp(prop)),
  );

export default setupQuarks;
