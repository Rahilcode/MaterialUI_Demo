import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import CardNew from "./CardNew";
import axios from "axios";

//mock.js
const cardData = [
  {
    title: "card title",
    buttonName: "Down",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "Up",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "Left",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "right",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "right",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "right",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "right",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "right",
    description: "this is an infinite scroll",
  },
  {
    title: "card title",
    buttonName: "right",
    description: "this is an infinite scroll",
  },
];
let page = 1;
export default function ScrollCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
        )
        .then((res) => {
          setData([...data, ...res.data]);
          page = page + 1;
        });
    };
    fetchData();
  }, []);

  const loading = async () => {
    const fetchData = () => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
        )
        .then((res) => {
          setData([...data, ...res.data]);
          page = page + 1;
        });
    };
    fetchData();
  };

  return (
    <div>
      <InfiniteScroll //new
        pageStart={0}
        loadMore={loading}
        hasMore={true || false}
        loader={
          <h2
            style={{ backgroundColor: "green", color: "white" }}
            className="loader"
            key={0}
          >
            Loading ...
          </h2>
        }
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "0.2rem",
          }}
        >
          {data.map((data, index) => (
            <div key={index}>
              <CardNew
                image="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg"
                title={data.title}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
