export default ({ addon }: any) => {
  return addon ? (
    <label className="yld-input-addon-before" title={addon}>
      {addon}
    </label>
  ) : null;
};
