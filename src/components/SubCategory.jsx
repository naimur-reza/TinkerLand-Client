import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

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
    <div className="my-container py-10">
      <h1 className="text-center text-3xl  pb-5">Toys Category</h1>

      <Tabs value="html">
        <TabsHeader>
          {data?.map(({ label, value }, index) => (
            <Tab onClick={() => setActiveTab(label)} value={value} key={index}>
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
  );
}
