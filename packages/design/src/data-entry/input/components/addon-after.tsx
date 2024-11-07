export default ({ addon }: any) => {
  return addon ? (
    <label className="yld-input-addon-after" title={addon}>
      {addon}
    </label>
  ) : null;
};
