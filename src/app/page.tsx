import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tareabyte Monitor",
  description: "Monitoramento de dispositivos",
};

export default async function Page() {
  return <Home />;
}
