import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import TodoList from "../components/TodoList";
export default function Home() {
  return (
        <Layout>
          <TodoList/>
          <Sidebar/>
        </Layout>
  );
}
