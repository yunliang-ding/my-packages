import { IconCaretDown, IconCaretUp } from "@yl-d/icon";

export default ({ scroll, columns, bordered, query, width }) => {
  const defineColumn = columns.filter((i) => i.width);
  const defineColumnWidth = defineColumn.reduce(
    (a, b) => ({ width: a.width + b.width }),
    { width: 0 },
  )?.width;
  const defineFixedLeft = columns.filter((i) => i.fixed === 'left');
  const defineFixedRight = columns.filter((i) => i.fixed === 'right');
  return (
    <thead>
      <tr className="yld-table-header-tr">
        {columns.map((column, _index) => {
          const tdStyle: any = {
            width:
              column.width ||
              ((scroll.x || width) - defineColumnWidth) /
                (columns.length - defineColumn.length),
          };
          let columnClassName = ['yld-table-td'];
          if (column.sort) {
            columnClassName.push('yld-table-td-sort');
          }
          if (bordered) {
            columnClassName.push('yld-table-td-grid');
          }
          if(scroll?.x){
            if (column.fixed === 'left') {
              columnClassName.push(`yld-table-td-fixed-left`);
              tdStyle.left = defineFixedLeft
                .slice(0, _index)
                .reduce((a, b) => ({ width: a.width + b.width }), {
                  width: 0,
                }).width;
            }
            if (column.fixed === 'right') {
              columnClassName.push(`yld-table-td-fixed-right`);
              tdStyle.right = defineFixedRight
                .slice(defineFixedRight.length - (columns.length - _index) + 1)
                .reduce((a, b) => ({ width: a.width + b.width }), {
                  width: 0,
                }).width;
            }
            if (_index === defineFixedLeft.length - 1) {
              columnClassName.push('yld-table-td-fixed-left-last');
            }
            if (columns.length - _index === defineFixedRight.length) {
              columnClassName.push('yld-table-td-fixed-right-frist');
            }
          }
          return (
            <td
              className={columnClassName.join(' ')}
              key={column.dataIndex}
              style={tdStyle}
            >
              {column.title}
              {column.sort && (
                <>
                  <IconCaretUp
                    style={{ left: 6, top: -3, fontSize: 12 }}
                    onClick={() => {
                      query({
                        type: 'asc',
                        dataIndex: column.dataIndex,
                      });
                    }}
                  />
                  <IconCaretDown
                    style={{ top: 5, right: 6, fontSize: 12 }}
                    onClick={() => {
                      query({
                        type: 'desc',
                        dataIndex: column.dataIndex,
                      });
                    }}
                  />
                </>
              )}
            </td>
          );
        })}
      </tr>
    </thead>
  );
};
