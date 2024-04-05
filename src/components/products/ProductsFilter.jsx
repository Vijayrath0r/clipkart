import { MdOutlineStar } from "react-icons/md";
const ProductsFilter = () => {
  return (
    <div>
      <div className="font-medium p-5">Filters</div>
      <hr />
      <div className="font-medium p-5">
        <div>price</div>
        <div>
          <input type="range" className="w-full my-3" />
          <div className="flex justify-between my-5">
            <select name="minrange" id="minrange">
              <option value="min">min</option>
              <option value="5000">5000</option>
              <option value="10000">10000</option>
              <option value="15000">15000</option>
            </select>
            <span>To</span>
            <select name="maxrange" id="maxrange">
              <option value="max">max</option>
              <option value="5000">5000</option>
              <option value="10000">10000</option>
              <option value="15000">15000</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <div className="font-medium">Brand</div>
        <div className="px-2">
          <div className="my-1">
            <input type="checkbox" name="brand1" id="brand1" />
            <label className="ml-2 text-gray-500" htmlFor="brand1">
              Brand Name 1
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="brand2" id="brand2" />
            <label className="ml-2 text-gray-500" htmlFor="brand2">
              Brand Name 2
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="brand3" id="brand3" />
            <label className="ml-2 text-gray-500" htmlFor="brand3">
              Brand Name 3
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <div className="font-medium">Discount</div>
        <div className="px-2">
          <div className="my-1">
            <input type="checkbox" name="discount5" id="discount5" />
            <label className="ml-2 text-gray-500" htmlFor="discount5">
              50% or more
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="discount4" id="discount4" />
            <label className="ml-2 text-gray-500" htmlFor="discount4">
              40% or more
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="discount3" id="discount3" />
            <label className="ml-2 text-gray-500" htmlFor="discount3">
              30% or more
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="discount2" id="discount2" />
            <label className="ml-2 text-gray-500" htmlFor="discount2">
              20% or more
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="discount1" id="discount1" />
            <label className="ml-2 text-gray-500" htmlFor="discount1">
              10% or more
            </label>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="font-medium">Rating</div>
        <div className="px-2">
          <div className="my-1">
            <input type="checkbox" name="rating5" id="rating5" />
            <label className="ml-2 text-gray-500" htmlFor="rating5">
              5<MdOutlineStar style={{ display: "inline" }} /> or more
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="rating4" id="rating4" />
            <label className="ml-2 text-gray-500" htmlFor="rating4">
              4<MdOutlineStar style={{ display: "inline" }} /> or more
            </label>
          </div>
          <div className="my-1">
            <input type="checkbox" name="rating3" id="rating3" />
            <label className="ml-2 text-gray-500" htmlFor="rating3">
              3<MdOutlineStar style={{ display: "inline" }} /> or more
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
