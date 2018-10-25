import { styled } from 'styletron-react';

export const Body = styled('div', ({ isVisible }) => ({
    maxHeight: isVisible ? '300vh' : '0',
}));