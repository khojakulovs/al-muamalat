// react-query
import { useMutation, useQuery } from "@tanstack/react-query";
import { IoLogoDesignernews } from "react-icons/io";

// services
import { request } from "../services/request";
// react
import { useRef, useState } from "react";
// styles
import { styles } from "../styles/style";
// components
import Loader from "../components/Loader";
import CourseCart from "../components/CoursesCart";

// assets
import user_icon from "../assets/user_icon.png";

// react-hot-toast
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // UseQuery
  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => request.get("/users/me").then((res) => res.data),
  });

  const { mutate } = useMutation({
    mutationFn: (payload) =>
      request.put(`/users/${userData?.data?.user_id}`, payload),
    onSuccess: (response) => {
      console.log(response);
      toast.success(response.message);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  if (isLoading) return <Loader />;
  if (error) toast.error(error.message);

  console.log(userData);

  const onSubmit = (data) => {
    const payload = {
      full_name: data.fullName,
      address: data.address,
      phone_number: data.number,
    };

    mutate(payload);

    reset();
  };

  return (
    <div className="custom-container min-h-screen py-8 px-4">
      <div className="w-full mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-6 py-2 ${styles.radiusBtn} ${styles.mainBackColor} border transition-all
              ${
                activeTab === "profile"
                  ? "bg-[#009688] text-white border-[#009688]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#009688] hover:text-[#009688]"
              }`}
          >
            Profile
          </button>

          <button
            onClick={() => setActiveTab("courses")}
            className={`px-6 py-2 ${styles.radiusBtn} ${styles.mainBackColor} border transition-all
              ${
                activeTab === "courses"
                  ? "bg-[#009688] text-white border-[#009688]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#009688] hover:text-[#009688]"
              }`}
          >
            Courses
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {/* Avatar + Name + Save */}
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="relative">
                  <div
                    className="w-[72px] h-[72px] rounded-full p-[2.5px]"
                    style={{
                      background: "linear-gradient(135deg, #a8d5c2, #009688)",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#e8f5f3] flex items-center justify-center">
                      <img
                        src={
                          userData?.data?.image_src
                            ? userData?.data?.image_src
                            : user_icon
                        }
                        alt="user"
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <p className="text-[18px] font-bold text-gray-900">
                    {userData?.data?.full_name}
                  </p>
                  <p className="text-[13px] text-gray-400 mt-0.5">
                    Update your profile info
                  </p>
                </div>
              </div>

              {/* Save */}
              <button
                onClick={() => formRef.current.requestSubmit()}
                className={`px-6 py-2 ${styles.radiusBtn} ${styles.mainBackColor} hover:bg-[#00796b] active:scale-95 text-white text-sm font-semibold px-7 py-2.5 transition-all duration-200 shadow-sm hover:shadow-md`}
              >
                Save
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-7" />

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-x-6 gap-y-5"
            >
              {/* First Name */}
              <div>
                <label className="block text-[13px] font-medium text-gray-500 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder="Your Full Name"
                  className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400
                       focus:outline-none ${styles.mainFocus} focus:ring-2 focus:ring-[#009688]/10 transition`}
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-[13px] font-medium text-gray-500 mb-1.5">
                  Address
                </label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Enter Your Address"
                  className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400
                       focus:outline-none ${styles.mainFocus} focus:ring-2 focus:ring-[#009688]/10 transition`}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[13px] font-medium text-gray-500 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  {...register("number", { required: true })}
                  className={`w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400
                       focus:outline-none ${styles.mainFocus} focus:ring-2 focus:ring-[#009688]/10 transition`}
                />
              </div>
            </form>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-20 gap-y-10">
            <CourseCart
              badge="Design"
              badgeType="design"
              bgColor="bg-[#FDDBC8]"
              rating={5}
              reviewCount={20}
              price={500}
              illustration={<IoLogoDesignernews />}
            />
            <CourseCart
              badge="Design"
              badgeType="design"
              bgColor="bg-[#FDDBC8]"
              rating={5}
              reviewCount={20}
              price={500}
              illustration={<IoLogoDesignernews />}
            />
            <CourseCart
              badge="Design"
              badgeType="design"
              bgColor="bg-[#FDDBC8]"
              rating={5}
              reviewCount={20}
              price={500}
              illustration={<IoLogoDesignernews />}
            />
            <CourseCart
              badge="Design"
              badgeType="design"
              bgColor="bg-[#FDDBC8]"
              rating={5}
              reviewCount={20}
              price={500}
              illustration={<IoLogoDesignernews />}
            />
            <CourseCart
              badge="Design"
              badgeType="design"
              bgColor="bg-[#FDDBC8]"
              rating={5}
              reviewCount={20}
              price={500}
              illustration={<IoLogoDesignernews />}
            />
            <CourseCart
              badge="Design"
              badgeType="design"
              bgColor="bg-[#FDDBC8]"
              rating={5}
              reviewCount={20}
              price={500}
              illustration={<IoLogoDesignernews />}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
