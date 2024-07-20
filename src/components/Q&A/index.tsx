import { QAndAs } from "@/constants";
import React from "react";
import QAndA from "./QAndA";
import Button from "../elements/button";
import Image from "next/image";
import { EnterIcon, SendIcon } from "@/assets/icons";

const QAndASection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-10">
      <div className="w-full md:w-1/2 lg:max-w-[20rem] flex flex-col items-center md:items-start text-center md:text-start">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light !leading-normal">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <p className="mt-3 text-gray-500 text-sm max-w-[22rem] !leading-relaxed">
          This resource contains all viewports versions for a landing page
          template based on components.
        </p>

        <Button
          href="/support"
          className="mt-10 py-4 flex items-center justify-center gap-x-4"
        >
          <Image src={EnterIcon} alt="send" className="pointer-events-none" />

          <span className="font-medium">Ask Yours</span>
        </Button>
      </div>

      <QAndA />
    </section>
  );
};

export default QAndASection;