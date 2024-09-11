export default (props: any) => {
  return props.addon ? (
    <label className="yld-input-addon-after" title={props.addon}>
      {props.addon}
    </label>
  ) : null;
};
