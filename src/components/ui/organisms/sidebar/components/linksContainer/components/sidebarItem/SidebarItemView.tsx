import React from 'react';
import { useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';

import { SidebarClass } from '../../../../types';
import TreeItem from './components/treeItem/TreeItem';
import Collapse from '../../../../../../../animations/collapse/Collapse';
import { IconButton } from '../../../../../../atoms/iconButton/IconButton';
import {
  ChevronUpIconStyled, RouterLinkStyled, SidebarItem, SidebarLink, SidebarLinkWrapper, TreeWrapper,
} from './styled';

interface SidebarItemViewProps {
  text: string;
  isSidebarCollapsed: boolean;
  isActive: boolean;
  isClassTreeVisible: boolean;
  onToggleClassTree: (e: React.MouseEvent<HTMLElement>) => void;
  isCollapsible?: boolean;
  collapseTree?: SidebarClass[];
  children?: React.ReactNode;
}

const SidebarItemView: React.FC<SidebarItemViewProps> = ({
  text,
  isSidebarCollapsed,
  isActive,
  isClassTreeVisible,
  onToggleClassTree,
  isCollapsible,
  collapseTree,
  children,
}) => (
  <div>
    <RouterLinkStyled to="/classes">
      <SidebarItem isActive={isActive}>
        <SidebarLinkWrapper>
          { children }
          <SidebarLink $isSidebarCollapsed={isSidebarCollapsed}>
            {text}
          </SidebarLink>
        </SidebarLinkWrapper>

        {
            isCollapsible
            && !isSidebarCollapsed
            && (
              <IconButton
                icon={<ChevronUpIconStyled $isVisible={isClassTreeVisible} />}
                onClick={onToggleClassTree}
              />
            )
          }
      </SidebarItem>
    </RouterLinkStyled>

    {
        collapseTree
        && (
          <Collapse
            isVisible={isClassTreeVisible && !isSidebarCollapsed}
          >
            <TreeWrapper>
              {
                collapseTree.map((item, idx) => (
                  <TreeItem classItem={item} key={idx} />
                ))
              }
            </TreeWrapper>
          </Collapse>
        )
      }
  </div>
);

export default SidebarItemView;
