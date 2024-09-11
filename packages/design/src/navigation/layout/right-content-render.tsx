import { IconMoonFill, IconSettings, IconSunFill } from '@yl-d/icon';
import { useState } from 'react';
import { Tooltip, Avatar, Dropdown, Space, Button, Drawer, Form } from '../..';
import { RightProps } from './right.type';

export default ({
  avatarUrl,
  avatarRender = () => {
    return (
      <Avatar size={26} style={{ marginRight: 10 }}>
        <img alt="avatar" src={avatarUrl} />
      </Avatar>
    );
  },
  droplist,
  userName,
  extra,
  dark,
  onDarkChange,
  themeColor,
  layout,
  onSetting,
}: RightProps) => {
  if (dark) {
    document.body.setAttribute('yld-theme', 'dark');
  }
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      {extra}
      <Space gap={20}>
        {dark ? (
          <Tooltip title="点击切换亮色模式" placement="bottom">
            <Button
              circle
              icon={<IconSunFill />}
              onClick={() => {
                onDarkChange(false);
                document.body.removeAttribute('yld-theme');
              }}
            />
          </Tooltip>
        ) : (
          <Tooltip title="点击切换暗黑模式" placement="bottom">
            <Button
              circle
              icon={<IconMoonFill />}
              onClick={() => {
                onDarkChange(true);
                document.body.setAttribute('yld-theme', 'dark');
              }}
            />
          </Tooltip>
        )}
        <Tooltip title="页面设置" placement="bottom">
          <Button
            circle
            icon={<IconSettings />}
            onClick={() => {
              Drawer({ title: '页面设置', footer: false }).open({
                render() {
                  return (
                    <Form
                      initialValues={{
                        layout,
                        themeColor,
                      }}
                      schema={[
                        {
                          label: '系统主题色',
                          name: 'themeColor',
                          type: ({ value }) => {
                            const [color, setColor] = useState(value);
                            return (
                              <input
                                type="color"
                                style={{
                                  border: 'none',
                                  width: 30,
                                  height: 30,
                                  outline: 'none',
                                  cursor: 'pointer',
                                  backgroundColor: 'var(--bg-color-2)',
                                }}
                                value={color}
                                onChange={(e) => {
                                  setColor(e.target.value);
                                  // 修改主题
                                  document.body.style.setProperty(
                                    '--primary-color',
                                    e.target.value,
                                  );
                                  onSetting({
                                    themeColor: e.target.value,
                                  });
                                }}
                              />
                            );
                          },
                        },
                        {
                          type: 'RadioGroup',
                          label: '布局风格',
                          name: 'layout',
                          props: {
                            type: 'button',
                            options: [
                              {
                                label: 'horizontal',
                                value: 'horizontal',
                              },
                              {
                                label: 'vertical',
                                value: 'vertical',
                              },
                              {
                                label: 'inline',
                                value: 'inline',
                              },
                            ],
                            onChange(v: string) {
                              onSetting({
                                layout: v,
                              });
                            },
                          },
                        },
                      ]}
                    />
                  );
                },
              });
            }}
          />
        </Tooltip>
        <Dropdown droplist={droplist}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {avatarRender()}
            <a
              style={{
                whiteSpace: 'nowrap',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {userName}
            </a>
          </div>
        </Dropdown>
      </Space>
    </div>
  );
};
