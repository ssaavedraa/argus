import { auth, signOut } from '@auth'

const DashboardPage = async () => {
  const session = await auth()

  return (
    <div>
      DashboardPage
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <form
        action={async () => {
          'use server'

          await signOut()
        }}
      >
        <button>Sign Out</button>
      </form>
    </div>
  )
}

export default DashboardPage
