import { signOut } from '@hex-auth'
import { publicRoutes } from '@hex-routes'

import { Button } from '@hex-shared-components/button'

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
        <Button>Sign Out</Button>
      </form>
    </>
  )
}

export default DashboardPage
