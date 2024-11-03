import { RowCardProps } from "../table/type";
import clsx from "clsx";

const RowCard = <T,>({ row, columns, rowIndex }: RowCardProps<T>) => {
  if (!row || columns.length === 0) {
    return (
      <tr>
        <td colSpan={columns.length}>No data available</td>
      </tr>
    );
  }

  const getRowClass = () =>
    clsx("text-gray-500", { "bg-primary": rowIndex % 2 === 1 });

  const getCellClass = (colIndex: number) =>
    clsx("p-3", {
      "rounded-r-lg": rowIndex % 2 === 1 && colIndex === 0,
      "rounded-l-lg": rowIndex % 2 === 1 && colIndex === columns.length - 1,
    });

  const renderCellValue = (column: (typeof columns)[number]) =>
    column.render
      ? column.render(column, row)
      : (row[column.key as keyof typeof row] as string);

  return (
    <tr className={getRowClass()}>
      {columns.map((column, colIndex) => (
        <td key={`cell-${colIndex}`} className={getCellClass(colIndex)}>
          {renderCellValue(column)}
        </td>
      ))}
    </tr>
  );
};

export default RowCard;
