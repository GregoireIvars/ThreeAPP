import Footer from "./footer";
import Header from "./header";


interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div  className="">
    <Header/>
    <div id="mainFooter" className="">
        <main className={""} id="main">
            {children}
        </main>
        <Footer />
    </div>
</div>
  );
}

export default Layout;