import Anchor from '@/components/anchor'
import Package from '../../../../package.json'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-1 items-center mb-8">
      <p className="font-semibold text-center">Site Version: {Package.version}</p>
      <p className="font-semibold text-center">
        Created with ❤️ by <Anchor href={Package.author.url}>{Package.author.nickname}</Anchor>
      </p>
    </footer>
  )
}
