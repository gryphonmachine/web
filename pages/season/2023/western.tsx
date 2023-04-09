import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";

export default function Western2023({ qualData, playoffData }: any) {
  return (
    <>
      <Header
        title="Western University Event"
        subtitle="2023 Season - Charged Up presented by Haas"
      />

      <Season className="w-[350px]">
        <Title className="mt-[-30px]">Qualification Matches</Title>
        <EventData data={qualData} />

        <Title className="mt-10">Playoff Matches</Title>
        <EventData data={playoffData} />
      </Season>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const qualData = await fetch(`${API_URL}/api/2023/western`).then((res) =>
    res.json()
  );
  const playoffData = await fetch(
    `${API_URL}/api/2023/western?type=Playoff`
  ).then((res) => res.json());

  return { props: { qualData, playoffData } };
};
