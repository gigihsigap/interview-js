import { unstable_noStore as noStore } from "next/cache";

import { CreatePost } from "~/app/_components/create-post";

export default function Home() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <span className="font-semibold">Enter a number:</span>
        <CreatePost />
      </div>
    </main>
  );
}
