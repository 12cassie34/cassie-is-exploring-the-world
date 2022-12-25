import React, { FunctionComponent, ReactElement } from 'react';

import { Button } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

interface OutlineBtnProps {
  buttonContent: string | ReactElement;
  handleClick?: () => void;
}

const OutlineBtn: FunctionComponent<OutlineBtnProps> = ({ buttonContent, handleClick }) => (
  <Button
    p={3}
    height="100%"
    width={['100%', 'fit-content']}
    color={theme.colors.customs.text.light}
    bg={theme.colors.customs.bg.middle}
    _hover={{ bg: theme.colors.customs.bg.light }}
    whiteSpace="unset"
    variant="outline"
    onClick={handleClick}
  >
    {buttonContent}
  </Button>
);

OutlineBtn.defaultProps = {
  handleClick: () => {}
};

export default OutlineBtn;
