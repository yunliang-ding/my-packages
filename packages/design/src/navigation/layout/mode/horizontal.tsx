import { Menu, Breadcrumb, Tabs, Space } from '../../..';
import RightContentRender from '../right-content-render';
import './horizontal.less';

export default ({
  siderFooterRender,
  topKey,
  menus,
  menuClick,
  openMenu,
  title,
  logo,
  breadcrumb,
  breadcrumbClick,
  extra,
  rightContentProps,
  openKeys,
  selectedKey,
  content,
  collapsed,
}: any) => {
  /** 右侧渲染逻辑 */
  return (
    <>
      <div className="yld-layout-horizontal-header">
        <div className="yld-layout-horizontal-header-logo">
          <a>
            <img
              src={logo}
              style={{
                width: 32,
                height: 32,
              }}
            />
            <h1>{title}</h1>
          </a>
        </div>
        <div className="yld-layout-horizontal-header-menu">
          <Tabs
            activeKey={topKey}
            onClick={(path: string) => {
              menuClick([], path);
            }}
            tabs={menus?.map((item: any) => {
              return {
                ...item,
                key: item.path,
                label: (
                  <>
                    {item.icon}
                    <label title={item.label}>{item.label}</label>
                  </>
                ),
                children: undefined,
              };
            })}
          />
        </div>
        <div className="yld-layout-horizontal-header-right">
          <RightContentRender {...rightContentProps} />
        </div>
      </div>
      <div className="yld-layout-horizontal-body">
        <div className="yld-layout-horizontal-body-sider">
          <div className="yld-layout-horizontal-body-sider-menu">
            {/* 这里渲染当前一级菜单下面的子菜单 */}
            <Menu
              selectKey={selectedKey}
              openKey={openKeys}
              collapsed={collapsed}
              openMenu={openMenu}
              menuClick={menuClick}
              menus={
                (menus?.find((item) => item?.path === topKey) as any)
                  ?.children || []
              }
            />
          </div>
          <div className="yld-layout-horizontal-body-sider-footer">
            {siderFooterRender(collapsed)}
          </div>
        </div>
        <div className="yld-layout-horizontal-body-right">
          <div className="yld-layout-horizontal-body-right-breadcrumb">
            <Breadcrumb items={breadcrumb} onClick={breadcrumbClick} />
            <div className="yld-layout-vertical-right-body-title-extra">
              {extra}
            </div>
          </div>
          <div className="yld-layout-horizontal-body-right-content">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};
