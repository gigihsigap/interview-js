import { unstable_noStore as noStore } from "next/cache";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Prima() {
  noStore();
  const {data, result} = await api.post.getPrima.query();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center from-[#2e026d] to-[#15162c] text-white">
      <span className="font-semibold">Angka prima: {data}</span>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <CreatePost />
        
      </div>
      <div>
        {result.map((i) => {
          return (
            <p key={i}>
              {i}
            </p>
          )
        })}
      </div>
    </main>
  );
}
