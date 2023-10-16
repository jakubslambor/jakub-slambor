import { toolkit } from '~/data/toolkit'
import HeroHighlight from '../components/HeroHighlight'
import HeroSection from '../components/HeroSection'
import PageSection from '../components/PageSection'
import Dock from './Dock'
import ToolkitItem from './ToolkitItem'

export const metadata = {
  title: 'Toolkit',
}

export default function Toolkit() {
  return (
    <div className="container bg-gradient">
      <HeroSection imageSrc="/toolkit.jpg" imageAlt="Toolkit">
        <p>
          I enjoy discovering and using keyboard friendly apps and services.
          Design is a big part of my life, so I’m always on the lookout for{' '}
          <HeroHighlight>beautifully designed</HeroHighlight> tools.
        </p>

        <p>
          Below you can find a collection of my favourite apps, services and
          gear. This is a living, <HeroHighlight>breathing</HeroHighlight>{' '}
          document. I’ll update it as I go.
        </p>
      </HeroSection>

      <PageSection
        title="Dock"
        subtitle="Some of my current favourite and/or most used apps"
        className="lg:mx-32 xl:mx-52"
      >
        <Dock />
      </PageSection>

      <PageSection title="Tools, gear, and more" className="lg:mx-32 xl:mx-52">
        {toolkit.map((category, idx) => (
          <div key={idx}>
            <h3 className="mb-2 mt-7 font-grotesk text-xl font-bold uppercase text-white">
              {category.name}
            </h3>

            {category.items.map((item, idx) => (
              <ToolkitItem item={item} key={idx} />
            ))}
          </div>
        ))}
      </PageSection>
    </div>
  )
}
