import { useEffect } from 'react'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import AuthModal from '../components/AuthModal'
import style from "../styles/Home.module.css"
import MapUI from '@/components/MapUI'
import BackdropMap from '@/components/BackdropMap'

export default function Home () {
  const supabase = useSupabaseClient()
  const { isLoading, session } = useSessionContext()
  
  useEffect(() => {
    console.log(session)
  }, [session])

  return (
    <main className={style.main}>
      <BackdropMap />
      {!session && !isLoading && 
        <AuthModal supabase={supabase} />
      }
      {session && 
        <MapUI />
      }
      {session && 
        <Account session={session} />
      }
    </main>
  )
}