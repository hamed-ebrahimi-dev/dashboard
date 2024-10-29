export type ColumnProps<T> = {
  key: string;
  title: string | ReactElement;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
};

type Props<T> = {
  columns: Array<ColumnProps<T>>;
  data?: T[];
  className?: string;
};

// Data type definition
export type Data = {
  id: number;
  productCode: string;
  SKU: string;
  location: string;
  origin: string;
  year: string;
  Price: string;
  label: "has label" | "doesn't have" | "incorrect" | "unclear";
  box:
    | "has box"
    | "has/own/intact"
    | "has/own/damaged"
    | "has/other/intact"
    | "has/other/damaged";
  status:
    | "new"
    | "new(damaged)"
    | "used(almost new)"
    | "used(brocken)"
    | "not used(brocken)";
};
