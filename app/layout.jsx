import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <Provider>
      <html>
        <body>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav></Nav>
            {children}
          </main>
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
