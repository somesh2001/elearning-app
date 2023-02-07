import React from "react";
import HomeActivityCard from "../layout/HomeActivityCard";
<p dir="rtl" lang="ar">
  {" "}
  ي و ه ن م ل ك ق ف غ ع ظ ط ض ص ش س ز ر ذ د خ ح ج ث ت ب ا
</p>;
const Alphabates = [
  { letter: "خ", title: "Khaa" },
  { letter: "ح", title: "haa" },
  { letter: "ج", title: "jeem" },
  { letter: "ث", title: "thaa" },
  { letter: "ت", title: "taa" },
  { letter: "ب", title: "baa" },
  { letter: "ا", title: "Alif" },
  { letter: "س", title: "Saad" },
  { letter: "ش", title: "Sheen" },
  { letter: "ص", title: "Seen" },
  { letter: "ز", title: "Zai" },
  { letter: "ر", title: "Raa" },
  { letter: "ذ", title: "Dhaal" },
  { letter: "د", title: "dal" },
  { letter: "ق", title: "Qaaf" },
  { letter: "ف", title: "Faa" },
  { letter: "غ", title: "Ghayn" },
  { letter: "ع", title: "Ayn" },
  { letter: "ظ", title: "Dhaa" },
  { letter: "ط", title: "Taa" },
  { letter: "ض", title: "Daad" },
  { letter: "ي", title: "Yaa" },
  { letter: "و", title: "Waaw" },
  { letter: "ه", title: "haa" },
  { letter: "ن", title: "Noon" },
  { letter: "م", title: "Meem" },
  { letter: "ل", title: "Laam" },
  { letter: "ك", title: "Kaaf" },
];
const HomeActivity = () => {
  return (
    <>
      <div className=" text-center">
        <img src="" />
        <h2 className="text-2xl font-extrabold text-dark-purple mt-10 ">
          Module 1
        </h2>

        <h2 className=" text-2xl font-extrabold text-dark-purple border-b-2 border-b-gray-200 pb-4 mt-10">
          Arabic Letters
        </h2>
        <span className=" "></span>
      </div>
      <div className="">
        <div className="flex flex-wrap m-4 justify-center">
          {Alphabates.map((alphabate) => (
            <HomeActivityCard name={alphabate.letter} title={alphabate.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeActivity;
