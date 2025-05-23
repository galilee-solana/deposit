// 'use client'
//
// import { getDepositProgram, getDepositProgramId } from '@project/anchor'
// import { useConnection } from '@solana/wallet-adapter-react'
// import { Cluster, Keypair, PublicKey } from '@solana/web3.js'
// import { useMutation, useQuery } from '@tanstack/react-query'
// import { useMemo } from 'react'
// import toast from 'react-hot-toast'
// import { useCluster } from '../cluster/cluster-data-access'
// import { useAnchorProvider } from '../solana/solana-provider'
// import { useTransactionToast } from '../ui/ui-layout'
//
// export function useDepositProgram() {
//   const { connection } = useConnection()
//   const { cluster } = useCluster()
//   const transactionToast = useTransactionToast()
//   const provider = useAnchorProvider()
//   const programId = useMemo(() => getDepositProgramId(cluster.network as Cluster), [cluster])
//   const program = useMemo(() => getDepositProgram(provider, programId), [provider, programId])
//
//   const accounts = useQuery({
//     queryKey: ['deposit', 'all', { cluster }],
//     queryFn: () => program.account.deposit.all(),
//   })
//
//   const getProgramAccount = useQuery({
//     queryKey: ['get-program-account', { cluster }],
//     queryFn: () => connection.getParsedAccountInfo(programId),
//   })
//
//   const initialize = useMutation({
//     mutationKey: ['deposit', 'initialize', { cluster }],
//     mutationFn: (keypair: Keypair) =>
//       program.methods.initialize().accounts({ deposit: keypair.publicKey }).signers([keypair]).rpc(),
//     onSuccess: (signature) => {
//       transactionToast(signature)
//       return accounts.refetch()
//     },
//     onError: () => toast.error('Failed to initialize account'),
//   })
//
//   return {
//     program,
//     programId,
//     accounts,
//     getProgramAccount,
//     initialize,
//   }
// }
//
// export function useDepositProgramAccount({ account }: { account: PublicKey }) {
//   const { cluster } = useCluster()
//   const transactionToast = useTransactionToast()
//   const { program, accounts } = useDepositProgram()
//
//   const accountQuery = useQuery({
//     queryKey: ['deposit', 'fetch', { cluster, account }],
//     queryFn: () => program.account.deposit.fetch(account),
//   })
//
//   const closeMutation = useMutation({
//     mutationKey: ['deposit', 'close', { cluster, account }],
//     mutationFn: () => program.methods.close().accounts({ deposit: account }).rpc(),
//     onSuccess: (tx) => {
//       transactionToast(tx)
//       return accounts.refetch()
//     },
//   })
//
//   const decrementMutation = useMutation({
//     mutationKey: ['deposit', 'decrement', { cluster, account }],
//     mutationFn: () => program.methods.decrement().accounts({ deposit: account }).rpc(),
//     onSuccess: (tx) => {
//       transactionToast(tx)
//       return accountQuery.refetch()
//     },
//   })
//
//   const incrementMutation = useMutation({
//     mutationKey: ['deposit', 'increment', { cluster, account }],
//     mutationFn: () => program.methods.increment().accounts({ deposit: account }).rpc(),
//     onSuccess: (tx) => {
//       transactionToast(tx)
//       return accountQuery.refetch()
//     },
//   })
//
//   const setMutation = useMutation({
//     mutationKey: ['deposit', 'set', { cluster, account }],
//     mutationFn: (value: number) => program.methods.set(value).accounts({ deposit: account }).rpc(),
//     onSuccess: (tx) => {
//       transactionToast(tx)
//       return accountQuery.refetch()
//     },
//   })
//
//   return {
//     accountQuery,
//     closeMutation,
//     decrementMutation,
//     incrementMutation,
//     setMutation,
//   }
// }
