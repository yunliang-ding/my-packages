import { RateProps } from './type';
import { Fragment, useEffect, useRef, useState } from 'react';
import NP from 'number-precision';
import {
  IconFaceFrownFill,
  IconFaceMehFill,
  IconFaceSmileFill,
  IconStarFill,
} from '@yl-d/icon';
import './index.less';

NP.enableBoundaryChecking(false);

export default ({
  style = {},
  count = 5,
  allowHalf = false,
  disabled = false,
  grading = false,
  allowClear = true,
  character = <IconStarFill />,
  onHoverChange,
  onChange,
  ...rest
}: RateProps) => {
  const ref = useRef<HTMLDivElement>();
  const [value, setValue] = useState<number>(rest.value || 0);
  useEffect(() => {
    setValue(rest.value || 0);
  }, [rest.value]);
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>();
  const resetHoverIndex = () => {
    if (hoverIndex) {
      setHoverIndex(0);
      onHoverChange?.(0);
    }
  };
  const onMouseEnter = (index, isHalf) => {
    const newHoverIndex = isHalf && allowHalf ? index + 0.5 : index + 1;
    if (newHoverIndex !== hoverIndex) {
      setHoverIndex(newHoverIndex);
      onHoverChange && onHoverChange(newHoverIndex);
    }
  };
  const onClick = (index, isHalf) => {
    const newValue = isHalf && allowHalf ? index + 0.5 : index + 1;
    setAnimation(true);
    if (newValue !== value) {
      setValue(newValue);
      onChange?.(newValue);
    } else if (allowClear) {
      setValue(undefined);
      onChange?.(undefined);
      resetHoverIndex();
    }
  };
  const renderCharacter = (index: number) => {
    const fixedValue = allowHalf
      ? NP.times(+NP.divide(value || 0, 0.5).toFixed(0), 0.5)
      : Math.round(value);
    const _usedIndex = hoverIndex || fixedValue;
    let _usedCharacter = character;
    if (grading) {
      if (_usedIndex <= 2) {
        _usedCharacter = <IconFaceFrownFill />;
      } else if (_usedIndex <= 3) {
        _usedCharacter = <IconFaceMehFill />;
      } else {
        _usedCharacter = <IconFaceSmileFill />;
      }
      if (_usedIndex <= index) {
        _usedCharacter = <IconFaceMehFill />;
      }
    }
    const classNames = ['yld-rate-character'];
    if (allowHalf && index + 0.5 === _usedIndex) {
      classNames.push('yld-rate-character-half');
    }
    if (index + 1 <= _usedIndex) {
      classNames.push('yld-rate-character-full');
    }
    if (animation && index + 1 < value) {
      classNames.push('yld-rate-character-scale');
    }
    const leftProps = disabled
      ? {}
      : {
          onMouseEnter: () => onMouseEnter(index, true),
          onClick: () => onClick(index, true),
        };
    const rightProps = disabled
      ? {}
      : {
          onMouseEnter: () => onMouseEnter(index, false),
          onClick: () => onClick(index, false),
        };
    const CharacterWrapper = Fragment;

    function getAriaProps(isHalf?: boolean) {
      return {
        role: 'radio',
        'aria-checked': index + (isHalf ? 0.5 : 1) <= _usedIndex,
        'aria-setsize': count,
        'aria-posinset': index + (isHalf ? 0.5 : 1),
      };
    }

    return (
      <CharacterWrapper key={index}>
        <div
          className={classNames.join(' ')}
          style={animation ? { animationDelay: `${50 * index}ms` } : {}}
          onAnimationEnd={() => {
            if (animation && index + 1 >= value - 1) {
              setAnimation(false);
            }
          }}
          {...(!allowHalf ? getAriaProps() : {})}
        >
          <div
            className={`yld-rate-character-left`}
            {...leftProps}
            {...(allowHalf ? getAriaProps(true) : {})}
          >
            {_usedCharacter}
          </div>
          <div
            className={`yld-rate-character-right`}
            {...rightProps}
            {...(allowHalf ? getAriaProps() : {})}
          >
            {_usedCharacter}
          </div>
        </div>
      </CharacterWrapper>
    );
  };
  return (
    <div
      ref={ref}
      style={style}
      className={disabled ? 'yld-rate yld-rate-disabled' : 'yld-rate'}
      onMouseLeave={resetHoverIndex}
    >
      <div className="yld-rate-inner">
        {Array.apply(null, Array(count)).map((_, index) =>
          renderCharacter(index),
        )}
      </div>
    </div>
  );
};
