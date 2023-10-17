"use client";

import Loader from "@/components/Shared/Loader";
import XTable from "@/components/UI/XTable";
import { Button, Input, Popconfirm, Tag, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  useDeleteServicesMutation,
  useGetServicesQuery,
} from "@/redux/api/features/services/servicesApi";
import { useDebounced } from "@/redux/hooks/useDebounced";

const Services = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetServicesQuery(query);

  const [deleteService] = useDeleteServicesMutation();

  if (isLoading) {
    return <Loader />;
  }

  const booking = data?.data?.data;
  const meta = data?.data?.meta;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Day",
      dataIndex: "day",
    },
    {
      title: "Month",
      dataIndex: "how_month",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Availability",
      dataIndex: "availabilityType",
      render: function (data: any) {
        return <Tag color="success">{data}</Tag>;
      },
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex items-center gap-2">
            <Link href={`/admin/manage-services/services/${data}`}>
              <Button type="primary" ghost>
                <EditOutlined />
              </Button>
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this booking?"
              onConfirm={() => onDelete(data)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const onDelete = async (id: string) => {
    try {
      const res = await deleteService(id).unwrap();
      if (res.success) {
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
  };

  return (
    <div>
      <Input
        size="large"
        placeholder="Find your destination"
        className="my-5"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
        suffix={<SearchOutlined />}
      />
      <XTable
        loading={isLoading}
        columns={columns}
        dataSource={booking}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default Services;
