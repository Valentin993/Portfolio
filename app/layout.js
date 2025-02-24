import localFont from "next/font/local";
import "./globals.css";
import BackToTopButton from "./components/BackToTopButton";

const allertaStencil = localFont({
  src: [
    {
      path: "./fonts/AllertaStencil-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
});

const kayphodu = localFont({
  src: [
    {
      path: "./fonts/KayPhoDu-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/KayPhoDu-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/KayPhoDu-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "./fonts/KayPhoDu-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata = {
  title: "Valentin Maystorovski Portfolio",
  description: "Independent UX/UI Designer & Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${allertaStencil.variable} ${kayphodu.variable} antialiased`}
      >
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
