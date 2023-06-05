import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  redirect,
} from "react-router-dom";
import Layout from "./../pages/Layout/Layout";
import Home from "./../pages/Home/Home";
import Blogs from "./../pages/Blogs/Blogs";
import Contact from "./../pages/Contacts/Contacts";
import NoPage from "./../pages/NoPage/NoPage";
import { PublicRoute } from "./routes";

export const AppRouter = (props) => {
  return (
    <Router basename="/talent">
      {/* <Suspense fallback={<Loader />}> */}
      <div className="content-wrap">
        <div
          className="headerSpaceRouter"
          // className={` ${
          //   !id || WizardFlow <= 5 || emailVerified
          //     ? "headerSpaceRouter"
          //     : "headerSpaceRouter-the-drop"
          // }`}
        >
          {/* {!emailVerified && id && WizardFlow > 5 && <EmailVerification />} */}
          {/* <Header
          changeStage={props.shareStage}
          stage={props.stage}
          id={id}
          emailVerified={emailVerified}
          WizardFlow={WizardFlow}
          EmailVerification={EmailVerification}
        /> */}
          <Routes>
            {/* <PublicRoute exact path="/">
          <Home />
        </PublicRoute> */}
            <PublicRoute exact path="/Home">
              <Home />
            </PublicRoute>
            <PublicRoute exact path="/blogs">
              <Blogs />
            </PublicRoute>
            <PublicRoute exact path="/layout">
              <Layout />
            </PublicRoute>
            <PublicRoute exact path="/contact">
              <Contact />
            </PublicRoute>
            <PublicRoute exact path="/nopage">
              <NoPage />
            </PublicRoute>
            <redirect to="/" />
          </Routes>
        </div>
      </div>
      {/* {window.location.pathname !== "/talent/messages" && <Footer />} */}
      {/* </Suspense> */}
    </Router>
  );
};
