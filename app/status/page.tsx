import { data } from "@/MOCDATA";
import Table from "@/src/components/table/Table";
import { ColumnProps } from "@/src/components/table/type";

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

const columns: Array<ColumnProps<Data>> = Object.keys(data[0]).map((key) => ({
  title: key.charAt(0).toUpperCase() + key.slice(1),
  dataIndex: key as keyof Data,
  key,
}));

const statusPage = () => {
  return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default statusPage;
