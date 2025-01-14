import { NoSymbolIcon, CheckIcon } from "@heroicons/react/24/outline";
import NcInputNumber from "@/components/NcInputNumber";
import Prices from "@/components/Prices";
import { Product, PRODUCTS } from "@/data/data";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";
import HeaderTabNav from "@/components/HeaderTabNav";


const CartPage = () => {
  return (
    <div className="nc-CartPage">
      <main className="container py-5 lg:pb-28 lg:pt-20 ">
        <div className="mb-12 sm:mb-16">
          <h2 className="block text-2xl sm:text-3xl mb-5 lg:text-4xl font-semibold ">
            คำสั่งขาย
          </h2>
          
        <HeaderTabNav />
    
        </div>

        <hr className="border-slate-200 dark:border-slate-700 my-5 xl:my-12" />


      </main>
    </div>
  );
};

export default CartPage;
