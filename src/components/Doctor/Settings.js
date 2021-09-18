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
          </Lodge>
        </div>
    )
}

const Lodge = styled.section`
    width: 100%;
`;
export default Settings