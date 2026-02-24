import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  display: flex;
  background-color: #454a52ff;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  width: 350px;
  height: 140px;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const media = css`
  width: 140px;
  height: 140px;
  object-fit: cover;
`;

export const content = css`
  flex: 1;
  padding: ${theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const name = css`
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 125%;
  margin-bottom: ${theme.spacing(1)};
`;

export const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(0.5)};
`;

export const chip = (status: string) => {
  const base = css`
    font-weight: bold;
    width: fit-content;
  `;
  if (status === 'unknown') {
    return css`
      ${base};
      background-color: #181a1eff;
      color: white;
    `;
  }
  return base;
};

export const species = css`
  color: #e0e0e0;
  font-size: 0.875rem;
`;
