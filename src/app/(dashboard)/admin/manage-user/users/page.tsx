"use client";

import Loader from "@/components/Shared/Loader";
import XTable from "@/components/UI/XTable";
import { useGetAllUserQuery } from "@/redux/api/features/user/userApi";
import { Button, Popconfirm, Tag, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import Image from "next/image";

const User = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  query["limit"] = size;
  query["page"] = page;

  const { data, isLoading } = useGetAllUserQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const userData = data?.data;
  const meta = data?.meta;

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: function (data: any) {
        if (data) {
          return (
            <>
              <Image src={data} alt="" height={50} width={50} className="rounded-xl object-cover" />
            </>
          );
        } else {
          // Handle the case where data is null or undefined
          return null; // Or display a placeholder image or message
        }
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      render: function (data: any) {
        return <Tag color="processing">{data}</Tag>;
      },
    },
    {
      title: "Created Time",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex items-center gap-2">
            <Link href={`/tourist/booking-history`}>
              <Button
                onClick={() => message.info(`Maintenance - ${data}`)}
                type="primary"
                ghost
              >
                <EditOutlined />
              </Button>
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this booking?"
              onConfirm={() => console.log(data)}
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

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
  };

  return (
    <div>
      <XTable
        loading={isLoading}
        columns={columns}
        dataSource={userData}
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

export default User;
