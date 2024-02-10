import React from 'react';

const Home = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        {props.name}
      </h1>
      <p>
        {props.paragraph}
      </p>
    </div>
  );
};

const Parent = () => {
  const name = "Welcome to BuildMastersHub!";
  const paragraph =
    "BuildMastersHub is more than just a digital platform, it's a dynamic web application designed to revolutionize the construction industry. At its core, this innovative project seeks to empower skilled construction workers and foremen by providing them with a robust space to not only exhibit their expertise but also forge meaningful connections with prospective clients.";

  return <Home name={name} paragraph={paragraph} />;
};

export default Parent;
