import Article from "./components/Article/Article";
import Banner from "./components/Banner";
import Featured from "./components/Featured/Featured";
import { getData } from "./server action/api";

export default async function Home() {
  // const data = await getData()
  // console.log(data)

  return (
    <main className="py-10">
      <Banner />
      <div className="grid grid-cols-3 px-4 pt-10">
        <Article
          image="https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?t=st=1717138167~exp=1717141767~hmac=d7d68576586409d820641234a0ed9f48d4e824c5946913d1687aef07db83ae23&w=1380"
          title="Chitkara University MBA Admission Open; Check Direct List..."
          time="20 Sep 2023, 8:00pm"
          content="New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued the admit cards for the MArch, MHMCT, BEd, MEd, and MPEd Courses on February 27, 2024. To download the document"
        />
      </div>
      {/* <Featured /> */}

    </main>
  );
}
