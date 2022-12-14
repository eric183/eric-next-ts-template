import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo } from "react";
import { ChangeEvent, useRef, useState } from "react";
import { fetchPosts, useData } from "../hooks";

type FormDataType = {
  title: string;
  name: string;
  date: string;
};

const LeftContent = (props: any) => {
  // const { data, isLoading, isFetching } = useData(10);
  const { data, status } = useQuery({
    queryKey: ["count"],
    queryFn: () => fetchPosts(),
  });

  // console.log(isFetching);
  // console.log(data);

  return (
    <section className="bg-slate-600 w-1/3">
      <ul>
        d
        {data?.data?.map((item: any) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <img
              src={item.imgSrc[0].img}
              alt={item.imgSrc[0].imgDesdcription}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

const RightContent = () => {
  // const { data, status, refetch } = useQuery({
  //   queryKey: ["count", "join"],
  //   queryFn: (d) => fetchPosts(d),
  // });

  return <section className="bg-yellow-600 w-1/3"></section>;
};

const MiddleContent = () => {
  const [page, setPage] = useState<number>(0);
  const ref = useRef(null!);
  const [formData, setData] = useState<FormDataType>({
    date: "",
    name: "",
    title: "",
  });
  const [inputdata, setInputData] = useState();
  const { data, status, refetch } = useQuery({
    queryKey: ["count", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,
  });

  //
  const goSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = accessFormData(ref.current);

    setData(accessFormData(ref.current));
    // console.log(formData);

    // refetch({
    //   refetchPage: () => true,
    // });

    setPage((old) => old + 1);
  };

  const accessFormData = (form: HTMLFormElement) => {
    const form_object: any = {};
    Array.from(form).forEach((item: any) => {
      if (item.tagName === "INPUT") {
        form_object[item.name] = item.value;
      }
    });

    return form_object;
  };

  const renderTest = useMemo(() => {
    return inputdata + "我是新内容";
  }, [inputdata]);

  return (
    <section className="bg-red-600 w-1/3">
      <form ref={ref} onSubmit={goSubmit} className="flex flex-col">
        <input
          className="my-3 w-1/2 mx-auto"
          type="text"
          name="title"
          onChange={(evt: any) => {
            setInputData(evt.target.value);
          }}
        />
        <input className="my-3 w-1/2 mx-auto" type="text" name="name" />
        <input className="my-3 w-1/2 mx-auto" type="text" name="date" />
        <button
          type="submit"
          value="Submit"
          className="bg-white w-1/2 mx-auto rounded-lg"
        >
          Submit {renderTest}
        </button>
      </form>

      <TestComponent data={formData} />

      <div className="button-group flex justify-evenly mt-3">
        <button
          className="px-5 py-3 bg-slate-600 rounded-lg mx-auo"
          onClick={() => setPage((old) => old - 1)}
        >
          previous
        </button>
        <button
          className="px-5 py-3 bg-slate-600 rounded-lg mx-auo"
          onClick={() => setPage((old) => old + 1)}
        >
          next
        </button>
      </div>
    </section>
  );
};

const TestComponent = React.memo<{ data?: FormDataType }>(
  ({ data }) => {
    console.log("haha111");

    return (
      <ul>
        <li>{data?.title}</li>
        <li>{data?.name}</li>
        <li>{data?.date}</li>
      </ul>
    );
  },
  (pre, next) => {
    if (JSON.stringify(pre) === JSON.stringify(next)) {
      console.log("无更新");
      return true;
    } else {
      console.log("有更新");
      return false;
    }
  }
);
TestComponent.displayName = "test-component";

export { RightContent, LeftContent, MiddleContent };
