export default async ({ store, redirect }) => {
  if (!store.getters.isAuthenticated) {
    return redirect('/')
  }
}
