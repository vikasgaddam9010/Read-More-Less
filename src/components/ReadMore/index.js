import {MainContainer, BgImg, Head, Para} from './styledComponents'
import {useState} from 'react'
import './index.css'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [description, setDescription] = useState(
    'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.',
  )
  const [readLess, setReadLess] = useState(false)

  const btnClickToReadMore = () => {
    if (readLess === true) {
      setDescription(
        'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.',
      )
      setReadLess(false)
    } else {
      setDescription(reactHooksDescription)
      setReadLess(true)
    }
  }

  const btnText = readLess ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <Head>React Hooks</Head>
      <p>Hooks are a new addition to React</p>
      <BgImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>
        {description}
        <span></span>
      </Para>
      <button type="button" onClick={btnClickToReadMore}>
        {btnText}
      </button>
    </MainContainer>
  )
}
export default ReadMore
