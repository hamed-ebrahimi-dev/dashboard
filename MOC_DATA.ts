import { Data } from "./src/components/table/type";

export const data: Data[] = new Array(10).fill({}).map((_, index) => ({
  id: index + 1,
  productCode: "165486465",
  SKU: "64684654644",
  location: "Tehran - 1B8",
  origin: "USA",
  year: "2018",
  Price: "4,789,456,000",
  label: "has label",
  box: "has box",
  status: "new",
  warehouse: `warehouse${index + 1}`,
  brand: `brand${index + 1}`,
  series: `series${index + 1}`,
  categories: `categories${index + 1}`,
}));
