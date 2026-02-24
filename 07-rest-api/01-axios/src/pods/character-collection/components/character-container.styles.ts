import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const outerBox = css`
  padding: ${theme.spacing(2)};
  width: 100%;
  display: flex;
  gap: ${theme.spacing(4)};
  justify-content: center;
`;

export const innerBox = css`
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(4)};
  justify-content: center;
`;
