import React from 'react';
import styled from 'styled-components';

import css from './Icon.style';

/*
  Icon is a wrapper for fontAwesome icons

  Props:
    * title
    * fontAwesomeClass
    * onClick
    * newTab
    * color
    * size
*/

export const ICON_SIZES = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

const Icon = (props) => {
  const { className, title, fontawesomeclass, onClick } = props

  return (
    <div className={className} onClick={onClick} title={title} {...props}>
      {fontawesomeclass && <i className={fontawesomeclass} />}
    </div>
  )
}

export default (styled(Icon)`
  ${css}
`)
