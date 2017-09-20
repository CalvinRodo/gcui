import React from 'react'
import PropTypes from 'prop-types'
import Padding from '../Padding'

const UpwardChevron = ({
  width = '0.7em',
  colour = '#FFF',
  verticalPadding = '0.3em',
  horizontalPadding = '0.3em',
}) => (
  <Padding vertical={verticalPadding} horizontal={horizontalPadding}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height="100%"
      viewBox="0 0 5.1385611 3.2992621"
      preserveAspectRatio="xMinYMin meet"
      aria-label="upward chevron">
      <g transform="matrix(0.39946474,0,0,0.39946474,0.53101811,2.4482309)">
        <path
          style={{ fill: colour }}
          d="M 11.382674,-0.064046 5.4615799,-5.9771602 q -0.151619,-0.1516183 -0.359096,-0.1516183 -0.207478,0 -0.359096,0.1516183 l -5.921094,5.9131142 q -0.151618,0.151618 -0.151618,0.359096 0,0.215457 0.151618,0.367076 l 1.32466503,1.316685 q 0.151618,0.151618 0.359096,0.151618 0.207478,0 0.359096,-0.151618 L 5.1024839,-2.258522 9.3398164,1.978811 q 0.151618,0.151618 0.359096,0.151618 0.2074778,0 0.3590966,-0.151618 l 1.324665,-1.316685 q 0.151618,-0.151619 0.151618,-0.367076 0,-0.207478 -0.151618,-0.359096 z"
        />
      </g>
    </svg>
  </Padding>
)

UpwardChevron.propTypes = {
  width: PropTypes.string,
  colour: PropTypes.string,
  verticalPadding: PropTypes.string,
  horizontalPadding: PropTypes.string,
}

export default UpwardChevron
