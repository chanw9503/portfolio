import React from 'react';
import { styled } from 'styled-components';

const Fumes = () => {
  return (
    <SVG>
      <g transform="translate(0 -1028.4)">
        <path
          d="m9.5 1033.4c-3.5899 0-6.5 2.9-6.5 6.5 0 0-0.0005 0 0 0.1-1.7839 0.9-3 2.7-3 4.9 0 3 2.4624 5.5 5.5 5.5h0.0312 13.219 0.25c2.761 0 5-2.3 5-5 0-2.1-1.297-3.9-3.125-4.7 0.071-0.2 0.125-0.5 0.125-0.8 0-2-1.567-3.5-3.5-3.5-0.798 0-1.536 0.2-2.125 0.7-1.043-2.2-3.282-3.7-5.875-3.7z"
          fill="#95a5a6"
        />
        <path
          d="m9.5 1032.4c-3.5899 0-6.5 2.9-6.5 6.5 0 0-0.0005 0 0 0.1-1.7839 0.9-3 2.7-3 4.9 0 3 2.4624 5.5 5.5 5.5h0.0312 13.219 0.25c2.761 0 5-2.3 5-5 0-2.1-1.297-3.9-3.125-4.7 0.071-0.2 0.125-0.5 0.125-0.8 0-2-1.567-3.5-3.5-3.5-0.798 0-1.536 0.2-2.125 0.7-1.043-2.2-3.282-3.7-5.875-3.7z"
          fill="#bdc3c7"
        />
      </g>
    </SVG>
  );
};

export default Fumes;

const SVG = styled.svg`
  height: 24px;
  width: 24px;
  position: absolute;
  left: -15px;
`;
