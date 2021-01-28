import { useEffect, useState } from "react";

const useQuizData = (playing) => {
  const [status, setStatus] = useState("fulfilled");
  const [data, setData] = useState([
    {
      lyrics: "ciao ciao ciao ciao",
      artists: ["io", "tu", "lei"],
    },
    {
      lyrics: "ciao ciao ciao ciao",
      artists: ["io", "tu", "lei"],
    },
    {
      lyrics: "ciao ciao ciao ciao",
      artists: ["io", "tu", "lei"],
    },
    {
      lyrics: "ciao ciao ciao ciao",
      artists: ["io", "tu", "lei"],
    },
  ]);

  useEffect(() => {
    if (playing) {
    }
  }, [playing]);

  return [status, data];
};

export default useQuizData;
