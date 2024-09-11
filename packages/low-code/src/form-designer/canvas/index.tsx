// import axios from 'axios';
import { CardForm, DragForm } from '@yl-d/design';
import { babelParse } from '@yl-d/shared';
import store from '../store';

export default () => {
  const { schema, formProps, customWidgets, selectedKey, preview, storeCode } =
    store.useSnapshot();
  let pureProps: any = {};
  try {
    pureProps = babelParse({
      code: store.getStandardSchema(),
      // require: {
      //   "./store": babelParse({
      //     code: decrypt(storeCode, false),
      //     require: {
      //       axios,
      //     },
      //   }),
      // },
    });
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="form-canvas">
      {preview ? (
        <CardForm {...pureProps} widgets={customWidgets} />
      ) : (
        <DragForm
          {...formProps}
          items={schema}
          widgets={customWidgets}
          onChange={(value) => {
            store.schema = value;
          }}
          selectedKey={selectedKey}
          onSelected={(key: string) => {
            store.selectedKey = key;
          }}
        />
      )}
    </div>
  );
};
