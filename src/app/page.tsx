import Image from "next/image";
import PingComponent from "./Ping";
import TaskTable from "@/ui/TaskTable";
import KanbanBoard from "@/ui/Kanban";
import ProductListPage from "@/ui/Kanban/List";
import LandingPage from "@/ui/Kanban/Landing";
import Header from "@/ui/Kanban/Menu";
import BlogPage from "@/ui/Kanban/Blog";
import BlogDetailPage from "@/ui/Kanban/BlogDetail";
import ContactPage from "@/ui/Kanban/Contact";
import AboutPage from "@/ui/Kanban/About";

export default function Home() {
  return (
    <>
      <Header />
      <AboutPage />
      {/* <ContactPage /> */}
      {/* <BlogDetailPage /> */}
      {/* <BlogPage /> */}
      {/* <LandingPage /> */}
      {/* <ProductListPage /> */}
      {/* <KanbanBoard /> */}
    </>
  );
}
