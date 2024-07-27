import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg"
// import image just like import ts/js code file

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* <a href="/users">Users</a> */}
      {/* use a tag for navigation will reload all resources, but we only want to download the resource of new page */}

      <Link href="/users">Users</Link>
      {/* only download the resource of users page, it will not redownload font, css... */}

      <ProductCard />
      {/* Image component will use webp type to replace original image type for compressing size of image automatically */}
      <Image src={coffee} alt="Coffee" width={300} height={170} className="mt-5"/>
    </main>
  );
}
