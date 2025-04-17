'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useDepoClient } from '@/contexts/useDepoClientCtx'

export default function CreateButton() {
  const { client } = useDepoClient()
  const router = useRouter()

  const handleClick = async () => {
    // router.push('/escrow/create') // Route to page = src/app/escrow/create/page.tsx
    if (client) {
      const escrow = await client.createEscrow("test", "test")
      router.push(`/escrow/${escrow.uuid}`)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 border-2 border-black text-black bg-white rounded-lg hover:bg-gray-100 transition"
    >
      Create DEPO
    </button>
  )
}
