/**
 * 统一弹窗容器
 */
import ReactDOM from 'react-dom';
import './layer.less';
import {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export interface LayerProps {
  layerClose: Function;
  layerClick?: Function;
  layerMouseLeave?: Function;
  layerMouseEnter?: Function;
  layerClassName?: string;
  domRef: any;
  getPopupContainer?: () => HTMLElement;
  children: ReactNode;
  layerWidth?: string | number;
  layerHeight?: number;
}

export default forwardRef(
  (
    {
      children,
      layerClassName,
      getPopupContainer,
      domRef,
      layerClose,
      layerClick,
      layerMouseLeave,
      layerMouseEnter,
      layerWidth,
      layerHeight,
    }: LayerProps | any,
    ref,
  ) => {
    const [, setRefresh] = useState(Math.random());
    const divRef = useRef<HTMLDivElement>(document.createElement('div'));
    const className = ['yld-layer'];
    if (layerClassName) {
      className.push(layerClassName);
    }
    useImperativeHandle(ref, () => {
      return {
        render: () => {
          setRefresh(Math.random());
        },
      };
    });
    /** 创建 wrapper */
    useEffect(() => {
      /** 点击其他地方关闭 */
      const handleClick = (e: MouseEvent) => {
        const isContains = divRef.current?.contains(e.target as Node);
        if (!isContains && typeof layerMouseLeave !== 'function') {
          layerClose?.();
        }
      };
      window.addEventListener('click', handleClick, false);
      return () => {
        window.removeEventListener('click', handleClick, false);
      };
    }, []);
    divRef.current.style.width = '100%';
    divRef.current.style.position = 'absolute';
    divRef.current.style.top = '0px';
    divRef.current.style.left = '0px';
    const dom = getPopupContainer?.() || document.querySelector('body');
    dom.appendChild(divRef.current);
    const style: any = {};
    if (domRef?.current) {
      const parentRect = dom.getBoundingClientRect();
      const { width, height, left, top } =
        domRef.current.getBoundingClientRect();
      style.width = layerWidth || width;
      if (layerHeight) {
        style.maxHeight = layerHeight;
      }
      style.top = top + height + 4 - parentRect.top;
      style.left = left - parentRect.left;
    }
    useEffect(() => {
      // 移除dom
      divRef.current.addEventListener('click', () => {
        layerClick?.();
        layerMouseLeave?.();
      });
      return () => {
        divRef.current.remove();
      };
    }, []);
    return ReactDOM.createPortal(
      <div
        style={style}
        className={className.join(' ')}
        onMouseEnter={layerMouseEnter}
        onMouseLeave={layerMouseLeave}
      >
        {children}
      </div>,
      divRef.current,
    );
  },
);
