import { CreateWallet, LoginWithPaper } from "@paperxyz/react-client-sdk";
import React, { useRef } from "react";
import { fetchUserDetails, fetchUserToken } from "../../common/utils";

export const Form = () => {
  const emailRef = useRef();

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-auto"
            src="https://paper.xyz/icons/paper-logo-icon.svg"
            alt=""
          />
          <img
            className="w-auto"
            src="https://paper.xyz/icons/paper-text-light.svg"
            alt=""
          />
          <span className="mb-3 text-center text-2xl text-[#313131] font-normal">
            Demo
          </span>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex flex-col gap-6">
            <LoginWithPaper
              className="flex justify-center"
              onSuccess={async (code) => {
                const userToken = await fetchUserToken(code);
                const userDetails = await fetchUserDetails(userToken);

                console.log(userDetails);
              }}
            />
            <div className="text-center text-2xl">- or -</div>
            <div className="flex flex-col gap-4">
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <CreateWallet
                emailAddress={emailRef.current?.value}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
