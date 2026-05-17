import Hero       from '../components/Hero/Hero'
import About      from '../components/About/About'
import Projects   from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Leadership from '../components/Leadership/Leadership'
import Resume     from '../components/Resume/Resume'
import Contact    from '../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Leadership />
      <Resume />
      <Contact />
    </>
  )
}
