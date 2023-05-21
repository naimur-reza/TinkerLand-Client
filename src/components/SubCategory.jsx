import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ToyCard from "./ToyCard";
export default function SubCategory() {
  const [toys, setToys] = useState();
  const [activeTab, setActiveTab] = useState("Avengers");
  const data = [
    {
      label: "Avengers",
      value: "avengers",
    },
    {
      label: "DC",
      value: "dc",
    },
    {
      label: "Marvel",
      value: "marvel",
    },
  ];

  useEffect(() => {
    fetch(`https://toys-server-chi.vercel.app/subToys?sub=${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-t from-black via-red-900 to-black">
      <div className="my-container py-10">
        <h1 className="text-center font-bold text-3xl text-gray-200   py-8">
          Shop By <span className="text-orange-600 ">Category</span>
        </h1>

        <Tabs value="html">
          <TabsHeader>
            {data?.map(({ label, value }, index) => (
              <Tab
                onClick={() => setActiveTab(label)}
                value={value}
                key={index}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            className="grid grid-col-1 lg:grid-cols-3 gap-7 py-5"
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}>
            {toys?.map((toy, index) => (
              <ToyCard key={index} toy={toy} value={toy.sub_category} />
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
