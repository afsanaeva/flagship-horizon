"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "@formspree/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const InputGroup = ({ label, children, name }) => {
  return (
    <div className="space-y-2 tracking-wide 3xl:space-y-3">
      <label htmlFor={name} className="font-20px">
        {label}
      </label>

      {children}
    </div>
  );
};
const Contact = () => {
  const [state, handleSubmit] = useForm("mqkogdwj");
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      console.log("state.succeeded", state.succeeded);

      router.push("/thank-you");
    }
  }, [router, state.succeeded]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 lg:gap-7 3xl:gap-10">
        <div className="grid w-full gap-x-4 gap-y-6 md:grid-cols-2  3xl:gap-10">
          <InputGroup name="name" label={"Full Name*"}>
            <Input type="text" name="name" required />
          </InputGroup>

          <InputGroup name="company" label={"Your Company*"}>
            <Input type="text" name="company" required />
          </InputGroup>

          <InputGroup name="email" label={"Business Email*"}>
            <Input type="text" name="email" required />
          </InputGroup>

          <InputGroup name="phone" label={"Phone*"}>
            <Input type="text" name="phone" required />
          </InputGroup>
        </div>

        <InputGroup
          name="message"
          label={"Send Us a Message (Optional)"}
        >
          <Textarea type="text" name="message" />
        </InputGroup>

        <Button size="lg" disabled={state.submitting} className="ml-auto w-fit">
          {state.submitting && (
            <div className="absolute left-0 ml-5 size-3 rounded-[50%] group-hover:border-white group-hover:border-t-[#ffffff85] lg:ml-3 lg:size-4 3xl:ml-4 3xl:size-[18px]" />
          )}
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Contact;
