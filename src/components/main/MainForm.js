import { redirect } from "next/dist/server/api-utils";
import { useForm } from "react-hook-form";

export default function MainForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data = { data: data };
    let response = await fetch(
      process.env.NEXT_PUBLIC_DB_PROTOCOL +
        "://" +
        process.env.NEXT_PUBLIC_DB_HOST +
        ":" +
        process.env.NEXT_PUBLIC_DB_PORT +
        "/api/resps",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.log("Error");
    } else {
      alert("Ваша заявка успешно отправлена!");
    }

    console.log(response);

    reset();
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={
          "border-b-[#25252566] border-b-2 outline-none w-full focus:border-black transition-all pb-2 placeholder:text-[#25252566]"
        }
        style={errors.name ? { borderBottomColor: "red" } : {}}
        type="text"
        placeholder="Имя"
        {...register("name", { required: true })}
      />
      <input
        className="border-b-[#25252566] border-b-2 outline-none w-full focus:border-black transition-all pb-2 placeholder:text-[#25252566] mt-8"
        type="email"
        placeholder="example@mail.ru"
        style={errors.email ? { borderBottomColor: "red" } : {}}
        {...register("email", {
          required: true,
          pattern:
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        })}
      />
      <input
        className="border-b-[#25252566] border-b-2 outline-none w-full focus:border-black transition-all pb-2 placeholder:text-[#25252566] mt-8"
        type="tel"
        placeholder="+7 (999) 999-99-99"
        style={errors.phone ? { borderBottomColor: "red" } : {}}
        {...register("phone", {
          required: true,
          pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        })}
      />
      <div className="flex mt-6">
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          {...register("agreement", { required: true })}
        />
        <label className="text-sm ml-2">
          Согласен с политикой обработки персональных данных
        </label>
      </div>
      <div>
        {errors.name && <p className="text-[red] text-sm">Укажите Ваше имя</p>}
        {errors.email?.type === "required" && (
          <p className="text-[red] text-sm">Укажите Вашу почту</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="text-[red] text-sm">Укажите корректный e-mail</p>
        )}
        {errors.phone?.type === "required" && (
          <p className="text-[red] text-sm">Укажите Вашу номер телефона</p>
        )}
        {errors.phone?.type === "pattern" && (
          <p className="text-[red] text-sm">
            Укажите корректный номер телефона
          </p>
        )}
        {errors.agreement && (
          <p className="text-[red] text-sm">
            Необходимо подтвердить согласие на обработку перснальных данных
          </p>
        )}
      </div>
      <button className="w-full h-[52px] mt-6 text-white bg-green rounded-lg xl:mt-4 xl:w-[180px] xl:h-[40px]">
        Заказать проект
      </button>
    </form>
  );
}
