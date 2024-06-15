'use client'

import { addToCart } from "@/redux/feauter/cartSlice";
import { useAppDispatch } from "@/redux/store/store";

const item = {
  id: 'string',
  title: 'string',
  price: 0,
  count: 0,
  img: 'string',
} 

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <>
      <button type="button" onClick={()=>dispatch(addToCart(item))}>
        click me
      </button>
    </>
  );
}
