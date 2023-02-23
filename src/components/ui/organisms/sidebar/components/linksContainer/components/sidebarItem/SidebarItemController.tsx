import React from 'react';
import { useCycle } from 'framer-motion';

import SidebarItemView from './SidebarItemView';
import { SidebarClass } from '../../../../types';

interface SidebarItemControllerProps {
  text: string,
  isSidebarCollapsed: boolean,
  isActive?: boolean,
  isCollapsible?: boolean,
  collapseTree?: SidebarClass[],
  children?: React.ReactNode,
}

const SidebarItemController: React.FC<SidebarItemControllerProps> = ({
  text,
  isSidebarCollapsed,
  isActive = false,
  isCollapsible = false,
  collapseTree,
  children,
}) => {
  const [isClassTreeVisible, onCycle] = useCycle<boolean>(false, true);

  const onToggleClassTree = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onCycle();
  };

  return (
    <SidebarItemView
      text={text}
      isSidebarCollapsed={isSidebarCollapsed}
      isActive={isActive}
      isClassTreeVisible={isClassTreeVisible}
      onToggleClassTree={onToggleClassTree}
      isCollapsible={isCollapsible}
      collapseTree={collapseTree}
    >
      { children }
    </SidebarItemView>
  );
};

export default SidebarItemController;
