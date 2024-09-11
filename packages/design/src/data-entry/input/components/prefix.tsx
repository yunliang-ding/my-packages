export default (props: any) => {
  return (
    <div className="yld-input-prefix" style={props.style}>
      {props.children}
    </div>
  );
};
