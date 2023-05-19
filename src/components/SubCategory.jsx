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
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
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
    fetch(`http://localhost:5000/subToys?sub=${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
    console.log(activeTab);
  }, [activeTab]);

  const handleSub = (e) => {};

  return (
    <div className="my-container py-10">
      <h1 className="text-center text-3xl  pb-5">Toys Category</h1>
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab onClick={() => setActiveTab(label)} value={value} key={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-col-1 lg:grid-cols-3">
          {toys.map((toy) => (
            <ToyCard toy={toy} />
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
