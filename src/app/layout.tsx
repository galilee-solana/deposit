import './globals.css'
import { ClusterProvider } from '@/components/cluster/cluster-data-access'
import { SolanaProvider } from '@/components/solana/solana-provider'
import { UiLayout } from '@/components/ui/ui-layout'
import { ReactQueryProvider } from './react-query-provider'
import { DepoClientProvider } from '@/contexts/useDepoClientCtx'
export const metadata = {
  title: 'DEPO',
  description: 'Dynamic Escrow Platform Operation',
}

const links: { label: string; path: string }[] = [
  { label: 'Account', path: '/account' },
  { label: 'Clusters', path: '/clusters' },
  { label: 'Deposit Program', path: '/deposit' },
  { label: 'Escrow', path: '/escrow' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClusterProvider>
            <SolanaProvider>
              <DepoClientProvider>
                <UiLayout>
                  {children}
                </UiLayout>
              </DepoClientProvider>
            </SolanaProvider>
          </ClusterProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
