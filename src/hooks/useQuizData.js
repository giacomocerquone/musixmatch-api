import { useEffect, useState } from "react";

const useQuizData = (playing) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([
    {
      lyrics: "",
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
