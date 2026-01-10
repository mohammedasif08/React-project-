import React from "react";
import Header from "../../components/Header/header";
import Card from "../../components/Card/card";
import img1 from "../../components/Image/blog-1.webp";
import img2 from "../../components/Image/blog-2.webp";
import img3 from "../../components/Image/blog-3.webp";
import Grid from "@mui/material/Grid";
import { Link } from "react-router";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Contact from "../../components/Contact/Contact";
import Sayhi from "../../components/Sayhi/Sayhi";
import Bottom from "../../components/Bottom/Bottom";
import ProfileCard from "../../components/Profilecard/Profilecard";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT } from "../../reducers/actionItems";
import { DECREMENT } from "../../reducers/actionItems";
import { GETUSER } from "../../reducers/actionItems";
import { UPDATEUSER } from "../../reducers/actionItems";
function Home() {
  const Data = [
    {
      Home: "Home",
      About: "About Us",
      Contactus: "Contact Us",
      Docs: "Docs",
      login: "LOG IN",
    },
  ];

  const Data2 = [
    {
      img: img1,
      title: "Hydrogen-Powered Vehicles",
      description:
        "This article delves into the cutting-edge technology behind hydrogen fuel cells and their environmental benefits.",
    },
    {
      img: img2,
      title: "Mental Health in the Digital age",
      description:
        "This article explores the intricate relationship between social media usage and mental health",
    },
    {
      img: img3,
      title: "Mars Colonization and Beyond",
      description:
        "This article takes readers on a journey through the latest developments in space exploration.",
    },
    {
      isDiscovered: true,
    },
  ];
  const x = 10;
  const promise1 = new Promise((resolve, reject) => {
    if (x === 10) resolve("Promise 1 resolved successfully");
    reject("Promise 1 rejected (failure )");
  });
  useEffect(() => {
    promise1
      .then((val) => console.log(val))
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("Promise 1 settled (either resolved or rejected)");
      });
  });
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    console.log(scrollTop, "scrollTop");
    setIsScrolled(scrollTop > 10);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);
  console.log(counter, user, "counter", "user");

  return (
    <>
      <div>
        {Data.map((item, index) => (
          <Header
            isScrolled={isScrolled}
            key={index}
            Home={item.Home}
            About={item.About}
            Contactus={item.Contactus}
            Docs={<Link to="/Docs">{item.Docs}</Link>}
            login={
              <Link to="/Login">
                <Button>Login</Button>
              </Link>
            }
          />
        ))}
        <ProfileCard />
        <h1
          style={{
            textAlign: "left",
            fontSize: "30px",
            marginTop: "15px",
            marginLeft: "115px",
            paddingLeft: "25px",
            marginBottom: "-95px",
          }}
        >
          Check my latest blog posts
        </h1>
        <Grid container spacing={5} sx={{ padding: "100px" }}>
          {Data2.map((card, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }} key={index}>
              <Card
                Image={card.img}
                title={card.title}
                description={card.description}
                isDiscover={card.isDiscovered}
              />
            </Grid>
          ))}
        </Grid>
        <Sayhi />
        <Contact />
        <Bottom />
      </div>
      <div>
        <h2>Counter: {counter.count}</h2>
        <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      </div>
      <div>
        <h3>
          User: {user.user}, Age: {user.age}, Email: {user.email}
        </h3>
        <Button onClick={() => dispatch({ type: GETUSER })}>GETUSER</Button>
        <Button onClick={() => dispatch({ type: UPDATEUSER })}>
          UPDATEUSER
        </Button>
      </div>
    </>
  );
}
export default Home;