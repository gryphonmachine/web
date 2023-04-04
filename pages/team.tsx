import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { TeamList } from "@/lib/TeamList";
import { Tooltip } from "@nextui-org/react";

const TeamMember = (props: any) => {
  return (
    <Image
      className="rounded-full"
      src={props.src}
      alt={props.name}
      width={60}
      height={60}
      priority={true}
    />
  );
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col px-4 mt-16 mb-8">
        <p className="h text-center text-5xl font-bold text-primary">
          Mentors & Captains
        </p>
        <p className="text-center text-xl text-gray-400 py-3">
          We have a lot of dedicated members at 6070. Ranging from captains,{" "}
          <br />
          mentors, and general members. We'd like to recognize them.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg w-[800px] px-10">
          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Mentors
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4 mb-10`}
          >
            {TeamList.mentors.map((member) => (
              <Tooltip content={member.name}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>

          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Build Team
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4 mb-10`}
          >
            {TeamList.build.map((member) => (
              <Tooltip content={member.name}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>

          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Progamming Team
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4 mb-10`}
          >
            {TeamList.programming.map((member) => (
              <Tooltip content={member.name}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>

          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Design Team
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4 mb-10`}
          >
            {TeamList.design.map((member) => (
              <Tooltip content={member.name}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>

          <h1 className="text-secondary text-2xl font-bold text-center mb-5">
            Outreach Team
          </h1>
          <div
            className={`rounded-lg flex flex-row items-center justify-center space-x-4`}
          >
            {TeamList.outreach.map((member) => (
              <Tooltip content={member.name}>
                <TeamMember src={member.img} name={member.name} />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
