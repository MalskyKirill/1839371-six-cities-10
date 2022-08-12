import {useState} from 'react';

function Dropdown ({ dropdownOptions, selected, onSelectedChange }) {

  const [open, setOpen] = useState(false);
  const renderedOptions = dropdownOptions.map(option => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{selected.label}</label>
        <div onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'places__option places__option--active' : 'places__option'}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div onClick={() => setOpen(!open)}
            className={`menu ${open ? 'visible transition' : ''}`}
          >{renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown;
