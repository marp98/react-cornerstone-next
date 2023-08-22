import dynamic from 'next/dynamic';

const DicomVolumeViewer = dynamic(
  () => import('./components/DicomVolumeViewer'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DicomVolumeViewer />
    </main>
  )
}
