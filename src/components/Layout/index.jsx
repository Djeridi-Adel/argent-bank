import Header from "../Header";
import Footer from "../Footer";

function layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout;