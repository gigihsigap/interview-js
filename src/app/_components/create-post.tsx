"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState<number | string>("");

  const createSegitiga = api.post.create.useMutation({
    onSuccess: () => {
      router.push('/segitiga');
      router.refresh();
    },
  });

  const createGanjil = api.post.create.useMutation({
    onSuccess: () => {
      router.push('/ganjil');
      router.refresh();
    },
  });

  const createGenap = api.post.create.useMutation({
    onSuccess: () => {
      router.push('/genap');
      router.refresh();
    },
  });

  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Must be a number"
        value={name}
        onChange={(e) => {
          setName(e.target.value) 
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
