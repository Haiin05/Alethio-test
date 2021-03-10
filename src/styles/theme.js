import { css } from 'styled-components';

const calcRem = (size) => `${size / 16}rem`;

const fontSize = {
  xs: calcRem(12),
  small: calcRem(14),
  medium: calcRem(16),
  large: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const Color = {
  grey: {
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
  },
  black: '#212121',
  lightBlack: '#252525',
  white: '#ffffff',
};

const CenterWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => props.width};
  margin: 0 auto;
`;

const theme = {
  fontSize,
  Color,
  CenterWrapper,
};

export default theme;
