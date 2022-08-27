import React from 'react';

type DropdownProps = {
  dropdownOptions: any,
  sortType: any,
  setSortType: any,
  setOpen: any,
}

function Dropdown ({ dropdownOptions, sortType, setSortType, setOpen }: DropdownProps) {


  const renderedOptions = dropdownOptions.map(option =>
    (
      <li
        key={option.value}
        className={`places__option ${option.value === sortType.value ? 'places__option--active' : ''}`}
        tabIndex={0}
        onClick={() => {setSortType(option); setOpen(false);}}
      >
        {option.label}
      </li>
    )
  );

  return (
    <React.Fragment>
      {renderedOptions}
    </React.Fragment>
  );
}
export default Dropdown;
