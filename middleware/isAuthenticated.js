export default async ({ store, redirect }) => {
  if (!store.state.isAuth) {
    return redirect('/errors/unauth')
  }
}
