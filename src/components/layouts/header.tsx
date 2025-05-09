"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SearchInput from "@/components/common/search-input";
import React from "react";
import Link from "next/link";
import LoginForm from "@/components/forms/login-form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "@/components/forms/register-form";
import { ROUTE } from "@/constants/routes";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Header() {
  return (
    <div className="flex justify-around items-center p-3 space-x-40 bg-primary">
      <Link href="/">
        <Avatar className="size-10">
          <AvatarImage src="/uploads/ic.jpg"></AvatarImage>
        </Avatar>
      </Link>
      <SearchInput className="flex-1"></SearchInput>
      <div className="flex space-x-5">
        <Link href={ROUTE.cart} className="cursor-pointer text-center">
          <i className="bx bxs-cart text-4xl"></i>
          <p className="text-sm text-nowrap">Giỏ hàng</p>
        </Link>
        {/* <Dialog>
          <DialogTrigger>
            <div className="cursor-pointer text-center">
              <i className="bx bxs-user-circle text-4xl"></i>
              <p className="text-sm text-nowrap">Đăng nhập</p>
            </div>
          </DialogTrigger>
          <DialogContent className="max-h-11/12 overflow-y-scroll app">
            <Tabs defaultValue="login" className="">
              <TabsList className="grid grid-cols-2 w-full border-2 h-fit mb-2 mt-4 p-0">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black text-xl cursor-pointer rounded-none rounded-tl-sm rounded-bl-md transition-all duration-200"
                >
                  Đăng nhập
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black text-xl cursor-pointer rounded-none rounded-tr-sm rounded-br-md transition-all duration-200"
                >
                  Đăng ký
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="login"
                className="bg-white p-3 rounded-md shadow-xl"
              >
                <LoginForm></LoginForm>
              </TabsContent>
              <TabsContent
                value="register"
                className="bg-white p-3 rounded-md shadow-xl"
              >
                <RegisterForm></RegisterForm>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog> */}
        <HoverCard openDelay={0} closeDelay={20}>
          <HoverCardTrigger>
            <div className="cursor-pointer text-center">
              <i className="bx bxs-user-circle text-4xl"></i>
              <p className="text-sm text-nowrap">Nguyễn Kha</p>
            </div>
          </HoverCardTrigger>

          <HoverCardContent side="left">
            <ul>
              <Link href={ROUTE.userAccount}>Tài khoản của tôi</Link>
            </ul>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
