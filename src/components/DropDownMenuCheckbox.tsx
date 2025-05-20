"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { ArrowDownUp, ChevronDown, X } from "lucide-react";

type Props = {
  heading: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
};

export function DropdownMenuCheckboxes({ heading, options, selected, setSelected }: Props) {

  return (
    <div className="flex flex-row items-center gap-3">
      {selected && heading !== "Sort" && (
        <span className="flex gap-1 items-center border-2 border-green-500 px-2 py-1 rounded-full text-xs font-md ">
          {selected}{" "}
          <X
            className="cursor-pointer"
            size={15}
            color="red"
            onClick={() => setSelected("")}
          />{" "}
        </span>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className=" flex gap-2 items-center cursor-pointer rounded-full border px-3 py-1.5">
            {heading === "Sort" && <ArrowDownUp size={17} />}
            {selected || heading}{" "}
            {heading !== "Sort" && <ChevronDown size={20} />}{" "}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={selected} onValueChange={setSelected}>
            {options.map((option) => (
              <DropdownMenuRadioItem key={option} value={option}>
                {option}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
