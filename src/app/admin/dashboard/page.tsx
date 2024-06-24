import { signOut } from '@hex-auth'
import { publicRoutes } from '@hex-routes'

const DashboardPage = async () => {
  // TODO: COMPONENTIZE HEADER
  return (
    <>
      <h1>DashboardPage</h1>
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
    </>
  )
}

export default DashboardPage
