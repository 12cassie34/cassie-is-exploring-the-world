import React, { FunctionComponent, ReactElement } from 'react';

import { Button } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

interface OutlineBtnProps {
  buttonContent: string | ReactElement;
}

const OutlineBtn: FunctionComponent<OutlineBtnProps> = ({ buttonContent }) => (
  <Button
    p={3}
    height="100%"
    color={theme.colors.customs.text.light}
    bg={theme.colors.customs.bg.middle}
    _hover={{ bg: theme.colors.customs.bg.light }}
    whiteSpace="unset"
    variant="outline"
  >
    {buttonContent}
  </Button>
);

export default OutlineBtn;
