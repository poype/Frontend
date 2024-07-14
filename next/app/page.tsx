import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* <a href="/users">Users</a> */}
      {/* use a tag for navigation will reload all resources, but we only want to download the resource of new page */}

      <Link href="/users">Users</Link>
      {/* only download the resource of users page, it will not redownload font, css... */}

      <ProductCard />
    </main>
  );
}
