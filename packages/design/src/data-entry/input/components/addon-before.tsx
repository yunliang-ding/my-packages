export default (props: any) => {
  return props.addon ? (
    <label className="yld-input-addon-before" title={props.addon}>
      {props.addon}
    </label>
  ) : null;
};
