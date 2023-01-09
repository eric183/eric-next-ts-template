import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (limit = 10) => {
  console.log(limit, "....");
  const options = {
    method: "GET",
    url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API!,
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
    },
  };

  const parsed = await fetch(options.url, {
    headers: options.headers,
  });
  const result = parsed.json();
  // const result = parsed.filter((x) => x.id <= limit)
  return result;
};

const useData = async (limit?: number) => {
  return useQuery(["posts", limit], await fetchPosts(limit));
};

export { useData, fetchPosts };
