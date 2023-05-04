import Nav from './Nav'

export interface Props {
  children?: React.ReactNode;
}

const Layout = ( props: Props ) => {
  return (
    <>
      <Nav/>
      <main className="bg-stone-950">
        {props.children}
      </main>
    </>
  )
}

export default Layout