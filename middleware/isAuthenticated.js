export default async ({ store, redirect }) => {
  debugger
  console.log('AUTH Middleware===')
  if (!store.state.isAuth) {
    return redirect('/errors/unauth')
  }
}
