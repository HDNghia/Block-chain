import './App.css';
import '../node_modules/web3.js-browser/build/web3.js';
// const Web3 = require('web3');
import Web3 from 'web3';

function App() {
  const abi = [
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "index",
          "type": "uint8"
        }
      ],
      "name": "approveRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contribute",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_value",
          "type": "uint8"
        },
        {
          "internalType": "address payable",
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "createRequest",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "index",
          "type": "uint8"
        }
      ],
      "name": "finalizeRequest",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fundme",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "invitee",
          "type": "address"
        }
      ],
      "name": "invite",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_minimum",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ReceivedEth",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "approvers",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBanlance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "manager",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minimumContribution",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "requests",
      "outputs": [
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "value",
          "type": "uint8"
        },
        {
          "internalType": "address payable",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "complete",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "approvalCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const address = '0x1cac44C633419A5d5eDa75Af45a497574fD086dA';

  const web3 = new Web3(window.ethereum);

  var contract = new web3.eth.Contract(abi, address);

  console.log('check contract: ', contract.methods);
  const button = () => {
    connectMM()
    contract.methods.invite('0x4df345D95988C85F6b4b304770E7dE4966572818').send({
      from: '0x4c71d7394e8e192988405DE51Af58e488dd350e4'
    });
  }

  async function connectMM() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Check curentAdress acount: ", accounts);
  }

  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
  else {
    console.log('metaMask in uninstall')
  }
  return (
    <div className="App">
      <button onClick={() => button()}>click</button>
    </div>
  );
}

export default App;
