import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:naderelhaj3@gmail?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="  h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pb-20  ">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        CONTACT
      </h3>
      <div className="flex flex-col space-y-6 mt-60 lg:mt-28">
        <h4 className="text-2xl md:text-4xl font-semibold text-center w-screen mx-auto">
          I have got what you need,
          <span className="decoration-[#f7ab0a] underline">Lets Talk.</span>
        </h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 text-[#f7ab0a] " />
            <p className="text-xl md:2xl">+216 52 241 103</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#f7ab0a] " />
            <p className="text-xl md:2xl">naderelhaj3@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="h-7 w-7 text-[#f7ab0a] " />
            <p className="text-xl md:2xl">Sahloul , Sousse</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              className="contact-input"
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="contact-input"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <input
            className="contact-input"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="contact-input"
            placeholder="Message"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
