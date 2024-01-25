"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState<number | string>("");

  const createSegitiga = api.post.create.useMutation({
    onSuccess: () => {
      setName("");
      router.push('/segitiga');
    },
  });

  const createGanjil = api.post.create.useMutation({
    onSuccess: () => {
      setName("");
      router.push('/ganjil');
    },
  });

  const createGenap = api.post.create.useMutation({
    onSuccess: () => {
      setName("");
      router.push('/genap');
    },
  });

  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        value={Number(name)}
        onChange={(e) => {
          setName(Number(e.target.value)) 
        }}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createSegitiga.isLoading}
        onClick={(e) => {
          e.preventDefault();
          createSegitiga.mutate({ name: Number(name) });
        }}
      >
        Generate Segitiga
      </button>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createGanjil.isLoading}
        onClick={(e) => {
          e.preventDefault();
          createGanjil.mutate({ name: Number(name) });
        }}
      >
        Generate Angka Ganjil
      </button>
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createGenap.isLoading}
        onClick={(e) => {
          e.preventDefault();
          createGenap.mutate({ name: Number(name) });
        }}
      >
        Generate Angka Genap
      </button>
    </form>
  );
}
