'use client'

import { Rowdies } from "next/font/google";
import { useActionState } from "react";
import { initialFormData } from "./initialFormData";
import sendForm from "./services/sendForrm";


const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

const ApplicationForm = () => {
  const [state, formAction] = useActionState(sendForm, initialFormData);

  return (
    <form action={formAction} className="w-[350px] h-80 bg-black/75  rounded-xl p-4 flex flex-col justify-between sm:w-[500px]">
      <h3 className={`text-xl text-white text-center ${rowdies.className}`}>
        Оставьте заявку, и наши специалисты подберут для вас наилучший вариант.
      </h3>
      <input
        placeholder="ФИО"
        name="name"
        type="text"
        defaultValue={state.name}
        className="bg-white w-full text-black placeholder:text-gray-500 rounded-xl p-3 border-black border-2 outline-none"
        required
      />
    <input
       
        placeholder="+7 (___) ___-__-__"
        name="user_phone"
        type="tel"
        defaultValue={state.phoneNumber}
        pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
        maxLength={18}
        className="bg-white w-full text-black placeholder:text-gray-500 border-black border-2 rounded-xl p-3 outline-none"
        required
        />
      <button type="submit" className={`bg-white text-black rounded-xl p-3 hover:bg-blue-500 hover:text-white transition`}>
        Отправить
      </button>
    </form>
  );
};

export default ApplicationForm;
