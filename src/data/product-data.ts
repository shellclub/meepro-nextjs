import axios from "axios";
import { useEffect, useState } from "react";

export const PRODUCTS: Product[] = [];

export interface Product {
  id: number;
  product_code: string;
  product_name: string;
  sku_id: string;
  variation_value: string;
  product_description: string
  price: number;
  main_image: string;
  seller_sku: string;
  parcel_weight: string;
  link: "/product-detail/";
  variants?: string[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  allOfDay?: string[];
  days?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  rating?: string;
  numberOfReviews?: number;
}


const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products") // เรียก API
      .then((res) => {
        setProducts(res.data); // เซ็ตข้อมูลที่ได้จาก API
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};

export default useProducts;