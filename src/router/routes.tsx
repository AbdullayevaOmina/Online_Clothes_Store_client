import { Products, Posts } from "@pages";

const router = [
  {
    path: "/products",
    element: <Products />,
    content: "Products",
  },
  {
    path: "/posts",
    element: <Posts />,
    content: "Posts",
  },
];

export default router;
