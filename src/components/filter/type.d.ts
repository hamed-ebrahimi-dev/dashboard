type FilterOption = {
  label: string;
  value: string | number;
};

type FilterProps = {
  options: FilterOption[];
  selectedValue: string | number | Array;
  onChange: (value: string | number) => void;
  label?: string;
  className?: string;
};
