import React from "react";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Category from "../Category/Category";
// import SubscriptionCard from "../SubscriptionCard/Trending";
import Trending from "../SubscriptionCard/Trending";

const Home = () => {
  const trending = [
    {
      id: 1,
      title: "Mini drone",
      description: "This drone can fly",
      price: "500",
    },
    {
      id: 2,
      title: "Police car",
      description: "It is Remote control",
      price: "300",
    },
    {
      id: 3,
      title: "Mini robot",
      description: "It is a taking robot",
      price: "1000",
    },
  ];
  return (
    <div className="mb-4">
      <Banner></Banner>
      <Feature></Feature>
      <Category></Category>
      {/* <SubscriptionCard subscriptions={subscriptions}></SubscriptionCard> */}
      <Trending trendings={trending}></Trending>
    </div>
  );
};

export default Home;
