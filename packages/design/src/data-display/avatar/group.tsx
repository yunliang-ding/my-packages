import { ReactNode } from 'react';
import Avatar from '.';
import { AvatarProps } from './type';
import './index.less';

export interface AvatarGroupProps {
  options: (AvatarProps & {
    label: ReactNode;
  })[];
}

export default ({ options = [] }: AvatarGroupProps) => {
  options.forEach((item, index) => {
    item.style = {
      ...item.style,
      zIndex: options.length - index,
      left: index === 0 ? 0 : -8 * index
    };
  });
  return (
    <div className="yld-avatar-group">
      {options.map((item, index) => {
        return (
          <Avatar {...item} key={index}>
            {item.label}
          </Avatar>
        );
      })}
    </div>
  );
};
