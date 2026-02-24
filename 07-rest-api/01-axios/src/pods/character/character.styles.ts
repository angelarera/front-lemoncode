import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  background-color: #272b33;
  min-height: 100vh;
  width: 100%;
  padding: ${theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const card = css`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #454a52ff;
  color: white;
  max-width: 400px;
  width: 100%;
`;

export const media = css`
  height: 300px;
  object-fit: cover;
`;

export const content = css`
  padding: ${theme.spacing(3)};
`;

export const title = css`
  font-weight: bold;
  text-align: center;
`;

export const chipContainer = css`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing(2)};
`;

export const divider = css`
  margin: ${theme.spacing(2)} 0;
  background-color: #666;
`;

export const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`;

export const infoLabel = css`
  color: #b0b0b0;
  font-size: 0.875rem;
`;

export const infoValue = css`
  font-size: 1rem;
`;

export const button = css`
  margin-top: ${theme.spacing(3)};
  font-size: 0.9rem;
  font-weight: bold;
  background-color: #3a3f47;
  color: white;
  border: 1px solid #555;
  padding: 8px 20px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #4a4f57;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
