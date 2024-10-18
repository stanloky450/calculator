import React from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import CalProvider from './context/CalContext'


const btnValues =[
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "=", "^"],
]


const App = () => {
  return (
    <CalProvider>
        <Wrapper>
            <Screen/>
            <ButtonBox>
                {btnValues.flat().map((btn, i) => (
                    <Button value={btn} key={i} />
                ))}
            </ButtonBox>
        </Wrapper>
      
    </CalProvider>
  )
}

export default App
