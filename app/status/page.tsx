import { data } from "@/MOCDATA";
import Table from "@/src/components/table/Table";
import { ColumnProps, Data } from "@/src/components/table/type";

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
