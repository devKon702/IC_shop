import { sleep } from "@/utils/dev";
import React, { use } from "react";

export default function ManageUserPage() {
  use(sleep(2000));
  return <div>ManageUserPage</div>;
}
