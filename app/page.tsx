import Article from "./components/Article/Article";
import Banner from "./components/Banner";
import BigStories from "./components/BigStories/BigStories";
import Featured from "./components/Featured/Featured";
import News from "./components/News/News";
import { getData } from "./server action/api";

export default async function Home() {
  const data = await getData()
  const links = ['All News', 'Admission Alert', 'College News', 'Exam News', 'Latest News']

  return (
    <>
      <main className="py-10 max-width">
        <div className="flex justify-between items-center">
          <Banner />
          <ul className=' text-[#464646]  gap-2 text-xs hidden lg:flex'>
            {
              links.map(link =>
                <li
                  key={link}
                  className={`p-2 cursor-pointer bg-white hover:bg-[#F3F3F3] border-[1px] border-[#3A3A3A]/10 rounded`}
                >
                  {link}
                </li>)
            }
          </ul>
        </div>
        <div className="grid lg:grid-cols-3 px-4 pt-10 gap-10">
          <Article />
          <BigStories title="The Big Stories" data={data.results} />
        </div>
        <Featured data={data.results} />
      </main>
      <News data={data.results} />
    </>
  );
}
