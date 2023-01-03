import "./App.css";
import { SignUp } from "./components/SignUp";
import { PaperSDKProvider } from "@paperxyz/react-client-sdk";
import { Login } from "./components/Login";

function App() {
  return (
    <PaperSDKProvider
      chainName="Polygon"
      clientId="4c3ba2d9-4e73-45c4-824f-e903765f810a"
    >
      <Login />
      <SignUp />
    </PaperSDKProvider>
  );
}

export default App;
