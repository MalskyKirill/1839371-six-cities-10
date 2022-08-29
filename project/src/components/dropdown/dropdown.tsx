type DropdownProps = {
  dropdownOptions: any,
  sortType: any,
  setSortType: any,
  setOpen: any,
}

function Dropdown ({ dropdownOptions, sortType, setSortType, setOpen }: DropdownProps) {


  const renderedOptions = dropdownOptions.map((option: { value: React.Key | null | undefined; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
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
    <div>
      {renderedOptions}
    </div>
  );
}
export default Dropdown;
