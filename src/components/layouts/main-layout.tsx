import AuthModal from "@/components/features/auth/auth-modal";
import FloatButton from "@/components/features/contact/float-button";
import CategoryBar from "@/components/layouts/category-bar";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { mockProductCatergory } from "@/constants/mock-data";
import { GlobalProvider } from "@/libs/contexts/GlobalContext";
import React, { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <GlobalProvider>
      <>
        <Header></Header>
        <CategoryBar categories={mockProductCatergory}></CategoryBar>
        <div className="mx-24 py-4">{children}</div>
        <Footer></Footer>
        <FloatButton></FloatButton>
        <AuthModal></AuthModal>
      </>
    </GlobalProvider>
  );
}
