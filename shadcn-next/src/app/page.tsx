import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home()
{
  return (
    <main className="h-full flex flex-col items-center justify-between">

      <button className="px-6 py-2 bg-blue-500 rounded my-3 hover:bg-blue-700">This is a normal button</button>
      <Button>This is shadcn button</Button>
      <Button variant={"outline"}>This is shadcn button</Button>
      <Button variant={"destructive"}>This is shadcn button</Button>
      <Button variant={"pk"}>This is shadcn button</Button>
    </main>
  );
}
