"use client";

import ServiceDate from "@/components/Services/ServiceDate";
import ServiceNameFilter from "@/components/Services/ServiceNameFilter";
import ServicePriceHighToLow from "@/components/Services/ServicePriceHighToLow";
import ServicesPriceLowToHigh from "@/components/Services/ServicesPriceLowToHigh";
import DraggableTabNode from "@/components/UI/DraggableTabNode";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext, PointerSensor, useSensor } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Tabs } from "antd";
import { Col, Row } from "antd";
import { useState } from "react";

const Services = () => {
  const [items, setItems] = useState([
    {
      key: "date",
      label: "Date",
      children: <ServiceDate />,
    },
    {
      key: "priceLow",
      label: "Price Low To High",
      children: <ServicesPriceLowToHigh />,
    },
    {
      key: "priceHigh",
      label: "Price High To Low",
      children: <ServicePriceHighToLow />,
    },
    {
      key: "name",
      label: "Name < a - z >",
      children: <ServiceNameFilter />,
    },
  ]);

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-10">
      <Row gutter={50}>
        <Col span={18}>
          <Tabs
            type="card"
            items={items}
            renderTabBar={(tabBarProps, DefaultTabBar) => (
              <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
                <SortableContext
                  items={items.map((i) => i.key)}
                  strategy={horizontalListSortingStrategy}
                >
                  <DefaultTabBar {...tabBarProps}>
                    {(node) => (
                      <DraggableTabNode {...node.props} key={node.key}>
                        {node}
                      </DraggableTabNode>
                    )}
                  </DefaultTabBar>
                </SortableContext>
              </DndContext>
            )}
          />
        </Col>
        <Col span={6}>Right</Col>
      </Row>
    </div>
  );
};

export default Services;
