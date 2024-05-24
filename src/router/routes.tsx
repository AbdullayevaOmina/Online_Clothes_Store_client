import { Products, Posts } from "@pages";

const router = [
  {
    path: "/main/products",
    element: <Products />,
    content:"Products",
  },
  {
    path: "/main/posts",
    element: <Posts />,
    content:"Posts",
  },
];

export default router;