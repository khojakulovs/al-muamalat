import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { request } from "../services/request";
import { Loader, ProgramInfo, BrefAbout, PaymentCart } from "../components";

function Programs() {
  const { courseId } = useParams();

  const { data: coursesData, isLoading } = useQuery({
    queryKey: ["courses-data"],
    queryFn: () => request.get("/courses/main").then((res) => res.data),
  });

  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => request.get("/users/me").then((res) => res.data),
  });

  if (isLoading || userLoading) return <Loader />;

  const userId = userData?.data.user_id;

  const selectedCourse = coursesData?.data?.find(
    (course) => String(course?.course_id) === String(courseId),
  );

  console.log("selectedCourse", selectedCourse);
  console.log(
    "course_id:",
    selectedCourse?.course_id,
    typeof selectedCourse?.course_id,
  );

  return (
    <section className="custom-container min-h-screen py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {selectedCourse?.name_uz}
      </h2>

      {selectedCourse?.description_uz && (
        <div
          className="prose prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-gray-800
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-li:text-gray-600
          prose-strong:text-gray-800"
          dangerouslySetInnerHTML={{
            __html: selectedCourse.description_uz
              .replace(/\\n/g, "")
              .replace(/\\'/g, '"'),
          }}
        />
      )}

      {/* Cartlar */}
      <ProgramInfo />
      <BrefAbout />
      <PaymentCart userId={userId} courseId={selectedCourse?.course_id} />
    </section>
  );
}

export default Programs;
