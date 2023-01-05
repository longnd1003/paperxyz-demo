import "./App.css";
import { PaperSDKProvider } from "@paperxyz/react-client-sdk";
import { Form } from "./components/Form";
import { CLIENT_ID } from "./common/constants";

function App() {
  return (
    <PaperSDKProvider chainName="Polygon" clientId={CLIENT_ID}>
      <Form />
    </PaperSDKProvider>
  );
}

export default App;
