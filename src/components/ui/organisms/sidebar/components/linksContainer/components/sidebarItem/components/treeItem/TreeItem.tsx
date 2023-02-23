import React from 'react';
import { useCycle } from 'framer-motion';

import { SidebarClass } from '../../../../../../types';
import Collapse from '../../../../../../../../../animations/collapse/Collapse';
import {
  ChevronUpIconStyled, SubLink, SubLinksWrapper,
  TreeHeader, TreeHeaderWrapper, TreeWrapper,
} from './styled';
import { IconButton } from '../../../../../../../../atoms/iconButton/IconButton';

interface TreeItemProps {
  classItem: SidebarClass,
}

const TreeItem: React.FC<TreeItemProps> = ({ classItem }) => {
  const [isVisible, onCycle] = useCycle(true, false);

  return (
    <TreeWrapper>
      <TreeHeaderWrapper>
        <IconButton
          icon={<ChevronUpIconStyled $isVisible={isVisible} />}
          onClick={() => onCycle()}
        />
        <TreeHeader>{classItem.title}</TreeHeader>
      </TreeHeaderWrapper>
      <Collapse
        isVisible={isVisible}
        collapseDuration={0.2}
        opacityDuration={0.1}
        opacityDelay={0}
      >
        <SubLinksWrapper>
          {
            classItem.subtitles.map((subtitle, idx) => (
              <SubLink key={idx}>
                {subtitle}
              </SubLink>
            ))
          }
        </SubLinksWrapper>
      </Collapse>
    </TreeWrapper>
  );
};

export default TreeItem;
