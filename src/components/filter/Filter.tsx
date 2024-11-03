"use client";

const Filter: React.FC<FilterProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="my-2">
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
