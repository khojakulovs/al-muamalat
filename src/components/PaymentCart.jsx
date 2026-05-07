import { useForm } from "react-hook-form";
import { styles } from "../styles/style";
import { useMutation } from "@tanstack/react-query";
import { request } from "../services/request";

const services = [
  {
    title: "Space for creative ideas",
    desc: "Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision and ideas into reality.",
  },
  {
    title: "Engaging and fun curriculum",
    desc: "Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts thoroughly.",
  },
  {
    title: "Professional teaching methods",
    desc: "We professionals at Cyber Square have developed an in-depth understanding in how to teach kids and how to code, exposing kids to real programming languages.",
  },
];

const benefits = [
  "Space for creative ideas",
  "Engaging and fun curriculum",
  "Professional teaching methods",
  "Learn from AI & Data Science experts",
  "Courses by IIT, NIT, and IIM alumni",
  "UK certification upon completion",
  "Personalized one-to-one training",
];

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" stroke="#5DCAA5" strokeWidth="1" />
    <polyline
      points="6,10 9,13 14,7"
      stroke="#5DCAA5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function PaymentCart({ userId, courseId }) {
  const { handleSubmit } = useForm();

  //useMutation
  const { mutate, isPending } = useMutation({
    mutationKey: ["payment"],
    mutationFn: async (payload) => {
      const orderRes = await request.post("/courses/user", payload);
      const orderId = orderRes?.data?.data.id;

      if (!orderId) throw new Error("Order ID topilmadi");

      const purchaseRes = await request.get(`/courses/purchase/${orderId}`);
      const url = purchaseRes?.data?.data?.data; // URL qaytadi

      return url;
    },

    onSuccess: (url) => {
      if (url) window.open(url, "_blank");
    },

    onError: (err) => {
      console.error("To'lov xatosi:", err);
    },
  });

  //onSubmit
  const onSubmit = () => {
    const submitData = {
      course_id: courseId,
      user_id: userId,
    };

    mutate(submitData);
  };

  return (
    <section className="py-16 px-0 md:px-5">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-200 shadow-md">
        {/* Chap — Our Services */}
        <div className={`${styles.mainBackColor} p-10 flex-1`}>
          <h2 className="text-2xl font-semibold text-[#E1F5EE] mb-8">
            Our Services
          </h2>
          <div className="flex flex-col gap-7">
            {services.map((s, i) => (
              <div key={i} className="flex gap-3">
                <CheckIcon />
                <div>
                  <p className="text-[#E1F5EE] font-semibold text-sm mb-1">
                    {s.title}
                  </p>
                  <p className="text-[#9FE1CB] text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* O'ng — Payment */}
        <div className="bg-white p-10 flex flex-1 flex-col">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Payment</h2>
          <ul className="flex-1 flex flex-col divide-y divide-gray-100 mb-8">
            {benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 py-2.5 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F6E56] flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isPending}
            className={`w-full py-3.5 ${styles.mainBackColor} ${styles.hover} 
    text-[#E1F5EE] font-medium rounded-xl transition-colors duration-150
    disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {isPending ? "Yuklanmoqda..." : "Purchase Now"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PaymentCart;
