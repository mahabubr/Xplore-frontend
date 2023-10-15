import { iServices } from "@/interface/api";
import { Button, Drawer, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../Cart/CartCard";
import Link from "next/link";
import { useCreateCartMutation } from "@/redux/api/features/cart/cartApi";
import { resetCart } from "@/redux/api/features/services/servicesSlice";
import { useRouter } from "next/navigation";
import Notes from "../notes/Notes";

const CartDrawer = ({ open, onClose }: any) => {
  const { services }: any = useSelector((state) => state);

  const [createCart] = useCreateCartMutation();

  const dispatch = useDispatch();
  const router = useRouter();

  const data = services?.services;

  const handleAddToCart = async (cartData: any) => {
    message.loading("Adding...");
    try {
      const payload = cartData?.map((cart: any) => ({
        userId: "59b2462e-185b-4a5b-9c7c-8bbdf6d3ecab",
        serviceId: cart.id,
      }));

      const res = await createCart(payload).unwrap();
      if (res.success) {
        message.success(res.message);
        dispatch(resetCart());
        router.push("/cart");
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer
      title="Cart"
      placement="right"
      onClose={onClose}
      open={open}
      className="backdrop-blur-xl backdrop:bg-primary bg-white/30"
    >
      <div className="space-y-7">
        {data.length > 0 ? (
          data?.map((service: iServices) => (
            <CartCard key={service.id} service={service} />
          ))
        ) : (
          <Notes />
        )}
      </div>
      <div className="">
        {data.length > 0 ? (
          <Button
            onClick={() => handleAddToCart(data)}
            type="primary"
            className="w-full mt-10"
          >
            Store To Cart
          </Button>
        ) : (
          ""
        )}
      </div>
      <Link href="/cart">
        <Button type="dashed" className="h-12 w-full mt-10">
          Go To Cart
        </Button>
      </Link>
    </Drawer>
  );
};

export default CartDrawer;
