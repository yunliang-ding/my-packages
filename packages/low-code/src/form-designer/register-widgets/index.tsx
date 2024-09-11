import { Space } from '@yl-d/design';
import cloneDeep from 'lodash.clonedeep';
import { Button, DragWrapper } from '@yl-d/design';
import { uuid } from '@yl-d/shared';
import formStore from '../store';
import Icon from './icon';

export interface RegisterWidgetsType {
  /** 主容器样式 */
  style?: object;
  store?: any;
}

export default ({ style = {}, store = formStore }: RegisterWidgetsType) => {
  const { builtInWidget } = store.useSnapshot();
  return (
    <div style={style} className="register-widgets">
      <div className="register-widgets-header">
        <Space>
          <h3>组件</h3>
          <span>添加组件点击即可</span>
        </Space>
      </div>
      <div className="register-widgets-body">
        {builtInWidget.map((item) => {
          return (
            <div className="register-widgets-body-item" key={item.label}>
              <h4>{item.label}</h4>
              <div className="register-widgets-body-item-btns">
                <DragWrapper
                  accept={false}
                  items={item.value?.map((type: any) => {
                    const schema = cloneDeep(type);
                    delete schema.propsConfig;
                    schema.span =
                      type.span === 'fill' ? store.formProps?.column : 1;
                    return {
                      key: schema.name,
                      schema,
                      content: (
                        <div
                          style={{
                            display: 'flex',
                            gap: 6,
                            alignItems: 'center',
                            background: 'var(--bg-color-2)',
                            padding: '6px 8px',
                            width: 106,
                            fontSize: "var(--font-size)",
                          }}
                          onClick={() => {
                            const _schema = cloneDeep(schema);
                            const unikey = uuid(8);
                            if (Array.isArray(store.schema)) {
                              store.schema.push({
                                ..._schema,
                                key: unikey,
                                name: unikey,
                              });
                              store.schema = [...store.schema];
                            } else {
                              store.schema = [
                                {
                                  ..._schema,
                                  key: unikey,
                                  name: unikey,
                                },
                              ];
                            }
                          }}
                        >
                          <i>{Icon[type.type]}</i>
                          <span>{type.label || type.name}</span>
                        </div>
                      ),
                    };
                  })}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
