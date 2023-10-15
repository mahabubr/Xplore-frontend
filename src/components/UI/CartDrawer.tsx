import { iServices } from "@/interface/api";
import { Button, Drawer } from "antd";
import { useSelector } from "react-redux";
import CartCard from "../Cart/CartCard";

const CartDrawer = ({ open, onClose }: any) => {
  const { services }: any = useSelector((state) => state);

  const data = services?.services;

  return (
    <Drawer
      title="Cart"
      placement="right"
      onClose={onClose}
      open={open}
      className="backdrop-blur-xl backdrop:bg-primary bg-white/30"
    >
      <div className="space-y-7">
        {data.length > 0 &&
          data?.map((service: iServices) => (
            <CartCard key={service.id} service={service} />
          ))}
      </div>
      <div className="">
        <Button type="primary" className="w-full mt-10">
          Book Now
        </Button>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
