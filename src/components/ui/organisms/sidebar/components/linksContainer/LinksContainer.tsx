import React from 'react';

import SidebarItem from './components/sidebarItem/SidebarItemController';
import InfoIcon from '../../../../atoms/icons/InfoIcon';
import { Wrapper } from './styled';
import UserIcon from '../../../../atoms/icons/UserIcon';

interface LinksContainerProps {
  isSidebarCollapsed: boolean;
}

export const LinksContainer: React.FC<LinksContainerProps> = ({ isSidebarCollapsed }) => (
  <Wrapper>
    <SidebarItem
      text="Clients"
      to="/clients"
      isSidebarCollapsed={isSidebarCollapsed}
      isActive
    >
      <UserIcon />
    </SidebarItem>

    <SidebarItem
      text="Employees"
      to="/employees"
      isSidebarCollapsed={isSidebarCollapsed}
    >
      <UserIcon />
    </SidebarItem>

    <SidebarItem
      text="Credit tariffs"
      to="/tariffs"
      isSidebarCollapsed={isSidebarCollapsed}
    >
      <InfoIcon />
    </SidebarItem>
  </Wrapper>
);
