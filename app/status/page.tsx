"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { data } from "@/MOC_DATA";
import Filter from "@/src/components/filter/Filter";
import { Table } from "@/src/components/table/Table";
import { ColumnProps, Data } from "@/src/components/table/type";

type FilterOption = {
  label: string;
  value: string | number;
};

const excludedFields = ["warehouse", "brand", "series", "categories"];

const columns: Array<ColumnProps<Data>> = Object.keys(data[0])
  .filter((key) => !excludedFields.includes(key))
  .map((key) => ({
    title: key.charAt(0).toUpperCase() + key.slice(1),
    dataIndex: key as keyof Data,
    key,
  }));

const filterOptions: { [key: string]: FilterOption[] } = excludedFields.reduce(
  (options, field) => {
    options[field] = Array.from(
      new Set(data.map((item) => item[field as keyof Data]))
    ).map((value) => ({
      label: String(value),
      value,
    }));
    return options;
  },
  {} as { [key: string]: FilterOption[] }
);

const StatusPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: (string | number)[];
  }>({});
  const router = useRouter();

  useEffect(() => {
    const initialFilters = Object.fromEntries(
      excludedFields.map((field) => [
        field,
        filterOptions[field].map((option) => option.value) as (
          | string
          | number
        )[],
      ])
    );
    setSelectedFilters(initialFilters);
  }, []);

  const handleFilterChange = (field: string, value: string | number) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[field] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      const query = {
        ...Object.fromEntries(
          Object.entries(prev).map(([key, values]) => [key, values.join(",")])
        ),
        [field]: newValues.join(","),
      };

      const url = `?${new URLSearchParams(query).toString()}`;

      router.push(url);

      return { ...prev, [field]: newValues };
    });
  };

  const filteredData = data.filter((item) =>
    excludedFields.every((field) =>
      (selectedFilters[field] || []).includes(item[field as keyof Data])
    )
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="text-gray-500 mb-8">new item</span>
        <div className="flex">
          {excludedFields.map((field) => (
            <Filter
              key={field}
              options={filterOptions[field]}
              selectedValue={selectedFilters[field] || []}
              onChange={(value) => handleFilterChange(field, value)}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              className="m-2"
            />
          ))}
        </div>
      </div>
      <Table data={filteredData} columns={columns} />
    </div>
  );
};

export default StatusPage;
