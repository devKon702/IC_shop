import { sleep } from "@/utils/dev";
import React, { use } from "react";

export default function OrderPage() {
  use(sleep(2000));
  return <div>Order Page</div>;
}
