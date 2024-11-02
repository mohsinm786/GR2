import { TeamMember } from "@/types/team";
import Image from "next/image";
import "./SingleBlog.css";

const SingleBlog = ({ member }: { member: TeamMember }) => {
  const { title, image, jobRole } = member;

  return (
    <div className="leadership_card rounded-lg shadow-lg bg-white overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="child_1  p-4 flex justify-center">
        <Image style={{ objectFit: "cover" }} className="leader_img" src={image} alt={title} width={200} height={200} />
      </div>
      <div className="child_2 p-6 text-center">
        <h1 className="text-2xl text-blue-900 font-bold transition duration-300 hover:text-blue-700 text-center truncate">{title}</h1>
        <h5 className="text-lg font-medium text-gray-600 text-center truncate">{jobRole}</h5>
      </div>
    </div>
  );
};

export default SingleBlog;
