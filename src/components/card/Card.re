[@react.component]
let make = (~children) => {
  <div
    style={ReactDOM.Style.make(~borderRadius="20px", ())}
    className="card highlight-card h-100">
    <div className="card-body"> children </div>
  </div>;
};
