import { forwardRef, useRef, useCallback, useEffect } from 'react';
import { WatermarkProps } from './type';
import useWatermark from './util';

const watermarkOptionsKey = [
  'zIndex',
  'width',
  'height',
  'rotate',
  'image',
  'content',
  'fontStyle',
  'gap',
  'offset',
  'getContainer',
];

export function WatermarkComponent(baseProps: WatermarkProps, _) {
  const props = {
    ...baseProps,
  };
  const containerRef = useRef<HTMLDivElement>();
  const getContainer = useCallback(() => {
    return containerRef.current;
  }, [containerRef.current]);
  const watermarkOptions = watermarkOptionsKey.reduce((t, key) => {
    if (key in props) {
      t[key] = props[key];
    }
    return t;
  }, {});
  const { setWatermark } = useWatermark({
    ...watermarkOptions,
    getContainer,
  });
  useEffect(() => {
    setWatermark({
      ...watermarkOptions,
      getContainer,
    });
  }, [
    props.zIndex,
    props.width,
    props.height,
    props.rotate,
    props.image,
    props.content,
    JSON.stringify(props.fontStyle),
    JSON.stringify(props.gap),
    JSON.stringify(props.offset),
    getContainer,
  ]);
  return props.children ? (
    <div className="yld-watermark" style={props.style} ref={containerRef}>
      {props.children}
    </div>
  ) : null;
}

const Watermark = forwardRef(WatermarkComponent);

export default Watermark;
