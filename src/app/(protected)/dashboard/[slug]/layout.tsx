import React from "react";
type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};
const Layout = async ({ children, params }: Props) => {
  const { slug } = await params;
  console.log(slug);
  //Query
  //WIP Query client and fetch data
  return <div className="p-3 bg-blue-800">{children}</div>;
};

export default Layout;
