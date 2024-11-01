// src/ElectionContract.js
import { ethers } from 'ethers';

// Replace this with your deployed contract address
const contractAddress = "0x6d0A9Fd66Eac67C83937e5014cb84Fa996317c63";
const abi = [
    // Add your contract ABI here
    {
      "inputs": [],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "hasVoted",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
  ];

class ElectionContract {
    constructor() {
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        this.contract = new ethers.Contract(contractAddress, abi, this.provider.getSigner());
    }

    async addCandidate(name) {
        const tx = await this.contract.addCandidate(name);
        await tx.wait();
    }

    async vote(candidateId) {
        const tx = await this.contract.vote(candidateId);
        await tx.wait();
    }

    async getCandidate(candidateId) {
        return await this.contract.getCandidate(candidateId);
    }

    async getVoteCount(candidateId) {
        return await this.contract.getVoteCount(candidateId);
    }

    async hasVoted(voterAddress) {
        return await this.contract.hasVoted(voterAddress);
    }
}

export default ElectionContract;
