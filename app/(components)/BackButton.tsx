import Link from "next/link";

import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid'

interface BackButtonProps {
  link: string;
}

export default function BackButton({ link }: BackButtonProps) {
  return (
  <Link href={link} className="flex justify-center my-2">
    <button className="w-full h-full bg-button py-0.5 pl-1 pr-3 border-b-4 border-button-dark flex justify-center items-center hover:bg-button-hover rounded">
      <ArrowSmallLeftIcon className="h-8 w-8 text-slate-200" />
      <span className="font-semibold">Back</span>
    </button>
  </Link>
  )
}