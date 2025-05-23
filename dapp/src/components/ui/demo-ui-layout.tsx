'use client'

import Image from 'next/image'
import Head from 'next/head'
import * as React from 'react'
import { ReactNode, useEffect, useRef } from 'react'
import { Toaster } from 'react-hot-toast'

import { AccountChecker } from '../account/account-ui'
import { ClusterChecker, ClusterUiSelect, ExplorerLink } from '../cluster/cluster-ui'
import { WalletButton } from '../solana/solana-provider'
import CreateButton from '../create/CreateButton'
import DepositButton from '../deposit/depositButton'

export function DemoUILayout({ children }: { children: ReactNode }) {

  return (
    <>
    <Head>
      <link rel="preload" href="/D-logo-white.svg" as="image" type="image/svg+xml" />
    </Head>
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <div className="navbar bg-cream text-black flex-col md:flex-row items-center justify-between px-4 py-4 min-h-[64px] flex-shrink-0">
        <div className="h-full">
          <a href="/">
            <Image src="/D-logo-white.svg" alt="Logo" width={0} height={0} className="h-10 w-auto object-contain" priority />
          </a>
        </div>
        {/* Wallet & Cluster buttons */}
        <div className="flex-none space-x-2">
          <div className="hidden sm:block space-x-2">
            <CreateButton />
            <DepositButton />
          </div>
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </div>
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      {/* Main Menu */}
      <div className="flex-grow w-full bg-cream text-black overflow-y-auto">
        <div className="h-full px-4 md:px-12">
          {children}
        </div>
        <div>
          <Toaster position="bottom-right" toastOptions={{
            duration: 5000
          }} />
        </div>
      </div>
    </div>
  </>
  )
}

export function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
}: {
  children: ReactNode
  title: string
  hide: () => void
  show: boolean
  submit?: () => void
  submitDisabled?: boolean
  submitLabel?: string
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (!dialogRef.current) return
    if (show) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [show, dialogRef])

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button className="btn btn-xs lg:btn-md btn-primary" onClick={submit} disabled={submitDisabled}>
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}