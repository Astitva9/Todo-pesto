import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>TODO | PESTO</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://use.fontawesome.com/aa610abe58.js"></script>
      </Head>

      <main>
        <div class="">
          <div class="">
            <div
              class=""
              aria-hidden="true"
            ></div>
            {children}
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
