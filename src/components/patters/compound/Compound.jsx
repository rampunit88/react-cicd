import React, { createContext,useContext, useState } from "react";

const ToggleContext = createContext();

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

Toggle.On = function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

Toggle.Off = function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

Toggle.Button = function ToggleButton(props) {
  const { toggle } = useContext(ToggleContext);
  return <button onClick={toggle} {...props} />;
};

function Compound() {
  return (
    <fieldset>
      <legend>Compound Pattern</legend>
      <h3>Compound Components</h3>
      <Toggle>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button>Toggle</Toggle.Button>
    </Toggle>
    </fieldset>
  );
}

export default Compound;