import { dock } from '@/data/dock'
import DockItem from './DockItem'

export default function Dock() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-y-2 rounded-3xl border border-steel/70 bg-gray/50 p-1.5 backdrop-blur-xl sm:flex-row">
        {dock.map((item, idx) => (
          <DockItem item={item} key={idx} />
        ))}
      </div>
    </div>
  )
}
