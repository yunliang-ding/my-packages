import { ReactNode } from 'react';
import Avatar from '.';
import { AvatarProps } from './type';
import './index.less';

export interface AvatarGroupProps {
  size?: number;
  options: (AvatarProps & {
    label: ReactNode;
  })[];
}

export default ({ size = 40, options = [] }: AvatarGroupProps) => {
  options.forEach((item, index) => {
    item.style = {
      ...item.style,
      zIndex: options.length - index,
      marginLeft: index > 0 ? -8 : 0,
    };
  });
  return (
    <div className="yld-avatar-group">
      {options.map((item, index) => {
        return (
          <Avatar size={size} {...item} key={index}>
            {item.label}
          </Avatar>
        );
      })}
    </div>
  );
};
