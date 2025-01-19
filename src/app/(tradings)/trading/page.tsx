
import HeaderTabNav from "@/components/HeaderTabNav";
import { findAllProduct } from "../services/product-service";
import { Container } from "@mui/material";


const  CartPage = async () => {

  const products = await findAllProduct()

  return (
    <div className="nc-CartPage">
      <main className="container py-5 lg:pb-28 lg:pt-20 ">
        <div className="mb-12 sm:mb-16">
          <h2 className="block text-2xl sm:text-3xl mb-5 lg:text-4xl font-semibold ">
            คำสั่งขาย
          </h2>
          <Container>
            <p>{JSON.stringify(products)}</p>
          </Container>
          
        <HeaderTabNav />
    
        </div>

        <hr className="border-slate-200 dark:border-slate-700 my-5 xl:my-12" />

        <div className="flex-1">
            <div className="sticky top-20">
              <div className="mt-7 text-sm text-slate-500 dark:text-slate-400 divide-y divide-slate-200/70 dark:divide-slate-700/80">
                <div className="flex justify-between pb-4">
                  <span>ชื่อสินค้า</span>
                  <span>จำนวน</span>
                  <span>ราคาตั้งขาย</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    สถานะ
                  </span>
                </div>
                <div className="flex justify-between py-4">
                <span>Pramy Supreme</span>
                <span>29 กระสอบ</span>
                <span>2500</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Pending
                  </span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Shpping estimate</span>
                <span>29 กระสอบ</span>
                <span>2500</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Pending
                  </span>
                </div>
                <div className="flex justify-between py-4">
                  <span>Tax estimate</span>
                  <span> 5 ถุง</span>
                <span>2500</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Pending
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
                  <span>Order total</span>
                  <span>$276.00</span>
                </div>
              </div>
            
              <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
                <p className="block relative pl-5">
                  <svg
                    className="w-4 h-4 absolute -left-1 top-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9945 16H12.0035"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Learn more{` `}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="##"
                    className="text-slate-900 dark:text-slate-200 underline font-medium"
                  >
                    Taxes
                  </a>
                  <span>
                    {` `}and{` `}
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="##"
                    className="text-slate-900 dark:text-slate-200 underline font-medium"
                  >
                    Shipping
                  </a>
                  {` `} infomation
                </p>
              </div>
            </div>
          </div>



      </main>
    </div>
  );
};

export default  CartPage;
