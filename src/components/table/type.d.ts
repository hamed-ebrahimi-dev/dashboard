export type ColumnProps<T> = {
    key: string;
    title: string | ReactElement;
    render?: (column: ColumnProps<T>, item: T) => ReactElement;
  }
  
  type Props<T> = {
    columns: Array<ColumnProps<T>>;
    data?: T[];
    className?: string;
  }
  