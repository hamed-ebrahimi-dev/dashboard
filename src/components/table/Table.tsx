"use client";
import RowCard from "../subComponent/rowCard";
import { Props } from "./type";

export const Table = <T,>({ data, columns }: Props<T>) => {
  const headers = columns.map((column, index) => (
    <th key={`headCell-${index}`} className="p-3 border-b-4 border-gray-200">
      {column.title}
    </th>
  ));
  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length}>No data</td>
    </tr>
  ) : (
    data.map((row, rowIndex) => (
      <RowCard
        key={`row-${rowIndex}`}
        row={row}
        columns={columns}
        rowIndex={rowIndex}
      />
    ))
  );
  return (
    <table className="text-right" dir="rtl">
      <thead className="text-black text-[14px]">
        <tr>{headers}</tr>
      </thead>
      <tbody className="text-[13px]">{rows}</tbody>
    </table>
  );
};
