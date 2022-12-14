import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { dieRool, getRandomInt } from "~/utils";
import { Contract, ethers } from "ethers";
import { useEffect } from "react";

interface UserIdentity {
  name: string;
  idNumber: string;
}

interface LoginContract extends Partial<Contract> {
  verifyUserIdentity(id: UserIdentity): boolean;
}

// const loginContract: LoginContract = // ...

class LoginContractIns {
  verifyUserIdentity() {
    return false;
  }
}

const loginContract: LoginContract = new LoginContractIns();

const Header = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  // crypto.getRandomValues();

  useEffect(() => {
    // Verify user identity and allow login if successful
    const userId = { name: "John Doe", idNumber: "123456789" };
    if (loginContract.verifyUserIdentity(userId)) {
      // Login successful
    } else {
      // Login failed
    }
  }, []);

  return (
    <div
      className="header-content text-center w-full h-[100px] bg-slate-900 text-white"
      // onClick={() => console.log(getRandomInt(9, 10))}
      onClick={() => console.log(dieRool(0, 100))}
    >
      Header
      {!address ? (
        <button onClick={connectWithMetamask}>Connect MetaMask</button>
      ) : null}
    </div>
  );
};

export default Header;
