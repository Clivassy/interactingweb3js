'use client'
// pages/index.tsx
import { useEffect, useState } from 'react';
import contract from '../lib/utils/data';

const HomePage: React.FC = () => {
  const [balanceOfAccount, setBalanceOfAccount] = useState<string | null>(null);
   const [contractName, setcontractName] = useState<string | null>(null);

useEffect(() => {
  const fetchData = async () => {
    try {
    const tempBalance: string = await contract.methods.balanceOf('0x51C72848c68a965f66FA7a88855F9f7784502a7F').call()
    const tempToken: string = await contract.methods.name().call();
    setBalanceOfAccount(tempBalance.toString());
    setcontractName(tempToken);
    } catch (error) {
      console.error("Error fetching data from smart contract:", error);
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <h1>Token Name : {contractName}</h1>
      <p>Blance : {balanceOfAccount}</p>
    </div>
  );
};
export default HomePage;