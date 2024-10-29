import { ReactElement } from "react";

export interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
}

type Props<T> = {
  columns: Array<ColumnProps<T>>;
  data?: T[];
  className?: string;
};

const Table = <T,>({ data, columns }: Props<T>) => {
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
      <tr
        key={`row-${rowIndex}`}
        className={`text-gray-500 ${rowIndex % 2 === 1 ? "bg-primary" : ""}`}
      >
        {columns.map((column, colIndex) => {
          const value = column.render
            ? column.render(column, row as T)
            : (row[column.key as keyof typeof row] as string);

          return (
            <td
              key={`cell-${colIndex}`}
              className={`p-3 ${
                rowIndex % 2 === 1
                  ? colIndex === 0
                    ? "rounded-r-lg"
                    : colIndex === columns.length - 1
                    ? "rounded-l-lg"
                    : ""
                  : ""
              }`}
            >
              {value}
            </td>
          );
        })}
      </tr>
    ))
  );

  return (
    <div className="overflow-x-auto flex flex-col justify-center border-2 rounded-2xl m-2">
      <span className="text-gray-500 self-center mt-16">new item</span>
      <table className="text-right mx-12 my-14" dir="rtl">
        <thead className="text-black text-[14px]">
          <tr>{headers}</tr>
        </thead>
        <tbody className="text-[13px]">{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
