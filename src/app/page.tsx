import getDevices from "@/api/getDevices";
import getDevicesByType from "@/api/getDevicesByType";
import Card from "@/components/Card";
import Home from "@/components/Home";
import Info from "@/components/Info";
import useDeviceStore from "@/store/DevicesStore";
import Image from "next/image";
import { useState } from "react";

export default async function Page() {
  return <Home />;
}
