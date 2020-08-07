//import Link from 'next/link'
//import Layout from '../components/Layout'

//環境変数MY_STEPを出力してみる（next.config.jsに定義）
console.log('MY_STEP',process.env.MY_STEP);

const IndexPage = () => {
  return(
    <div>
      MY_STEP:{process.env.MY_STEP}
    </div>
  )
}
export default IndexPage
