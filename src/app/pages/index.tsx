// pages/index.tsx

import { GetServerSideProps } from "next";

type Props = {
  content: string;
};

const HomePage = ({ content }: Props) => {
  return <h1>{content}</h1>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      content: "home", // Sunucuda render edilecek içerik
    },
  };
};

export default HomePage;
