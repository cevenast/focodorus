import Nav from './Nav'

export interface Props {
  children?: React.ReactNode;
}

const Layout = ( props: Props ) => {
  return (
    <>
      <Nav/>
      <main className="bg-pomo-1">
        {props.children}
      </main>
    </>
  )
}

export default Layout