import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Settings = () => {
    const [amount, setAmount] = useState(null)

    const handleAmount = (e) => {
        setAmount(e.target.value)
    }
    

    const handleWalletFund = async (e) => {
        e.preventDefault() ;
        const url = "https://frozen-thicket-57367.herokuapp.com/api/v1/auth/fund-wallet"
        const token = JSON.parse(localStorage.getItem('profile')).data.token;
    
        const config = {
          headers: {Authorization: `Bearer ${token}` }
        }
    
        try {
          const data = await axios.post(url, {
            amount
          },
            config
          )
          alert('Wallet funded')
          setAmount('');
          console.log(data)
        } catch (error) {
          console.log(error)
          alert('Not successful')
        }
      }

    return (
        <div>
            <Lodge className="text-black mb-5">
                <div className ='font-bold text-2xl'>
                    Settings
                </div>

                <form onSubmit = {handleWalletFund} className = 'flex h-full justify-center items-center'> 
                    <input 
                        type = "text"
                        placeholder = "Enter amount to fund" 
                        value = {amount}
                        onChange = {handleAmount}  
                        className = 'amount py-3 px-4 mr-2'  
                    />
                    <input type = "submit" value = "Fund Wallet" className = 'btn text-white' />
                </form>
          </Lodge>
        </div>
    )
}

const Lodge = styled.section`
    width: 100%;

    form {
        input {
            outline: none;
        }

        btn {
            background: rgba(0, 128, 0, .3);
            cursor: pointer;
        }
    }
`;
export default Settings