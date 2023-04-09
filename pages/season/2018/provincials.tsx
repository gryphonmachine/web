import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import { useEffect, useState } from "react";

export default function Season2023() {
  const [qualData, setQualData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playoffData, setPlayoffData] = useState<any>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/2018/provincials?type=Qualification")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setQualData(data);
      });

      fetch("/api/2018/provincials?type=Playoff")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPlayoffData(data);
      });
  }, []);

  return (
    <>
      <Header
        title="FIRST Ontario Provincial Championship"
        subtitle="2018 Season [Technology Division] - FIRST Power Up"
      />

      <Season className="w-[350px]">
        <Title className="mt-[-30px]">Qualification Matches</Title>
        <EventData data={qualData} isLoading={isLoading} />

        <Title className="mt-10">Playoff Matches</Title>
        <EventData data={playoffData} isLoading={isLoading} />
      </Season>

      <Footer />
    </>
  );
}