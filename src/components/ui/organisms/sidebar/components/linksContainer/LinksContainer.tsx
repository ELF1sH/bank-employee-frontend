import React from 'react';

import SidebarItem from './components/sidebarItem/SidebarItemController';
import { classesStructure } from '../../classesStructure';
import ClassesIcon from '../../../../atoms/icons/ClassesIcon';
import BugIcon from '../../../../atoms/icons/BugIcon';
import InfoIcon from '../../../../atoms/icons/InfoIcon';
import { Wrapper } from './styled';

interface LinksContainerProps {
  isSidebarCollapsed: boolean;
}

export const LinksContainer: React.FC<LinksContainerProps> = ({ isSidebarCollapsed }) => (
  <Wrapper>
    <SidebarItem
      text="Classes"
      isSidebarCollapsed={isSidebarCollapsed}
      isActive
      isCollapsible
      collapseTree={classesStructure}
    >
      <ClassesIcon />
    </SidebarItem>

    <SidebarItem
      text="Report a bug"
      isSidebarCollapsed={isSidebarCollapsed}
    >
      <BugIcon />
    </SidebarItem>

    <SidebarItem
      text="About"
      isSidebarCollapsed={isSidebarCollapsed}
    >
      <InfoIcon />
    </SidebarItem>
  </Wrapper>
);
