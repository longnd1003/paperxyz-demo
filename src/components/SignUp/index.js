import React from "react";
import { CreateWallet } from "@paperxyz/react-client-sdk";

export const SignUp = () => {
  return (
    <CreateWallet
      emailAddress="no-reply@paper.xyz"
      onEmailVerificationInitiated={() => {
        console.log("onEmailVerificationInitiated callback fired");
      }}
      onError={(error) => {
        console.log(error);
      }}
      onSuccess={(user) =>
        // note that user.accessCode will only be present if [clientId] is passed in.
        console.log(
          `${user.emailAddress} has created a new Paper Wallet: ${user.walletAddress} with accessCode: ${user.accessCode}`
        )
      }
    />
  );
};
