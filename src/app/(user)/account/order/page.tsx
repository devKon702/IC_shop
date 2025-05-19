import { sleep } from "@/utils/dev";
import React, { Suspense, use } from "react";

export default function OrderPage() {
  return (
    <div>
      Order Page
      <ExpensiveComponent></ExpensiveComponent>
    </div>
  );
}

function ParentComponent({ children }) {
  return <Suspense fallback={<div>Loading....</div>}>{children}</Suspense>;
}

function ExpensiveComponent() {
  use(sleep(2000));
  return <div>This is expensive component</div>;
}
