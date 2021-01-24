import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>

      {/* Use "Link" from "react-router-dom" instead of the a tag to prevent the reload when click the link */}
      <Link to="/">Go Back</Link> 
    </div>
  )
}

export default About

