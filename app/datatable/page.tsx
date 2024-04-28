"use client";
import { title } from "@/components/primitives";
import { IProduct } from "@/interface/product";
import DataTable from "react-data-table-component";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function DatablePage() {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );
  const columns = [
    {
      name: "Title",
      selector: (row: IProduct) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row: IProduct) => row.price,
      sortable: true,
    },
  ];
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <h1 className={title()}>Datatable</h1>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
