import MainHeader from "./main-header";

function layout(props) {
    return (
        <>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default layout;