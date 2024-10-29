import Table, { ColumnProps } from "@/src/components/table/Table";

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

// Moc data
export const data: Data[] = [
  {
    id: 1,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 2,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 3,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 4,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 5,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 6,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 7,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 8,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 9,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
  {
    id: 10,
    productCode: "165486465",
    SKU: "64684654644",
    location: "Tehran - 1B8",
    origin: "USA",
    year: "2018",
    Price: "4,789,456,000",
    label: "has label",
    box: "has box",
    status: "new",
  },
];

const columns: Array<ColumnProps<Data>> = Object.keys(data[0]).map((key) => ({
  title: key.charAt(0).toUpperCase() + key.slice(1),
  dataIndex: key as keyof Data,
  key,
}));

const statusPage = () => {
  return (
    <div>
      <Table data={data} columns={columns}/>
    </div>
  );
};

export default statusPage;
