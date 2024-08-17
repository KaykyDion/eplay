import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branco};
  font-size: ${({ size }) => (size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${({ size }) => (size === 'big' ? '8px 16px' : '6px 14px ')};
  border-radius: 8px;
  display: inline-block;
`
