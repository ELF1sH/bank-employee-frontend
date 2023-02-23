import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Typography } from 'antd';

import ChevronUpIcon from '../../../../../../../../atoms/icons/ChevronUpIcon';

interface ChevronUpIconStyledProps {
  $isVisible: boolean;
}

export const TreeWrapper = styled.div`
  margin-bottom: 10px;
`;

export const TreeHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 22px;
  padding-bottom: 4px;
`;

export const TreeHeader = styled(Typography)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizeSm};
    font-weight: bold;
    line-height: 1.2;
  `}
`;

export const ChevronUpIconStyled = styled(ChevronUpIcon)<ChevronUpIconStyledProps>`
  ${({ $isVisible }) => css`
    transform: rotate(${+!$isVisible * 180}deg);
    transition: .2s transform;
  `}
`;

export const SubLinksWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${(props) => css`
    position: relative;
    &::before {
      content: '';
      width: 0;
      height: 92px;
      position: absolute;
      top: -8px;
      left: 33px;
      border-right: 1px dashed ${props.theme.colorText};
    }
  `}
`;

export const SubLink = styled(Typography)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizeSm};
    margin-left: 70px;
    margin-bottom: 3px;
    display: block;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 29px;
      height: 0;
      position: absolute;
      top: 52%;
      left: -34px;
      border-top: 1px dashed ${theme.colorText};
    }
  `}
`;
