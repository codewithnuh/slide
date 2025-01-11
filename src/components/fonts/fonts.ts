import localFont from "next/font/local";
export const poppins = localFont({
  src: [
    {
      path: "./Poppins-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Poppins-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Poppins-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Poppins-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});
