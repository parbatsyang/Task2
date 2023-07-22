import { setProductSearchText } from "@/app/store/Features/product/ProductSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store/Store";

const SearchProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex justify-center ">
      <input
        className="border border-red-500 h-[40px] w-[300px] rounded-lg mb-5"
        type="text"
        placeholder="  enter the product title"
        onChange={(e) => {
          dispatch(setProductSearchText(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchProduct;
