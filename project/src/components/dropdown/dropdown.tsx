import React, {useState} from 'react';

type DropdownProps = {
  dropdownOptions: any,
  sortType: any,
  setSortType: any,
}

function Dropdown ({ dropdownOptions, sortType, setSortType }: DropdownProps) {

  // const [open, setOpen] = useState(false);

  const renderedOptions = dropdownOptions.map(option =>
    (
      <li
        key={option.value}
        className="places__option"
        tabIndex={0}
        onClick={() => setSortType(option)}
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
