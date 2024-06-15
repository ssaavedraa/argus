import { auth, signOut } from '@hex-auth'
import { publicRoutes } from '@hex-routes'

const DashboardPage = async () => {
  const session = await auth()

  return (
    <div>
      DashboardPage
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          'use server'

          await signOut({
            redirectTo: publicRoutes[0],
          })
        }}
      >
        <button>Sign Out</button>
      </form>
    </div>
  )
}

export default DashboardPage
