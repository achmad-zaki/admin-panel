import Header from './Header'
import Sidebar from './Sidebar'
import { useRouter } from 'next/router'

const Layouts = ({ children }) => {
  const router = useRouter()
  const currentPath = router.pathname

  const mapPathToBreadcrumb = (path) => {
    switch (path) {
      case '/dashboard':
        return 'Dashboard';
      case '/data-pengguna':
        return 'Data Pengguna';
      case '/postingan':
        return 'Postingan';
      default:
        return 'Unknown Page';
    }
  }

  const currentBreadcrumb = mapPathToBreadcrumb(currentPath);

  return (
    <>
      <Header />
      <Sidebar label={currentBreadcrumb}>
        {children}
      </Sidebar>
    </>
  )
}

export default Layouts