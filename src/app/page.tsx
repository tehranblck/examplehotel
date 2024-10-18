import { GetServerSideProps } from "next";

// Sayfa bileşeni
export default function Home({ content }: { content: string }) {
  return (
    <>
      {content}
    </>
  );
}

// getServerSideProps fonksiyonu, sunucu tarafında çalışacak
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Sunucu tarafında "home" verisini sağlayabiliriz
  const content = "home";

  return {
    props: {
      content, // Sayfaya "home" içeriğini gönder
    },
  };
};
