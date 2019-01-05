export default async ({ store, app, redirect }) => {
  console.log('AUTH Middleware===', app.$sf)
  if (process.server) return

  if (!store.state.isAuth) {
    return redirect('/errors/unauth')
  }
}
