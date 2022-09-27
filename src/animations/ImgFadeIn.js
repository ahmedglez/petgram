import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
const fadeIn = ({ time = '1.5s', type = 'ease-out' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`

export { fadeIn }
