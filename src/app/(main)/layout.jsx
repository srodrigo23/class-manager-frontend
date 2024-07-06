import { Inter } from "next/font/google";
import "../styles/globals.css";
import SideMenuBar from "../components/navigaton/sideMenuBar";
// import SideMenuBar from "./components/navigaton/sideMenuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Course Manager",
  description: "Aplication for Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full">
          <div className="flex-none ">
            <SideMenuBar/>
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
