import React from 'react';
import { favicon, repository } from 'lyr';
import { Input, Tooltip, Avatar, Button } from '@yl-d/design';
import { IconSearch, IconGithub } from '@yl-d/icon';
import './introduced.less';

export default () => {
  return (
    <div className="docs-introduced">
      <div className="docs-introduced-head">
        <div>
          <Avatar>
            <img src={favicon} />
          </Avatar>
          <h1
            style={{ cursor: 'pointer', color: 'var(--text-color)' }}
            onClick={() => {
              location.hash = '/';
            }}
          >
            我的前端生态包
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Input
            allowClear
            prefix={<IconSearch />}
            placeholder="搜索文档"
            style={{ width: 180, marginRight: 10 }}
          />
        </div>
        <div>
          <Tooltip title="Github" placement="bottom">
            <Button circle>
              <a href={repository} target="_blank">
                <IconGithub
                  style={{ color: 'var(--text-color)' }}
                  onClick={() => {
                    window.open(repository);
                  }}
                />
              </a>
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="docs-introduced-body">
        <div className="docs-introduced-body-btn">快速开始</div>
      </div>
      <div className="docs-introduced-bar">
        <div className="docs-introduced-bar-item">
          <img src="" />
          <p></p>
        </div>
      </div>
      <div className="docs-introduced-footer"></div>
    </div>
  );
};
